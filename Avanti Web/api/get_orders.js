module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
        return;
    }

    const fs = require('fs');
    const dbPath = '/tmp/avanti_orders.json';

    try {
        if (fs.existsSync(dbPath)) {
            const orders = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            res.status(200).json({ success: true, data: orders });
        } else {
            // No orders yet
            res.status(200).json({ success: true, data: [] });
        }
    } catch (err) {
        console.error("Error reading database:", err);
        res.status(500).json({ success: false, message: 'Failed to read database' });
    }
};
