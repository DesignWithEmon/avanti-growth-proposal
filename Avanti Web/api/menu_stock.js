global.outOfStockItems = global.outOfStockItems || [];

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

    try {
        if (req.method === 'GET') {
            return res.status(200).json({ success: true, data: global.outOfStockItems });
        }

        if (req.method === 'POST') {
            const body = req.body || {};
            let data = body;
            if (typeof body === 'string') {
                try { data = JSON.parse(body); } catch (e) { data = require('querystring').parse(body); }
            }

            const { id, action } = data;
            
            if (!id || !action) {
                return res.status(400).json({ success: false, message: 'Missing id or action' });
            }

            if (action === 'add') {
                if (!global.outOfStockItems.includes(id)) {
                    global.outOfStockItems.push(id);
                }
            } else if (action === 'remove') {
                global.outOfStockItems = global.outOfStockItems.filter(item => item !== id);
            }

            return res.status(200).json({ success: true, message: 'Stock updated', data: global.outOfStockItems });
        }
    } catch (err) {
        console.error('Menu stock error:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
