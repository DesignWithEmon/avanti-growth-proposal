// Master Unified Order API for Vercel Serverless
// Stores data in the global memory space to allow cross-request linking while the Lambda is warm.

global.avantiOrders = global.avantiOrders || [];

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { action } = req.query;

    try {
        // GET ORDERS (Read All or Track One)
        if (req.method === 'GET') {
            if (action === 'get') {
                return res.status(200).json({ success: true, data: global.avantiOrders });
            }
            if (action === 'track') {
                const { id } = req.query;
                if (!id) return res.status(400).json({ success: false, message: 'Missing order ID' });
                
                const order = global.avantiOrders.find(o => o.id == id);
                if (order) {
                    return res.status(200).json({ success: true, data: order });
                } else {
                    return res.status(404).json({ success: false, message: 'Order not found' });
                }
            }
            if (action === 'payment_checkout') {
                const { order_id } = req.query;
                if (!order_id) return res.status(400).send("Missing order ID");
                const order = global.avantiOrders.find(o => o.id == order_id);
                if (!order) return res.status(404).send("Order not found or session expired.");
                
                const html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Avanti Pay - Secure Checkout</title>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                        .container { background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; max-width: 400px; width: 100%; }
                        h2 { color: #333; margin-bottom: 5px; }
                        p.subtitle { color: #777; margin-bottom: 30px; }
                        .amount { font-size: 2rem; color: #dfb15b; font-weight: bold; margin-bottom: 20px; }
                        .btn { display: block; width: 100%; padding: 15px; margin: 10px 0; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer; transition: 0.3s; color: #fff; font-weight: bold; text-decoration: none; }
                        .btn-bkash { background-color: #e2136e; }
                        .btn-bkash:hover { background-color: #c0115e; }
                        .btn-card { background-color: #0052cc; }
                        .btn-card:hover { background-color: #0043a8; }
                        .btn-cod { background-color: #27ae60; }
                        .btn-cod:hover { background-color: #219653; }
                        .btn-cancel { background-color: #e74c3c; margin-top: 20px; }
                        .btn-cancel:hover { background-color: #c0392b; }
                        .footer { margin-top: 30px; font-size: 0.8rem; color: #aaa; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Avanti Pay</h2>
                        <p class="subtitle">Secure Mock Payment Gateway</p>
                        <p>Order ID: <strong>#${order.id}</strong></p>
                        <div class="amount">৳${order.total}</div>
                        <p style="margin-bottom: 20px; color:#555;">Choose your payment method:</p>
                        
                        <a href="/api/orders?action=payment_callback&status=success&order_id=${order.id}" class="btn btn-bkash">Pay with bKash</a>
                        <a href="/api/orders?action=payment_callback&status=success&order_id=${order.id}" class="btn btn-card">Pay with Card / SSLCommerz</a>
                        <a href="/api/orders?action=payment_callback&status=cod&order_id=${order.id}" class="btn btn-cod">Cash on Delivery (COD)</a>
                        <a href="/track.html" class="btn btn-cancel">Cancel Payment</a>
                        
                        <div class="footer">🔒 256-bit Secure Connection (Demo)</div>
                    </div>
                </body>
                </html>
                `;
                res.setHeader('Content-Type', 'text/html');
                return res.status(200).send(html);
            }

            if (action === 'payment_callback') {
                const { status, order_id } = req.query;
                if (status === 'success') {
                    const orderIndex = global.avantiOrders.findIndex(o => o.id == order_id);
                    if (orderIndex !== -1) {
                        global.avantiOrders[orderIndex].payment_status = 'Paid';
                    }
                    res.redirect(302, `/track.html?id=${order_id}&payment=success`);
                } else if (status === 'cod') {
                    const orderIndex = global.avantiOrders.findIndex(o => o.id == order_id);
                    if (orderIndex !== -1) {
                        global.avantiOrders[orderIndex].payment_status = 'COD';
                    }
                    res.redirect(302, `/track.html?id=${order_id}&payment=cod`);
                } else {
                    res.redirect(302, `/track.html?id=${order_id}&payment=failed`);
                }
                return;
            }
        }

        // POST ORDERS (Create / Update)
        if (req.method === 'POST') {
            const body = req.body || {};
            let data = body;
            if (typeof body === 'string') {
                try { data = JSON.parse(body); } 
                catch (e) { data = require('querystring').parse(body); }
            }

            // ACTION: UPDATE STATUS
            if (action === 'update') {
                const { id, status } = data;
                if (!id || !status) return res.status(400).json({ success: false, message: 'Missing id or status' });
                
                const orderIndex = global.avantiOrders.findIndex(o => o.id == id);
                if (orderIndex !== -1) {
                    global.avantiOrders[orderIndex].status = status;
                    return res.status(200).json({ success: true, message: 'Status updated' });
                } else {
                    return res.status(404).json({ success: false, message: 'Order not found' });
                }
            }

            // ACTION: CREATE ORDER
            if (action === 'create') {
                const name = data.name || '';
                const phone = data.phone || '';
                const deliveryType = data.delivery_type || 'Delivery';
                const address = data.address || '';
                const lat = data.lat || '';
                const lng = data.lng || '';
                const instructions = data.instructions || '';
                const cartJson = data.cart || '[]';

                let cart = [];
                try { cart = JSON.parse(cartJson); } catch (e) { cart = []; }

                if (!name || !phone || cart.length === 0) {
                    return res.status(400).json({ success: false, data: { message: 'Required fields are missing.' } });
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
                const orderId = Math.floor(100000 + Math.random() * 900000); 

                // 1. WhatsApp Deep Link formatting
                const whatsappNum = '8801829325393'; 
                let msg = `*New Order received from Avanti website!*\n*Order ID:* #${orderId}\n*Customer:* ${name}\n*Phone:* ${phone}\n*Method:* ${deliveryType === 'Takeaway' ? 'Takeaway 🏃‍♂️' : 'Home Delivery 🛵'}\n`;
                if (deliveryType !== 'Takeaway') {
                    msg += `*Address:* ${address}\n`;
                    if (lat && lng) {
                        msg += `*Live Location Map:* https://maps.google.com/?q=${lat},${lng}\n`;
                    }
                }
                if (instructions) msg += `*Special Notes:* "${instructions}"\n`;
                msg += `\n*--- Items Ordered ---*\n`;
                cart.forEach(item => msg += `• ${item.name} x ${item.quantity} (৳${item.price})\n`);
                msg += `\n*Items Subtotal:* ৳${itemsSubtotal}\n*Delivery Charge:* ৳${deliveryFee}\n*Grand Total:* ৳${totalPrice}\n\nThank you for choosing Avanti!`;
                
                const waUrl = `https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(msg)}`;

                // 2. Save Order to Memory Array (For Dashboard)
                const newOrder = {
                    id: orderId,
                    customerName: name,
                    phone: phone,
                    deliveryType: deliveryType,
                    address: address,
                    lat: lat,
                    lng: lng,
                    total: totalPrice,
                    status: 'Pending',
                    payment_status: 'Pending',
                    date: new Date().toISOString(),
                    items: cart
                };
                global.avantiOrders.unshift(newOrder);  

                // 3. Trigger SMS Confirmation
                const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'AC_mock_sid';
                const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'mock_token';
                const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || '+1234567890';
                const smsMessage = `Avanti: Thanks ${name}! Your Order #${orderId} is confirmed. Amount: ৳${totalPrice}. We are preparing it now!`;
                
                try {
                    if (TWILIO_ACCOUNT_SID.startsWith('AC') && TWILIO_AUTH_TOKEN !== 'mock_token') {
                        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
                        const twilioParams = new URLSearchParams();
                        twilioParams.append('To', phone);
                        twilioParams.append('From', TWILIO_PHONE_NUMBER);
                        twilioParams.append('Body', smsMessage);
                        await fetch(twilioUrl, {
                            method: 'POST',
                            headers: {
                                'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: twilioParams
                        });
                    }
                } catch (smsErr) {
                    console.error("SMS Automation Failed:", smsErr);
                }

                return res.status(200).json({
                    success: true,
                    data: {
                        order_id: orderId,
                        whatsapp_url: waUrl,
                        payment_url: `/api/orders?action=payment_checkout&order_id=${orderId}`,
                        total: totalPrice
                    }
                });
            }
        }

        res.status(404).json({ success: false, message: 'Invalid Action' });

    } catch (err) {
        console.error('Order API error:', err);
        res.status(500).json({ success: false, data: { message: 'Internal Server Error' } });
    }
};
