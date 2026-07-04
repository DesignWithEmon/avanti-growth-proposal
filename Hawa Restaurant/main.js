// Global Translations Dictionary
const TRANSLATIONS = {
  en: {
    "nav-home": "Home",
    "nav-menu": "Menu",
    "nav-res": "Reservations",
    "nav-gal": "Gallery",
    "nav-con": "Contact",
    "btn-book": "Book Table",
    "btn-book-now": "Book Table Now",
    "hero-pretitle": "Welcome to Hawa",
    "hero-title": "A Culinary Haven in Mymensingh",
    "hero-desc": "Experience the perfect blend of local heritage, contemporary fast food delights, and Asian fusion classics. Set in an ambient, luxury environment in the heart of Mymensingh.",
    "btn-explore": "Explore Menu",
    "feature-1-title": "In-House Party",
    "feature-1-desc": "A luxury venue space with premium seating setups, fully customized to host your elegant birthdays, anniversaries, and family get-togethers.",
    "feature-2-title": "Outdoor Catering",
    "feature-2-desc": "Bring Hawa's signature flavors to your doorstep. We cater high-profile corporate functions and private social gatherings with full setups.",
    "feature-3-title": "Buffet Setup",
    "feature-3-desc": "Enjoy a curated, wide-ranging spread of culinary masterpieces, from rich Bengali curries to continental appetizers and gourmet desserts.",
    "chefs-title": "Chefs Recommendations",
    "chefs-subtitle": "Indulge in our culinary signatures, highly recommended by our executive chef for a memorable dining experience.",
    "explore-btn": "Explore Complete Menu",
    "card-view": "View Details",
    "cart-title": "Order Summary",
    "cart-subtotal-lbl": "Subtotal",
    "cart-vat-lbl": "VAT (15%)",
    "cart-total-lbl": "Estimated Bill",
    "cart-checkout-lbl": "Place Order",
    "search-placeholder": "Search delicious dishes...",
    "cat-all": "All Categories",
    "cat-appetizers": "Appetizers & Starters",
    "cat-soups-nachos": "Soups & Nachos",
    "cat-fast-food": "Fast Food (Burger, Pizza)",
    "cat-chinese-fusion": "Chinese & Fusion",
    "cat-bengali-cuisine": "Bengali Cuisine",
    "cat-desserts-drinks": "Desserts & Drinks",
    "menu-title": "Our Food Menu",
    "menu-subtitle": "Embark on a culinary journey through our rich local recipes, contemporary fast food delights, and Asian fusion classics.",
    "booking-title": "Bookings & Reservations",
    "booking-subtitle": "Secure your fine dining table or reserve Mymensingh's largest Party Centre for your memorable private events.",
    "tab-dining": "Book Dining Table",
    "tab-party": "Book Party Centre Hall",
    "lbl-name": "Full Name",
    "lbl-phone": "Phone Number",
    "lbl-date": "Reservation Date",
    "lbl-time": "Preferred Time",
    "lbl-guests": "Number of Guests",
    "lbl-area": "Seating Area Preference",
    "lbl-notes": "Special Requests / Notes",
    "ph-name": "E.g., Tanvir Ahmed",
    "ph-phone": "E.g., 01705-XXXXXX",
    "ph-notes": "E.g., anniversary decoration, baby high chair needed, dietary restrictions...",
    "lbl-host": "Host Name / Org",
    "lbl-event-type": "Event Type",
    "lbl-event-guests": "Estimated Guest Range",
    "lbl-event-package": "Food Package",
    "ph-host": "E.g., Rahim Group",
    "lbl-event-notes": "Setup Requirements / Additional Requests",
    "ph-event-notes": "E.g., sound system required, projector setup, specific stage decoration colors, flowers...",
    "btn-event-submit": "Send Event Booking Request",
    "gallery-title": "Photo Gallery",
    "gallery-subtitle": "Browse through our restaurant's scanned printed menu pages and preview our premium dining ambience.",
    "tab-scanned": "Scanned Printed Menu",
    "tab-ambience": "Restaurant Ambience",
    "contact-title": "Contact Hawa",
    "contact-subtitle": "We are open 24 hours a day, 7 days a week. Get in touch, call for directions, or drop us a message below.",
    "lbl-address": "Address",
    "val-address": "Near Dhaka bypass, Maskanda Road, Mymensingh.",
    "lbl-hotline": "Hotline & Reservations",
    "lbl-email": "Email Address",
    "ph-subject": "What is this about?",
    "ph-msg": "Write your query here...",
    "lbl-subject": "Subject",
    "lbl-msg": "Your Message",
    "btn-send-msg": "Send Message",
    "toast-success": "Message Sent Successfully! We will get back to you shortly.",
    "confirm-modal-title": "Reservation Successful!",
    "confirm-modal-desc": "Your reservation details have been locked in. We have sent a confirmation SMS to your phone.",
    "btn-close-modal": "Okay, Thank you",
    "confirm-lbl-id": "Booking ID",
    "confirm-lbl-name": "Name",
    "confirm-lbl-host": "Host / Org",
    "confirm-lbl-date": "Date & Time",
    "confirm-lbl-dt-type": "Event Date / Type",
    "confirm-lbl-guests-area": "Guests / Area",
    "confirm-lbl-guests-pkg": "Guests / Package",
  },
  bn: {
    "nav-home": "হোম",
    "nav-menu": "মেনু",
    "nav-res": "বুকিং",
    "nav-gal": "গ্যালারি",
    "nav-con": "যোগাযোগ",
    "btn-book": "টেবিল বুক করুন",
    "btn-book-now": "এখনই টেবিল বুক করুন",
    "hero-pretitle": "হাওয়ায় আপনাকে স্বাগতম",
    "hero-title": "ময়মনসিংহের ঐতিহ্যবাহী ও আধুনিক স্বাদ",
    "hero-desc": "স্থানীয় ঐতিহ্যবাহী রেসিপি, আধুনিক ফাস্ট ফুড এবং এশিয়ান ফিউশন খাবারের এক অপূর্ব মেলবন্ধন। ময়মনসিংহের প্রাণকেন্দ্রে একটি প্রিমিয়াম লাক্সারি পরিবেশে অনন্য ডাইনিং অভিজ্ঞতা।",
    "btn-explore": "মেনু দেখুন",
    "feature-1-title": "ইন-হাউস পার্টি",
    "feature-1-desc": "মনোরম বসার ব্যবস্থা সহ প্রিমিয়াম ভেন্যু স্পেস, যা আপনার জন্মদিন, বিবাহ বার্ষিকী এবং পারিবারিক মিলনমেলা আয়োজনের জন্য বিশেষভাবে প্রস্তুত করা হয়েছে।",
    "feature-2-title": "আউটডোর ক্যাটারিং",
    "feature-2-desc": "হাওয়ার সিগনেচার স্বাদ নিয়ে যান আপনার ঘরে। আমরা সম্পূর্ণ আয়োজন সহ কর্পোরেট অনুষ্ঠান এবং ব্যক্তিগত সামাজিক মিলনমেলার ক্যাটারিং সেবা দিয়ে থাকি।",
    "feature-3-title": "বুফে সেটআপ",
    "feature-3-desc": "বাঙালি তরকারি থেকে শুরু করে কন্টিনেন্টাল স্টার্টার এবং সুস্বাদু ডেজার্ট সহ অনন্য এবং বৈচিত্র্যময় সব মাস্টারপিস খাবারের সমাহার উপভোগ করুন।",
    "chefs-title": "শেফের স্পেশাল রেকমেন্ডেশন",
    "chefs-subtitle": "আমাদের এক্সিকিউটিভ শেফের সেরা রেকমেন্ডেশনে তৈরি বিশেষ খাবারগুলো উপভোগ করুন ডাইনিং অভিজ্ঞতার সেরা আনন্দের জন্য।",
    "explore-btn": "সম্পূর্ণ ফুড মেনু দেখুন",
    "card-view": "বিস্তারিত দেখুন",
    "cart-title": "অর্ডার সামারি",
    "cart-subtotal-lbl": "সাবটোটাল",
    "cart-vat-lbl": "ভ্যাট (১৫%)",
    "cart-total-lbl": "আনুমানিক বিল",
    "cart-checkout-lbl": "অর্ডার করুন",
    "search-placeholder": "খাবার খুঁজুন...",
    "cat-all": "সব ক্যাটাগরি",
    "cat-appetizers": "অ্যাপেটাইজার ও স্টার্টার",
    "cat-soups-nachos": "স্যুপ ও নাচোস",
    "cat-fast-food": "ফাস্ট ফুড (বার্গার, পিজ্জা)",
    "cat-chinese-fusion": "চাইনিজ ও ফিউশন",
    "cat-bengali-cuisine": "বাঙালি খাবার",
    "cat-desserts-drinks": "ডেজার্ট ও ড্রিংকস",
    "menu-title": "আমাদের ফুড মেনু",
    "menu-subtitle": "আমাদের সমৃদ্ধ স্থানীয় রেসিপি, সমসাময়িক ফাস্ট ফুড এবং এশিয়ান ফিউশন ক্লাসিকের মাধ্যমে একটি রন্ধনসম্পর্কীয় যাত্রা শুরু করুন।",
    "booking-title": "বুকিং ও রিজার্ভেশন",
    "booking-subtitle": "আপনার স্মরণীয় ব্যক্তিগত অনুষ্ঠানের জন্য ময়মনসিংহের সবচেয়ে বড় পার্টি সেন্টার হল অথবা ডাইনিং টেবিল বুক করুন।",
    "tab-dining": "ডাইনিং টেবিল বুকিং",
    "tab-party": "পার্টি সেন্টার হল বুকিং",
    "lbl-name": "পূর্ণ নাম",
    "lbl-phone": "ফোন নম্বর",
    "lbl-date": "বুকিংয়ের তারিখ",
    "lbl-time": "পছন্দের সময়",
    "lbl-guests": "অতিথি সংখ্যা",
    "lbl-area": "বসার জায়গা পছন্দ",
    "lbl-notes": "বিশেষ অনুরোধ / নোট",
    "ph-name": "যেমন: তানভীর আহমেদ",
    "ph-phone": "যেমন: ০১৭০৫-XXXXXX",
    "ph-notes": "যেমন: বার্ষিকী সাজসজ্জা, শিশুর বসার চেয়ার প্রয়োজন, খাবারের কোনো অ্যালার্জি...",
    "lbl-host": "হোস্টের নাম / প্রতিষ্ঠান",
    "lbl-event-type": "অনুষ্ঠানের ধরন",
    "lbl-event-guests": "আনুমানিক অতিথি সংখ্যা",
    "lbl-event-package": "ফুড প্যাকেজ",
    "ph-host": "যেমন: রহিম গ্রুপ",
    "lbl-event-notes": "সাজসজ্জা / অতিরিক্ত প্রয়োজনীয়তা",
    "ph-event-notes": "যেমন: সাউন্ড সিস্টেম প্রয়োজন, প্রজেক্টর সেটআপ, নির্দিষ্ট মঞ্চের সাজসজ্জার রং, ফুল...",
    "btn-event-submit": "অনুরোধ পাঠান",
    "gallery-title": "ফটো গ্যালারি",
    "gallery-subtitle": "আমাদের রেস্টুরেন্টের স্ক্যান করা প্রিন্টেড মেনু পেজগুলো দেখুন এবং আমাদের প্রিমিয়াম পরিবেশের একটি আভাস পান।",
    "tab-scanned": "স্ক্যান করা মেনু",
    "tab-ambience": "রেস্টুরেন্ট পরিবেশ",
    "contact-title": "যোগাযোগ করুন",
    "contact-subtitle": "আমরা সপ্তাহের ৭ দিন, ২৪ ঘণ্টাই খোলা আছি। যেকোনো তথ্যের জন্য যোগাযোগ করুন, ঠিকানার জন্য কল করুন অথবা নিচে মেসেজ লিখুন।",
    "lbl-address": "ঠিকানা",
    "val-address": "ঢাকা বাইপাসের কাছে, মাসকান্দা রোড, ময়মনসিংহ।",
    "lbl-hotline": "হটলাইন ও রিজার্ভেশন",
    "lbl-email": "ইমেইল অ্যাড্রেস",
    "ph-subject": "মেসেজের বিষয় কি?",
    "ph-msg": "আপনার মেসেজটি এখানে লিখুন...",
    "lbl-subject": "বিষয়",
    "lbl-msg": "আপনার মেসেজ",
    "btn-send-msg": "মেসেজ পাঠান",
    "toast-success": "মেসেজটি সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    "confirm-modal-title": "রিজার্ভেশন সফল হয়েছে!",
    "confirm-modal-desc": "আপনার বুকিং নিশ্চিত করা হয়েছে। আপনার ফোনে একটি নিশ্চিতকরণ এসএমএস পাঠানো হয়েছে।",
    "btn-close-modal": "ঠিক আছে, ধন্যবাদ",
    "confirm-lbl-id": "বুকিং আইডি",
    "confirm-lbl-name": "নাম",
    "confirm-lbl-host": "হোস্ট / প্রতিষ্ঠান",
    "confirm-lbl-date": "তারিখ ও সময়",
    "confirm-lbl-dt-type": "অনুষ্ঠানের তারিখ / ধরন",
    "confirm-lbl-guests-area": "অতিথি / বসার জায়গা",
    "confirm-lbl-guests-pkg": "অতিথি / প্যাকেজ",
  }
};

