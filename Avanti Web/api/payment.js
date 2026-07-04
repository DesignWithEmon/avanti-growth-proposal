// Mock Payment Gateway for Avanti Web

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { action, order_id } = req.query;

    if (!order_id) {
        return res.status(400).send("Missing order ID");
    }

    const order = (global.avantiOrders || []).find(o => o.id == order_id);

    if (action === 'checkout') {
        if (!order) {
            return res.status(404).send("Order not found or session expired.");
        }
        
        // Render a beautiful mock payment gateway HTML
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
                
                <a href="/api/payment?action=callback&status=success&order_id=${order.id}" class="btn btn-bkash">Pay with bKash</a>
                <a href="/api/payment?action=callback&status=success&order_id=${order.id}" class="btn btn-card">Pay with Card / SSLCommerz</a>
                <a href="/track.html" class="btn btn-cancel">Cancel Payment</a>
                
                <div class="footer">🔒 256-bit Secure Connection (Demo)</div>
            </div>
        </body>
        </html>
        `;
        res.setHeader('Content-Type', 'text/html');
        return res.status(200).send(html);
    }

    if (action === 'callback') {
        const { status } = req.query;
        if (status === 'success') {
            if (order) {
                order.payment_status = 'Paid';
                // Find order index and update global array
                const index = global.avantiOrders.findIndex(o => o.id == order.id);
                if (index !== -1) {
                    global.avantiOrders[index] = order;
                }
            }
            // Redirect to track page with success
            res.redirect(302, `/track.html?id=${order_id}&payment=success`);
        } else {
            res.redirect(302, `/track.html?id=${order_id}&payment=failed`);
        }
        return;
    }

    return res.status(404).send("Invalid action");
};
