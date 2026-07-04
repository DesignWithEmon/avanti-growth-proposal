/**
 * Hawa Restaurant — WhatsApp Automation Bot
 * ============================================
 * 
 * Features:
 * - Polls Vercel API every 10 seconds for new orders & reservations
 * - Auto-replies to customer messages (menu, location, hours, booking)
 * - Sends beautiful WhatsApp receipts to customers when orders are placed
 * - Sends instant order alerts to the owner's WhatsApp
 * - Sends reservation confirmations when status changes
 * 
 * Setup:
 * 1. npm install
 * 2. node bot.js
 * 3. Scan the QR code with your WhatsApp (Linked Devices)
 */

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

// ==================== CONFIGURATION ====================

const CONFIG = {
  // Vercel API base URL — change this to your actual Vercel deployment URL
  API_BASE: process.env.API_BASE || 'https://hawa-restaurant.vercel.app',

  // Owner's WhatsApp number (receives order alerts)
  OWNER_NUMBER: '8801829325393',

  // Polling interval in milliseconds (10 seconds)
  POLL_INTERVAL: 10000,

  // Track already processed items to avoid duplicate notifications
  trackedOrderIds: new Set(),
  trackedReservationIds: new Set(),
  trackedStockState: {},

  // Known auto-reply keywords and their responses
  autoReplies: {
    menu: [
      'menu', 'men', 'মেনু', 'card', 'food', 'খাবার', 'foods', 'items',
      'burger', 'pizza', 'pasta', 'rice', 'ভাত', 'বার্গার', 'পিজ্জা',
    ],
    location: [
      'location', 'address', 'address', 'ঠিকানা', 'map', 'ম্যাপ', 'where',
      'কোথায়', 'কোথায়', 'place', ' জায়গা', 'জায়গা', 'direction',
      'রাস্তা', 'road', 'বাইপাস',
    ],
    hours: [
      'hours', 'hour', 'time', 'সময়', 'সময়', 'open', 'close', 
      '24', 'এখন', 'when', 'কখন', 'opening', 'timing',
    ],
    booking: [
      'booking', 'book', 'reservation', 'reserve', 'table', 'টেবিল',
      'বুকিং', 'বুক', 'seat', 'party', 'হল', 'event', 'ইভেন্ট',
    ],
    greeting: [
      'hi', 'hello', 'hey', 'assalam', 'আসসালাম', 'আসসালামুয়ালাইকুম',
      'salam', 'hawa', 'হাই', 'হ্যালো', 'good morning', 'good evening',
      'gm', 'gn', 'good night',
    ],
    thanks: [
      'thanks', 'thank', 'thank you', 'thnx', 'tnx', 'ধন্যবাদ',
      'thnks', 'ty', 'ok', 'okay', 'good',
    ],
    contact: [
      'contact', 'phone', 'number', 'mobile', 'নাম্বার', 'ফোন',
      'call', 'কল', 'talk', 'কথা', 'manager', 'ম্যানেজার',
    ],
  },
};

// ==================== AUTO-REPLY MESSAGES ====================