// Global Translation Function
function updateTranslations(lang) {
  document.querySelectorAll(".lang-text").forEach(el => {
    const key = el.getAttribute("data-key");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.hasAttribute("placeholder")) {
        el.setAttribute("placeholder", TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    }
  });
  
  // Update toggle buttons on page
  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    btn.textContent = lang === "en" ? "BN" : "EN";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  /* 0. Language Initialization */
  let currentLang = localStorage.getItem("hawa_lang") || "en";
  updateTranslations(currentLang);

  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("lang-toggle-btn")) {
      currentLang = currentLang === "en" ? "bn" : "en";
      localStorage.setItem("hawa_lang", currentLang);
      updateTranslations(currentLang);
      
      // If we are on the menu page, re-render it
      const menuGrid = document.getElementById("menu-items-grid");
      if (menuGrid && typeof renderMenu === "function") {
        renderMenu();
        updateCartUI();
      }
    }
  });

  /* 1. Header Scrolled Effect */
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* 2. Mobile Menu Toggle */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = navToggle.querySelector("i");
      if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
      } else {
        icon.classList.replace("fa-times", "fa-bars");
      }
    });
  }

  /* 3. Menu Page Logic */
  const menuGrid = document.getElementById("menu-items-grid");
  if (menuGrid && typeof MENU_DATA !== "undefined") {
    let currentCategory = "all";
    let searchQuery = "";
    let cart = JSON.parse(localStorage.getItem("hawa_cart")) || [];

    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartCloseBtn = document.getElementById("cart-close-btn");
    const cartFloatBtn = document.getElementById("cart-float-btn");
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartCountTitle = document.getElementById("cart-count-title");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartVat = document.getElementById("cart-vat");
    const cartTotal = document.getElementById("cart-total");
    const cartBadgeCount = document.getElementById("cart-badge-count");
    const checkoutBtn = document.getElementById("cart-checkout-btn");

    // Initialize Menu Category from URL Param
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat");
    if (catParam) {
      currentCategory = catParam;
      categoryButtons.forEach(btn => {
        if (btn.getAttribute("data-cat") === catParam) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    // Render Menu Items
    let menuStock = {};
    
    // Fetch menu stock from API
    async function fetchMenuStock() {
      try {
        const res = await fetch(`${window.location.origin}/api/menu_stock`);
        const data = await res.json();
        if (data.success) menuStock = data.stock || {};
      } catch (e) { /* silently fail — items default to in-stock */ }
    }

    window.renderMenu = async function() {
      menuGrid.innerHTML = "";
      const lang = localStorage.getItem("hawa_lang") || "en";

      // Refresh stock data
      await fetchMenuStock();
      
      const filtered = MENU_DATA.filter(item => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (item.name_bn && item.name_bn.includes(searchQuery)) ||
                              (item.desc_bn && item.desc_bn.includes(searchQuery));
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        const noResultsText = lang === "bn" ? "কোনো খাবার খুঁজে পাওয়া যায়নি।" : "No dishes found matching your query.";
        menuGrid.innerHTML = `<div class="no-results"><i class="fas fa-search" style="font-size:36px;margin-bottom:16px;color:var(--color-primary-gold)"></i><p>${noResultsText}</p></div>`;
        return;
      }

      filtered.forEach(item => {
        const card = document.createElement("div");
        
        // Check stock status
        const stockInfo = menuStock[item.id];
        const isOutOfStock = stockInfo && stockInfo.inStock === false;
        
        card.className = "menu-item-card premium-card" + (isOutOfStock ? " out-of-stock" : "");
        
        // Generate Star Rating HTML
        const rating = item.rating || 5.0;
        const fullStars = Math.floor(rating);
        const hasHalf = (rating - fullStars) >= 0.5;
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
          if (i <= fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
          } else if (i === fullStars + 1 && hasHalf) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
          } else {
            starsHtml += '<i class="far fa-star"></i>';
          }
        }

        const displayName = lang === "bn" ? (item.name_bn || item.name) : item.name;
        const displayDesc = lang === "bn" ? (item.desc_bn || item.desc) : item.desc;
        const addBtnText = lang === "bn" ? "কার্টে যোগ করুন" : "Add to Cart";
        const oosText = lang === "bn" ? "স্টক নেই" : "Out of Stock";

        card.innerHTML = `
          <div class="menu-item-img-container">
            <img src="${item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'}" alt="${displayName}" class="menu-item-img" loading="lazy">
            ${isOutOfStock ? '<div class="oos-badge">Out of Stock</div>' : ''}
          </div>
          <div class="menu-item-title-row">
            <h3 class="menu-item-name">${displayName}</h3>
            <span class="menu-item-price">৳ ${item.price}/-</span>
          </div>
          <div class="menu-item-stars">
            ${starsHtml}
            <span class="rating-val">(${rating.toFixed(1)})</span>
          </div>
          <p class="menu-item-desc">${displayDesc}</p>
          <button class="menu-add-btn" data-id="${item.id}" ${isOutOfStock ? 'disabled' : ''}>
            <i class="fas ${isOutOfStock ? 'fa-ban' : 'fa-cart-plus'}"></i> ${isOutOfStock ? oosText : addBtnText}
          </button>
        `;
        menuGrid.appendChild(card);
      });

      // Add To Cart Event Listeners
      const addButtons = menuGrid.querySelectorAll(".menu-add-btn");
      addButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const itemId = btn.getAttribute("data-id");
          addToCart(itemId);
        });
      });
    }

    // Cart Handlers
    function saveCart() {
      localStorage.setItem("hawa_cart", JSON.stringify(cart));
      updateCartUI();
    }

    function addToCart(id) {
      const item = MENU_DATA.find(i => i.id === id);
      const existing = cart.find(c => c.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ ...item, qty: 1 });
      }
      
      saveCart();
      
      // Auto open cart drawer on first item
      if (cart.length === 1 || !cartDrawer.classList.contains("active")) {
        cartDrawer.classList.add("active");
      }
    }

    function changeQty(id, delta) {
      const existing = cart.find(c => c.id === id);
      if (existing) {
        existing.qty += delta;
        if (existing.qty <= 0) {
          cart = cart.filter(c => c.id !== id);
        }
        saveCart();
      }
    }

    function removeFromCart(id) {
      cart = cart.filter(c => c.id !== id);
      saveCart();
    }

    window.updateCartUI = function() {
      cartItemsContainer.innerHTML = "";
      let totalQty = 0;
      let subtotal = 0;
      const lang = localStorage.getItem("hawa_lang") || "en";

      cart.forEach(item => {
        totalQty += item.qty;
        subtotal += item.price * item.qty;

        const displayName = lang === "bn" ? (item.name_bn || item.name) : item.name;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
          <div class="cart-item-info">
            <h4 class="cart-item-name">${displayName}</h4>
            <div class="cart-item-price">৳ ${item.price}/-</div>
          </div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn qty-minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
            <span class="cart-qty">${item.qty}</span>
            <button class="cart-qty-btn qty-plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
            <button class="cart-item-remove" data-id="${item.id}"><i class="far fa-trash-alt"></i></button>
          </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
      });

      // Bind controls
      cartItemsContainer.querySelectorAll(".qty-minus").forEach(b => {
        b.addEventListener("click", () => changeQty(b.getAttribute("data-id"), -1));
      });
      cartItemsContainer.querySelectorAll(".qty-plus").forEach(b => {
        b.addEventListener("click", () => changeQty(b.getAttribute("data-id"), 1));
      });
      cartItemsContainer.querySelectorAll(".cart-item-remove").forEach(b => {
        b.addEventListener("click", () => removeFromCart(b.getAttribute("data-id")));
      });

      // Update Summary Values
      const vatValue = Math.round(subtotal * 0.15);
      const totalValue = subtotal + vatValue;

      cartCountTitle.textContent = `(${totalQty})`;
      cartSubtotal.textContent = `৳ ${subtotal}/-`;
      cartVat.textContent = `৳ ${vatValue}/-`;
      cartTotal.textContent = `৳ ${totalValue}/-`;

      // Floating badge
      if (totalQty > 0) {
        cartFloatBtn.style.display = "flex";
        cartBadgeCount.textContent = totalQty;
      } else {
        cartFloatBtn.style.display = "none";
        cartDrawer.classList.remove("active");
      }
    }

    // Setup Event Listeners
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderMenu();
      });
    }

    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-cat");
        renderMenu();
        // Clear search input on category change
        if (searchInput) {
          searchInput.value = "";
          searchQuery = "";
        }
      });
    });
    if (cartFloatBtn) {
      cartFloatBtn.addEventListener("click", () => cartDrawer.classList.add("active"));
    }
    if (cartCloseBtn) {
      cartCloseBtn.addEventListener("click", () => cartDrawer.classList.remove("active"));
    }

    if (checkoutBtn) {
      const orderOverlay = document.getElementById("order-overlay");
      const orderModalClose = document.getElementById("order-modal-close");
      const orderForm = document.getElementById("order-form");
      const orderSubmitBtn = document.getElementById("order-submit-btn");

      // Open order modal on checkout click
      checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) return;
        cartDrawer.classList.remove("active");
        // Reset form
        orderForm.innerHTML = orderForm.getAttribute("data-original-html") || orderForm.innerHTML;
        if (!orderForm.getAttribute("data-original-html")) {
          orderForm.setAttribute("data-original-html", orderForm.innerHTML);
        }
        // Re-bind delivery toggle
        bindDeliveryToggle();
        orderOverlay.classList.add("active");
      });

      // Close modal
      orderModalClose.addEventListener("click", () => orderOverlay.classList.remove("active"));
      orderOverlay.addEventListener("click", (e) => {
        if (e.target === orderOverlay) orderOverlay.classList.remove("active");
      });

      // Submit order
      orderForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("order-name").value.trim();
        const phone = document.getElementById("order-phone").value.trim();
        const orderType = document.getElementById("order-type").value;
        const location = document.getElementById("order-location").value.trim();
        const paymentMethod = document.getElementById("order-payment").value;
        const paymentTrxId = document.getElementById("order-trxid").value.trim();
        const notes = document.getElementById("order-notes").value.trim();

        if (!name || !phone || cart.length === 0) return;
        if (orderType === "Delivery" && !location) {
          alert("Please enter your delivery location.");
          return;
        }

        orderSubmitBtn.disabled = true;
        orderSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Placing Order...';

        const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
        const vat = Math.round(subtotal * 0.15);
        const total = subtotal + vat;
        const API_BASE = window.location.origin;

        let orderPlaced = false;
        let orderData = null;

        try {
          const res = await fetch(`${API_BASE}/api/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name, phone,
              orderType, location: orderType === "Delivery" ? location : "",
              payment: { method: paymentMethod, trxId: paymentTrxId },
              items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
              subtotal, vat, total,
              notes: notes || `${orderType} order from website`,
            })
          });
          const data = await res.json();
          if (data.success) { orderPlaced = true; orderData = data.order; }
        } catch (err) {
          console.error('Order failed:', err);
        }

        // Show success with LIVE tracking
        const trackingHTML = `
          <div style="text-align:center;padding:40px 20px;">
            <i class="fas fa-check-circle" style="font-size:64px;color:#4ade80;margin-bottom:20px;"></i>
            <h3 style="color:#fff;margin-bottom:4px;">Order Placed!</h3>
            <p style="color:var(--color-primary-gold);font-size:18px;font-weight:600;margin-bottom:8px;">#${orderData.id}</p>
            <p style="color:var(--color-text-muted);font-size:14px;">${orderType} · ৳ ${total}/-</p>
            <p style="color:var(--color-text-muted);font-size:12px;margin-top:16px;"><i class="fas fa-spinner fa-spin"></i> Redirecting to tracking page...</p>
          </div>`;
        orderForm.innerHTML = trackingHTML;

        // Redirect to tracking page after showing success briefly
        setTimeout(() => {
          window.location.href = `/track#${orderData.id}`;
        }, 2000);

        localStorage.removeItem("hawa_cart");
        updateCartUI();
      });

      // Delivery location toggle
      function bindDeliveryToggle() {
        const orderTypeSelect = document.getElementById("order-type");
        const locationGroup = document.getElementById("order-location-group");
        const locationInput = document.getElementById("order-location");
        const paymentSelect = document.getElementById("order-payment");
        const paymentInfo = document.getElementById("payment-instructions");
        const paymentNumber = document.getElementById("payment-number");

        if (orderTypeSelect && locationGroup) {
          orderTypeSelect.addEventListener("change", () => {
            const isDelivery = orderTypeSelect.value === "Delivery";
            locationGroup.style.display = isDelivery ? "block" : "none";
            if (isDelivery) locationInput.setAttribute("required", "");
            else locationInput.removeAttribute("required");
          });
        }
        if (paymentSelect && paymentInfo) {
          paymentSelect.addEventListener("change", () => {
            const method = paymentSelect.value;
            if (method === "bKash" || method === "Nagad") {
              paymentInfo.style.display = "block";
              paymentNumber.textContent = method === "bKash" ? "01705-036161" : "01705-036161";
            } else {
              paymentInfo.style.display = "none";
            }
          });
        }
      }
      bindDeliveryToggle();
    }

    // Initial render
    renderMenu();
    updateCartUI();
  }

  /* 4. Booking Page Logic */
  const tableForm = document.getElementById("table-booking-form");
  const eventForm = document.getElementById("event-booking-form");
  if (tableForm && eventForm) {
    const tabTableBtn = document.getElementById("tab-table-btn");
    const tabEventBtn = document.getElementById("tab-event-btn");
    const confirmOverlay = document.getElementById("confirm-overlay");
    const confirmDetails = document.getElementById("confirm-details-container");
    const confirmCloseBtn = document.getElementById("confirm-close-btn");
    
    // Switch between forms
    tabTableBtn.addEventListener("click", () => {
      tabTableBtn.classList.add("active");
      tabEventBtn.classList.remove("active");
      tableForm.style.display = "block";
      eventForm.style.display = "none";
    });

    tabEventBtn.addEventListener("click", () => {
      tabEventBtn.classList.add("active");
      tabTableBtn.classList.remove("active");
      eventForm.style.display = "block";
      tableForm.style.display = "none";
    });

    // Check for pre-estimated bill from menu page
    const cart = JSON.parse(localStorage.getItem("hawa_cart")) || [];
    if (cart.length > 0) {
      let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      let total = subtotal + Math.round(subtotal * 0.15);
      const notesField = document.getElementById("table-notes");
      if (notesField) {
        notesField.value = `[Pre-selected Menu Estimated Bill: ৳ ${total}/-] `;
      }
    }

    // Table Reservation Submission
    tableForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("table-name").value;
      const phone = document.getElementById("table-phone").value;
      const date = document.getElementById("table-date").value;
      const time = document.getElementById("table-time").value;
      const guests = document.getElementById("table-guests").value;
      const area = document.getElementById("table-area").value;
      const notes = document.getElementById("table-notes")?.value || '';

      // Submit to API
      const API_BASE = window.location.origin;
      let bookingId = "HW-TAB-" + Math.floor(1000 + Math.random() * 9000);
      
      try {
        const res = await fetch(`${API_BASE}/api/reservations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'table',
            name,
            phone,
            date,
            time,
            guests,
            area,
            notes,
          })
        });
        const data = await res.json();
        if (data.success && data.reservation) {
          bookingId = data.reservation.id;
        }
      } catch (err) {
        console.error('Reservation submission failed:', err);
      }
      const lang = localStorage.getItem("hawa_lang") || "en";
      
      const lblId = lang === "bn" ? "বুকিং আইডি" : "Booking ID";
      const lblName = lang === "bn" ? "নাম" : "Name";
      const lblDate = lang === "bn" ? "তারিখ ও সময়" : "Date & Time";
      const lblGuests = lang === "bn" ? "অতিথি / বসার জায়গা" : "Guests / Area";
      
      confirmDetails.innerHTML = `
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblId}</span>
          <span class="confirm-detail-val" style="color:var(--color-primary-gold);font-weight:bold;">${bookingId}</span>
        </div>
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblName}</span>
          <span class="confirm-detail-val">${name}</span>
        </div>
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblDate}</span>
          <span class="confirm-detail-val">${date} @ ${time}</span>
        </div>
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblGuests}</span>
          <span class="confirm-detail-val">${guests} / ${area}</span>
        </div>
      `;
      
      localStorage.removeItem("hawa_cart"); // Clear cart
      confirmOverlay.classList.add("active");
    });

    // Event Reservation Submission
    eventForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const host = document.getElementById("event-name").value;
      const phone = document.getElementById("event-phone").value;
      const date = document.getElementById("event-date").value;
      const type = document.getElementById("event-type").value;
      const guests = document.getElementById("event-guests").value;
      const packageVal = document.getElementById("event-package").value;
      const eventNotes = document.getElementById("event-notes")?.value || '';

      // Submit to API
      const API_BASE = window.location.origin;
      let bookingId = "HW-EVT-" + Math.floor(1000 + Math.random() * 9000);
      
      try {
        const res = await fetch(`${API_BASE}/api/reservations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'event',
            name: host,
            phone,
            eventDate: date,
            eventType: type,
            eventGuests: guests,
            eventPackage: packageVal,
            eventNotes,
          })
        });
        const data = await res.json();
        if (data.success && data.reservation) {
          bookingId = data.reservation.id;
        }
      } catch (err) {
        console.error('Event reservation submission failed:', err);
      }
      const lang = localStorage.getItem("hawa_lang") || "en";
      
      const lblId = lang === "bn" ? "বুকিং আইডি" : "Booking ID";
      const lblHost = lang === "bn" ? "হোস্ট / প্রতিষ্ঠান" : "Host / Org";
      const lblDtType = lang === "bn" ? "তারিখ / অনুষ্ঠানের ধরন" : "Date / Event Type";
      const lblGuestsPkg = lang === "bn" ? "অতিথি / প্যাকেজ" : "Guests / Package";

      confirmDetails.innerHTML = `
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblId}</span>
          <span class="confirm-detail-val" style="color:var(--color-primary-gold);font-weight:bold;">${bookingId}</span>
        </div>
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblHost}</span>
          <span class="confirm-detail-val">${host}</span>
        </div>
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblDtType}</span>
          <span class="confirm-detail-val">${date} - ${type}</span>
        </div>
        <div class="confirm-detail-row">
          <span class="confirm-detail-label">${lblGuestsPkg}</span>
          <span class="confirm-detail-val">${guests} / ${packageVal}</span>
        </div>
      `;

      localStorage.removeItem("hawa_cart");
      confirmOverlay.classList.add("active");
    });

    confirmCloseBtn.addEventListener("click", () => {
      confirmOverlay.classList.remove("active");
      if (window.location.pathname.includes(".html")) {
        window.location.href = "index.html";
      } else {
        let path = window.location.pathname;
        if (path.endsWith("/")) path = path.slice(0, -1);
        let base = path.substring(0, path.lastIndexOf('/'));
        window.location.href = window.location.origin + base + "/";
      }
    });
  }

  /* 5. Gallery Page Logic */
  const slideContainer = document.querySelector(".menu-slideshow-container");
  if (slideContainer) {
    const slides = document.querySelectorAll(".menu-slide");
    const prevBtn = document.getElementById("slide-prev-btn");
    const nextBtn = document.getElementById("slide-next-btn");
    const counter = document.getElementById("slide-counter");
    const thumbContainer = document.getElementById("thumbnail-container");
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Determine base path for scanned menu sheets
    const menuBase = (typeof hawa_theme !== "undefined" && hawa_theme.template_uri) 
      ? hawa_theme.template_uri + "/Hawa menu/" 
      : "Hawa menu/";

    // Generate Thumbnails
    for (let i = 0; i < totalSlides; i++) {
      const thumb = document.createElement("div");
      thumb.className = `thumb-btn ${i === 0 ? 'active' : ''}`;
      thumb.setAttribute("data-slide", i);
      thumb.innerHTML = `<img src="${menuBase}${i + 1}.jpg" alt="Thumb Page ${i + 1}">`;
      thumbContainer.appendChild(thumb);
      
      thumb.addEventListener("click", () => {
        showSlide(i);
      });
    }

    const thumbnails = document.querySelectorAll(".thumb-btn");

    function showSlide(index) {
      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;

      slides.forEach(s => s.style.display = "none");
      thumbnails.forEach(t => t.classList.remove("active"));

      slides[index].style.display = "block";
      thumbnails[index].classList.add("active");
      thumbnails[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      const lang = localStorage.getItem("hawa_lang") || "en";
      const pageText = lang === "bn" ? `পৃষ্ঠা ${index + 1} / ${totalSlides}` : `Page ${index + 1} of ${totalSlides}`;
      counter.textContent = pageText;
      currentSlide = index;
    }

    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

    // Show first slide
    showSlide(0);

    // Gallery Tabs
    const tabScannedBtn = document.getElementById("tab-scanned-btn");
    const tabPhotoBtn = document.getElementById("tab-photo-btn");
    const scannedSection = document.getElementById("scanned-menu-section");
    const photoSection = document.getElementById("ambience-photo-section");

    tabScannedBtn.addEventListener("click", () => {
      tabScannedBtn.classList.add("active");
      tabPhotoBtn.classList.remove("active");
      scannedSection.style.display = "block";
      photoSection.style.display = "none";
    });

    tabPhotoBtn.addEventListener("click", () => {
      tabPhotoBtn.classList.add("active");
      tabScannedBtn.classList.remove("active");
      photoSection.style.display = "block";
      scannedSection.style.display = "none";
    });

    // Lightbox Modal Logic
    const photoItems = document.querySelectorAll(".photo-item");
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close-btn");

    photoItems.forEach(item => {
      item.addEventListener("click", () => {
        const src = item.getAttribute("data-src");
        lightboxImg.src = src;
        lightboxModal.classList.add("active");
      });
    });

    lightboxClose.addEventListener("click", () => lightboxModal.classList.remove("active"));
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove("active");
      }
    });
  }

  /* 6. Contact Page Logic */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const toast = document.getElementById("toast");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Clear fields
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-msg").value = "";
      
      // Toast notice
      toast.classList.add("active");
      setTimeout(() => {
        toast.classList.remove("active");
      }, 3000);
    });
  }
});
