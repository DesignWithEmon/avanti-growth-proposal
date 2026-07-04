module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, data: { message: 'Method Not Allowed' } });
    return;
  }

  try {
    // In Vercel serverless functions, POST data is parsed automatically in req.body
    // Since the frontend sends FormData, we need to extract from req.body.
    // If it's sent as JSON or URL encoded, it will be in req.body.
    // However, if the frontend sends FormData, req.body might be a raw body or parsed if we set up body parsing.
    // Vercel handles json and urlencoded automatically. Let's make sure it handles both.
    const body = req.body || {};
    
    // Fallback if req.body is a string
    let data = body;
    if (typeof body === 'string') {
      try {
        data = JSON.parse(body);
      } catch (e) {
        // Fallback parser for url-encoded if needed
        data = require('querystring').parse(body);
      }
    }

    const name = data.name || '';
    const phone = data.phone || '';
    const deliveryType = data.delivery_type || 'Delivery';
    const address = data.address || '';
    const instructions = data.instructions || '';
    const cartJson = data.cart || '[]';

    let cart = [];
    try {
      cart = JSON.parse(cartJson);
    } catch (e) {
      cart = [];
    }

    if (!name || !phone || cart.length === 0) {
      res.status(400).json({ success: false, data: { message: 'Required fields are missing.' } });
      return;
    }

    const baseDeliveryCharge = 60.0;
    const deliveryFee = (deliveryType === 'Takeaway') ? 0 : baseDeliveryCharge;
    
    let itemsSubtotal = 0;
    cart.forEach(item => {
      const price = parseFloat(item.price) || 0;
      const qty = parseInt(item.quantity) || 1;
      itemsSubtotal += (price * qty);
    });
    
    const totalPrice = itemsSubtotal + deliveryFee;
    const orderId = Math.floor(100000 + Math.random() * 900000); // 6 digit random order ID

    const whatsappNum = '8801829325393'; // Updated Avanti WhatsApp Business number

    let msg = `*New Order received from Avanti website!*\n`;
    msg += `*Order ID:* #${orderId}\n`;
    msg += `*Customer:* ${name}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Method:* ${deliveryType === 'Takeaway' ? 'Takeaway 🏃‍♂️' : 'Home Delivery 🛵'}\n`;
    
    if (deliveryType !== 'Takeaway') {
      msg += `*Address:* ${address}\n`;
    }
    if (instructions) {
      msg += `*Special Notes:* "${instructions}"\n`;
    }
    
    msg += `\n*--- Items Ordered ---*\n`;
    cart.forEach(item => {
      msg += `• ${item.name} x ${item.quantity} (৳${item.price})\n`;
    });
    
    msg += `\n*Items Subtotal:* ৳${itemsSubtotal}\n`;
    msg += `*Delivery Charge:* ৳${deliveryFee}\n`;
    msg += `*Grand Total:* ৳${totalPrice}\n`;
    msg += `\nThank you for choosing Avanti!`;

    const waUrl = `https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(msg)}`;

    // ==========================================
    // AUTOMATION: 1. Save Order to Database
    // ==========================================
    const fs = require('fs');
    const newOrder = {
        id: orderId,
        customerName: name,
        phone: phone,
        deliveryType: deliveryType,
        total: totalPrice,
        status: 'Pending',
        date: new Date().toISOString(),
        items: cart
    };
    
    try {
        // We write to /tmp for Vercel serverless compatibility
        const dbPath = '/tmp/avanti_orders.json';
        let existingOrders = [];
        if (fs.existsSync(dbPath)) {
            existingOrders = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        }
        existingOrders.unshift(newOrder); // Add to beginning
        fs.writeFileSync(dbPath, JSON.stringify(existingOrders, null, 2));
        console.log("Order saved to database:", orderId);
    } catch (dbErr) {
        console.error("Database save failed:", dbErr);
    }

    // ==========================================
    // AUTOMATION: 2. Trigger SMS Confirmation
    // ==========================================
    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'AC_mock_sid';
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'mock_token';
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || '+1234567890';
    
    const smsMessage = `Avanti: Thanks ${name}! Your Order #${orderId} is confirmed. Amount: ৳${totalPrice}. We are preparing it now!`;
    
    console.log("--- AUTOMATION TRIGGERED: SMS ---");
    console.log(`To: ${phone}`);
    console.log(`Message: ${smsMessage}`);
    
    try {
      if (TWILIO_ACCOUNT_SID.startsWith('AC') && TWILIO_AUTH_TOKEN !== 'mock_token') {
          const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
          const twilioParams = new URLSearchParams();
          twilioParams.append('To', phone);
          twilioParams.append('From', TWILIO_PHONE_NUMBER);
          twilioParams.append('Body', smsMessage);

          // We use native fetch to avoid needing a package.json in Vercel api folder
          await fetch(twilioUrl, {
              method: 'POST',
              headers: {
                  'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: twilioParams
          });
          console.log("SMS sent successfully via Twilio.");
      } else {
          console.log("SMS simulated (No valid Twilio credentials found in ENV).");
      }
    } catch (smsErr) {
        console.error("SMS Automation Failed:", smsErr);
    }

    res.status(200).json({
      success: true,
      data: {
        order_id: orderId,
        whatsapp_url: waUrl,
        total: totalPrice
      }
    });

  } catch (err) {
    console.error('Order processing error:', err);
    res.status(500).json({ success: false, data: { message: 'Internal Server Error' } });
  }
};