const MESSAGES = {
  greeting: `🍽️ *Welcome to Hawa Restaurant & Party Centre!*\n\nMymensingh's premier 24/7 dining destination. How can we help you today?\n\n📋 *Quick options:*\n• Type *Menu* to see our food categories\n• Type *Booking* to reserve a table\n• Type *Location* for our address & map\n• Type *Hours* for opening hours\n• Type *Contact* to talk to a manager\n\nYou can also order directly on our website:\n🌐 hawa-restaurant.vercel.app`,

  menu: `📜 *Hawa Restaurant Menu*\n\nWe offer these categories:\n\n🍟 *Appetizers & Starters* (from ৳250)\n  — French Fry, Chicken Satay, Wonton, Wings & more\n\n🥘 *Soups & Nachos* (from ৳200)\n  — Thai Soup, Tom Yum, Nachos Platters\n\n🍔 *Fast Food* (from ৳250)\n  — Shawarma, Burgers, Pizza, Pasta, Lasagna\n\n🥡 *Chinese & Fusion* (from ৳150)\n  — Chowmein, Fried Rice, Chilli Onion, Sizzling\n\n🍛 *Bengali Cuisine* (from ৳80)\n  — Rice, Polao, Beef Bhuna, Chicken Roast, Mutton Rezala\n\n🍰 *Desserts & Drinks*\n\n📱 *View full menu & prices:*\n🌐 hawa-restaurant.vercel.app/menu.html`,

  location: `📍 *Hawa Restaurant & Party Centre*\n\nNear Dhaka Bypass, Maskanda Road\nMymensingh, Bangladesh\n\n🗺️ *Google Maps:*\nhttps://maps.google.com/?q=Hawa+Restaurant+Maskanda+Mymensingh\n\n🚗 Easy to find — right at the Dhaka Bypass intersection!\n\n📞 Call for directions: 01705-036161`,

  hours: `🕐 *Opening Hours*\n\nWe are OPEN *24 hours a day, 7 days a week!*\n\nBreakfast | Lunch | Dinner | Late Night — we serve all day, every day.\n\n🏠 Dining Area: Always open\n🎉 Party Centre: Bookings required (call ahead)\n🍕 Takeaway: Available 24/7\n\n📞 Hotline: 01705-036161`,

  booking: `📅 *Book a Table or Party Hall*\n\nWe offer two types of reservations:\n\n🍽️ *Dining Table Booking*\n  — For 2 to 10+ guests\n  — VIP Family Rooms available\n\n🎉 *Party Centre Hall Booking*\n  — Up to 200 guests\n  — Birthdays, Corporate Meetings, Weddings\n  — Silver / Gold / Diamond food packages\n\n📱 *Book online:*\n🌐 hawa-restaurant.vercel.app/booking.html\n\n📞 *Or call us directly:*\n01705-036161 (Hotline)\n01705-096161 (Reservations)`,

  contact: `📞 *Contact Hawa Restaurant*\n\n📱 Hotline: 01705-036161\n📱 Reservations: 01705-096161\n📧 Email: hawatheplace@gmail.com\n🌐 Web: hawa-restaurant.vercel.app\n📘 Facebook: facebook.com/hawatheplace\n\n💬 Just type your question and we'll get back to you!\n\nOur manager will be notified for any urgent requests.`,

  thanks: `🙏 *You're welcome!*\n\nWe look forward to serving you at Hawa Restaurant & Party Centre. Feel free to reach out anytime — we're here 24/7!\n\n🍽️ Bon Appétit!`,

  fallback: `Thank you for your message! 🙏\n\nOur team will review your query and get back to you shortly. For urgent matters, please call:\n\n📞 01705-036161 (Hotline)\n\nIn the meantime, you can:\n• Type *Menu* to see our food\n• Type *Booking* to reserve a table\n• Type *Location* for directions`,

  // Order confirmation template (sent to customer)
  orderConfirmation: (order) => {
    const items = order.items.map(i => `  • ${i.name} x${i.qty || 1} — ৳${i.price * (i.qty || 1)}`).join('\n');
    return `🛎️ *Order Confirmed — Hawa Restaurant*\n\nThank you, *${order.name}*! Your order has been received.\n\n📋 *Order #${order.id}*\n${items}\n\n💰 Subtotal: ৳${order.subtotal}/-\n💰 VAT (15%): ৳${order.vat}/-\n💵 *Total: ৳${order.total}/-*\n\n📍 *Pickup/Dine-in at:*\nNear Dhaka Bypass, Maskanda Road, Mymensingh\n\n📞 Any questions? Call 01705-036161\n\n_We're preparing your food fresh. Thank you for choosing Hawa!_ 🍽️`;
  },

  // Owner alert template
  ownerOrderAlert: (order) => {
    const items = order.items.map(i => `  • ${i.name} x${i.qty || 1} — ৳${i.price * (i.qty || 1)}`).join('\n');
    return `🔔 *NEW ORDER — ${order.id}*\n\n👤 *Customer:* ${order.name}\n📱 *Phone:* ${order.phone}\n\n📋 *Items:*\n${items}\n\n💰 *Total:* ৳${order.total}/-\n\n⏰ ${new Date(order.createdAt).toLocaleString()}\n${order.notes ? `📝 Notes: ${order.notes}` : ''}\n\nStatus: *${order.status}*`;
  },

  // Owner reservation alert
  ownerReservationAlert: (reservation) => {
    if (reservation.type === 'event') {
      return `📅 *NEW EVENT BOOKING — ${reservation.id}*\n\n🏢 *Host:* ${reservation.name}\n📱 *Phone:* ${reservation.phone}\n🎉 *Event:* ${reservation.eventType}\n📆 *Date:* ${reservation.eventDate}\n👥 *Guests:* ${reservation.eventGuests}\n🍽️ *Package:* ${reservation.eventPackage}\n${reservation.eventNotes ? `📝 Notes: ${reservation.eventNotes}` : ''}\n\nStatus: *${reservation.status}*`;
    }
    return `📅 *NEW TABLE BOOKING — ${reservation.id}*\n\n👤 *Guest:* ${reservation.name}\n📱 *Phone:* ${reservation.phone}\n📆 *Date:* ${reservation.date}\n🕐 *Time:* ${reservation.time}\n👥 *Guests:* ${reservation.guests}\n🏠 *Area:* ${reservation.area}\n${reservation.notes ? `📝 Notes: ${reservation.notes}` : ''}\n\nStatus: *${reservation.status}*`;
  },

  // Customer reservation confirmation
  reservationConfirmation: (reservation) => {
    if (reservation.type === 'event') {
      return `✅ *Event Booking Confirmed — Hawa*\n\nBooking #${reservation.id}\n\nThank you, *${reservation.name}*!\n\n🎉 *${reservation.eventType}*\n📆 Date: ${reservation.eventDate}\n👥 Guests: ${reservation.eventGuests}\n🍽️ Package: ${reservation.eventPackage}\n\n📍 Hawa Restaurant & Party Centre\nNear Dhaka Bypass, Maskanda Road\n\n📞 Questions? 01705-036161\n\n_We'll contact you to finalize the details. Thank you!_ 🎊`;
    }
    return `✅ *Table Booking Confirmed — Hawa*\n\nBooking #${reservation.id}\n\nThank you, *${reservation.name}*!\n\n📆 Date: ${reservation.date}\n🕐 Time: ${reservation.time}\n👥 Guests: ${reservation.guests}\n🏠 Area: ${reservation.area}\n\n📍 Hawa Restaurant & Party Centre\nNear Dhaka Bypass, Maskanda Road\n\n📞 Questions? 01705-036161\n\n_Your table is reserved. See you soon!_ 🍽️`;
  },
};

