module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
        return;
    }

    try {
        const body = req.body || {};
        let data = body;
        if (typeof body === 'string') {
            data = JSON.parse(body);
        }

        const { id, status } = data;

        if (!id || !status) {
            res.status(400).json({ success: false, message: 'Missing id or status' });
            return;
        }

        const fs = require('fs');
        const dbPath = '/tmp/avanti_orders.json';

        if (fs.existsSync(dbPath)) {
            let orders = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            const orderIndex = orders.findIndex(o => o.id === id);
            
            if (orderIndex !== -1) {
                orders[orderIndex].status = status;
                fs.writeFileSync(dbPath, JSON.stringify(orders, null, 2));
                res.status(200).json({ success: true, message: 'Status updated' });
            } else {
                res.status(404).json({ success: false, message: 'Order not found' });
            }
        } else {
            res.status(404).json({ success: false, message: 'No database found' });
        }
    } catch (err) {
        console.error("Status update error:", err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
