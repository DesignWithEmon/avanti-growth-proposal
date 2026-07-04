global.avantiReservations = global.avantiReservations || [];

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
    // GET RESERVATIONS
    if (req.method === 'GET') {
      if (action === 'get') {
        return res.status(200).json({ success: true, data: global.avantiReservations });
      }
    }

    // POST RESERVATIONS (Create / Update)
    if (req.method === 'POST') {
      const body = req.body || {};
      let data = body;
      if (typeof body === 'string') {
        try { data = JSON.parse(body); } catch (e) { data = require('querystring').parse(body); }
      }

      // ACTION: UPDATE STATUS
      if (action === 'update') {
        const { id, status } = data;
        if (!id || !status) return res.status(400).json({ success: false, message: 'Missing id or status' });
        
        const resIndex = global.avantiReservations.findIndex(r => r.id == id);
        if (resIndex !== -1) {
          global.avantiReservations[resIndex].status = status;
          return res.status(200).json({ success: true, message: 'Status updated' });
        } else {
          return res.status(404).json({ success: false, message: 'Reservation not found' });
        }
      }

      // ACTION: CREATE RESERVATION (No action param)
      const name = data.name || '';
      const phone = data.phone || '';
      const email = data.email || '';
      const guests = data.guests || '';
      const date = data.date || '';
      const time = data.time || '';
      const requests = data.requests || '';

      if (!name || !phone || !date || !time) {
        return res.status(400).json({ success: false, data: { message: 'Required fields are missing.' } });
      }

      const resId = Math.floor(10000 + Math.random() * 90000); // 5 digit reservation ID
      
      const newReservation = {
        id: resId,
        name,
        phone,
        email,
        guests,
        date,
        time,
        requests,
        status: 'Pending',
        timestamp: new Date().toISOString()
      };

      global.avantiReservations.push(newReservation);

      return res.status(200).json({
        success: true,
        data: {
          message: 'Reservation confirmed successfully.',
          res_id: resId
        }
      });
    }

  } catch (err) {
    console.error('Reservation processing error:', err);
    res.status(500).json({ success: false, data: { message: 'Internal Server Error' } });
  }
};