// ==================== MESSAGE CLASSIFIER ====================

function classifyMessage(text) {
  const msg = text.toLowerCase().trim();

  for (const [category, keywords] of Object.entries(CONFIG.autoReplies)) {
    for (const keyword of keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        return category;
      }
    }
  }

  return null; // no match — use fallback
}

// ==================== API POLLING ====================

async function sendSafe(client, chatId, message, orderId, label) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await client.sendMessage(chatId, message);
      console.log(`  ✓ ${label} notified for ${orderId}`);
      return;
    } catch (e) {
      if (attempt < 2) {
        console.log(`  ⚠️ ${label} retry ${attempt + 1}/3: ${e.message}`);
        await new Promise(r => setTimeout(r, 2000));
      } else {
        console.log(`  ❌ ${label} failed for ${orderId}: ${e.message}`);
      }
    }
  }
}

async function pollAPI(client) {
  try {
    const baseUrl = CONFIG.API_BASE.replace(/\/$/, '');

    // Poll orders
    const ordersRes = await fetch(`${baseUrl}/api/orders?limit=30`);
    const ordersData = await ordersRes.json();

    if (ordersData.success && ordersData.orders) {
      for (const order of ordersData.orders) {
        if (!CONFIG.trackedOrderIds.has(order.id)) {
          CONFIG.trackedOrderIds.add(order.id);
          console.log(`🆕 New order: ${order.id}`);

          // Send alert to owner
          const ownerId = `${CONFIG.OWNER_NUMBER}@c.us`;
          await sendSafe(client, ownerId, MESSAGES.ownerOrderAlert(order), order.id, 'owner');

          // Send confirmation to customer (skip if phone is N/A or invalid)
          if (order.phone && order.phone !== 'N/A' && order.phone.length >= 10) {
            const custId = `${order.phone}@c.us`;
            await sendSafe(client, custId, MESSAGES.orderConfirmation(order), order.id, 'customer');
          }
        }
      }
    }

    // Poll reservations
    const resRes = await fetch(`${baseUrl}/api/reservations?limit=30`);
    const resData = await resRes.json();

    if (resData.success && resData.reservations) {
      for (const reservation of resData.reservations) {
        if (!CONFIG.trackedReservationIds.has(reservation.id)) {
          CONFIG.trackedReservationIds.add(reservation.id);
          console.log(`🆕 New reservation: ${reservation.id}`);

          // Alert owner
          const ownerId = `${CONFIG.OWNER_NUMBER}@c.us`;
          await sendSafe(client, ownerId, MESSAGES.ownerReservationAlert(reservation), reservation.id, 'owner');

          // Notify customer
          if (reservation.phone && reservation.phone !== 'N/A' && reservation.phone.length >= 10) {
            const custId = `${reservation.phone}@c.us`;
            await sendSafe(client, custId, MESSAGES.reservationConfirmation(reservation), reservation.id, 'customer');
          }
        }

        // Check if status changed to 'confirmed' (for follow-up notification)
        if (reservation.status === 'confirmed' && CONFIG.trackedReservationIds.has(reservation.id)) {
          // Status was already tracked but now it's confirmed — could send update
          // (simplified: we already notify on first detection)
        }
      }
    }

    // Prune tracked sets to prevent memory leaks (keep last 500)
    if (CONFIG.trackedOrderIds.size > 500) {
      const arr = [...CONFIG.trackedOrderIds];
      CONFIG.trackedOrderIds = new Set(arr.slice(-500));
    }
    if (CONFIG.trackedReservationIds.size > 500) {
      const arr = [...CONFIG.trackedReservationIds];
      CONFIG.trackedReservationIds = new Set(arr.slice(-500));
    }

  } catch (err) {
    console.error('⚠️ API polling error:', err.message);
  }
}

