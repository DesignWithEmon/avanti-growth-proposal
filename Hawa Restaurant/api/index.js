// Consolidated API — single serverless function with internal routing
// All routes share the same in-memory store

const ADMIN_PASSWORD = 'Hawa@Admin2026';

// In-memory store (shared within this single function)
const store = { orders: [], reservations: [], menuStock: {}, lastOrderId: 0, lastReservationId: 0 };

function genOrderId() { store.lastOrderId++; return 'HWA-ORD-' + String(store.lastOrderId).padStart(4, '0'); }
function genResId() { store.lastReservationId++; return 'HWA-RES-' + String(store.lastReservationId).padStart(4, '0'); }

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const url = req.url || '';
  const seg = url.split('?')[0].replace(/^\/api\/?/, '');

  try {
    // --- Orders ---
    if (seg === 'orders' || seg === 'orders/') {
      if (req.method === 'POST') {
        const { name, phone, items, subtotal, vat, total, notes, orderType, location, payment } = req.body;
        if (!name || !phone || !items || !items.length) return res.status(400).json({ error: 'Name, phone, and items required.' });
        const order = {
          id: genOrderId(), name, phone,
          orderType: orderType || 'Dine-in', location: location || '',
          payment: payment || { method: 'Cash', trxId: '' },
          items, subtotal: subtotal || 0, vat: vat || 0, total: total || 0,
          notes: notes || '', status: 'new', createdAt: new Date().toISOString()
        };
        store.orders.unshift(order);
        if (store.orders.length > 200) store.orders = store.orders.slice(0, 200);
        return res.status(201).json({ success: true, order, message: 'Order placed!' });
      }
      if (req.method === 'GET') {
        let orders = [...store.orders];
        const { since, status, limit } = req.query;
        if (since) orders = orders.filter(o => new Date(o.createdAt) > new Date(since));
        if (status) orders = orders.filter(o => o.status === status);
        return res.status(200).json({ success: true, orders: orders.slice(0, parseInt(limit) || 20), total: store.orders.length });
      }
    }

    // --- Order Status ---
    if (seg === 'order_status') {
      const { orderId, status, password, source } = req.body;
      if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized.' });
      const order = store.orders.find(o => o.id === orderId);
      if (!order) return res.status(404).json({ error: 'Order not found.' });
      const valid = ['new', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'];
      if (!valid.includes(status)) return res.status(400).json({ error: 'Invalid status.' });
      order.status = status;
      order.statusBy = source || 'dashboard';
      order.updatedAt = new Date().toISOString();
      return res.status(200).json({ success: true, order });
    }

    // --- Reservations ---
    if (seg === 'reservations' || seg === 'reservations/') {
      if (req.method === 'POST') {
        const b = req.body;
        if (!b.name || !b.phone) return res.status(400).json({ error: 'Name and phone required.' });
        const r = { id: genResId(), type: b.type || 'table', name: b.name, phone: b.phone, createdAt: new Date().toISOString(), status: 'pending' };
        if (b.type === 'event') Object.assign(r, { eventDate: b.eventDate || b.date || '', eventType: b.eventType || '', eventGuests: b.eventGuests || '', eventPackage: b.eventPackage || '', eventNotes: b.eventNotes || '' });
        else Object.assign(r, { date: b.date || '', time: b.time || '', guests: b.guests || '', area: b.area || '', notes: b.notes || '' });
        store.reservations.unshift(r);
        if (store.reservations.length > 200) store.reservations = store.reservations.slice(0, 200);
        return res.status(201).json({ success: true, reservation: r });
      }
      if (req.method === 'GET') {
        let rs = [...store.reservations];
        const { since, status, type, limit } = req.query;
        if (since) rs = rs.filter(r => new Date(r.createdAt) > new Date(since));
        if (status) rs = rs.filter(r => r.status === status);
        if (type) rs = rs.filter(r => r.type === type);
        return res.status(200).json({ success: true, reservations: rs.slice(0, parseInt(limit) || 20), total: store.reservations.length });
      }
    }

    // --- Reservation Status ---
    if (seg === 'reservation_status') {
      const { reservationId, status, password } = req.body;
      if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized.' });
      const r = store.reservations.find(r => r.id === reservationId);
      if (!r) return res.status(404).json({ error: 'Reservation not found.' });
      const valid = ['pending', 'confirmed', 'cancelled', 'completed'];
      if (!valid.includes(status)) return res.status(400).json({ error: 'Invalid status.' });
      r.status = status; r.updatedAt = new Date().toISOString();
      return res.status(200).json({ success: true, reservation: r });
    }

    // --- Menu Stock ---
    if (seg === 'menu_stock') {
      if (req.method === 'GET') return res.status(200).json({ success: true, stock: store.menuStock });
      if (req.method === 'POST') {
        const { itemId, inStock, password } = req.body;
        if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized.' });
        if (!itemId) return res.status(400).json({ error: 'itemId required.' });
        store.menuStock[itemId] = { inStock: inStock !== false, updatedAt: new Date().toISOString() };
        return res.status(200).json({ success: true, stock: store.menuStock });
      }
    }

    // --- Admin Auth ---
    if (seg === 'admin_auth') {
      const { password } = req.body;
      if (password === ADMIN_PASSWORD) return res.status(200).json({ success: true, token: 'hawa-admin-session' });
      return res.status(401).json({ error: 'Invalid password.' });
    }

    return res.status(404).json({ error: `Route not found: ${seg}` });
  } catch (err) {
    return res.status(500).json({ error: 'Server error.', details: err.message });
  }
};