// ==================== MAIN ====================

async function main() {
  console.log('╔══════════════════════════════════════╗');
  console.log('║   HAWA RESTAURANT — WhatsApp Bot    ║');
  console.log('║   whatsapp-web.js Automation        ║');
  console.log('╚══════════════════════════════════════╝');
  console.log(`\n🌐 API Base: ${CONFIG.API_BASE}`);
  console.log(`📱 Owner Alert: ${CONFIG.OWNER_NUMBER}`);
  console.log(`⏱️  Poll Interval: ${CONFIG.POLL_INTERVAL / 1000}s\n`);

  const client = new Client({
    authStrategy: new LocalAuth({ dataPath: path.join(__dirname, '.wwebjs_auth') }),
    puppeteer: {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });

  // QR Code generation
  client.on('qr', (qr) => {
    console.log('📱 Scan this QR code with WhatsApp (Linked Devices):\n');
    qrcode.generate(qr, { small: true });
    console.log('\n1. Open WhatsApp on your phone');
    console.log('2. Go to Settings > Linked Devices');
    console.log('3. Tap "Link a Device"');
    console.log('4. Scan the QR code above\n');
  });

  client.on('ready', () => {
    console.log('✅ WhatsApp client is ready!');
    console.log('🤖 Bot is now monitoring for new orders and reservations...\n');

    // Start API polling
    setInterval(() => pollAPI(client), CONFIG.POLL_INTERVAL);
    // Initial poll
    pollAPI(client);
  });

  client.on('authenticated', () => {
    console.log('🔐 Authenticated successfully!');
  });

  client.on('auth_failure', (msg) => {
    console.error('❌ Authentication failed:', msg);
    console.log('Try deleting the .wwebjs_auth folder and restarting.');
  });

  client.on('disconnected', (reason) => {
    console.log('⚠️ Client disconnected:', reason);
    console.log('Restarting in 5 seconds...');
    setTimeout(() => {
      client.initialize();
    }, 5000);
  });

  // Auto-reply to incoming messages
  client.on('message', async (message) => {
    // Don't reply to ourselves or broadcasts
    if (message.fromMe || message.isStatus || message.isGroupMsg) return;

    const text = message.body;
    if (!text || text.trim().length === 0) return;

    // Don't auto-reply to the owner (they get order alerts)
    const senderNumber = message.from.replace('@c.us', '');
    if (senderNumber === CONFIG.OWNER_NUMBER) return;

    const category = classifyMessage(text);
    let reply = null;

    switch (category) {
      case 'greeting': reply = MESSAGES.greeting; break;
      case 'menu': reply = MESSAGES.menu; break;
      case 'location': reply = MESSAGES.location; break;
      case 'hours': reply = MESSAGES.hours; break;
      case 'booking': reply = MESSAGES.booking; break;
      case 'contact': reply = MESSAGES.contact; break;
      case 'thanks': reply = MESSAGES.thanks; break;
      default:
        // Only reply to unknown messages if they seem like a question (contain ? or are 3+ words)
        if (text.includes('?') || text.split(' ').length >= 3) {
          reply = MESSAGES.fallback;
        }
    }

    if (reply) {
      try {
        await message.reply(reply);
        console.log(`💬 Auto-replied [${category || 'fallback'}] to ${senderNumber}`);
      } catch (e) {
        console.error('Reply error:', e.message);
      }
    }
  });

  // Initialize client
  console.log('🔄 Initializing WhatsApp client...\n');
  client.initialize();
}

main().catch(console.error);
