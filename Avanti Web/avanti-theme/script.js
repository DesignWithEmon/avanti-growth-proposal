document.addEventListener('DOMContentLoaded', () => {

    let currentLang = localStorage.getItem('avanti_selectedLang') || 'en';

    function translateDigits(str) {
        if (!str) return '';
        const digits = {'0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'};
        return str.toString().replace(/[0-9]/g, match => digits[match]);
    }

    function translateTime(timeStr) {
        let result = translateDigits(timeStr);
        result = result.replace('PM', 'পিএম').replace('AM', 'এএম');
        return result;
    }

    function translateDateToBangla(dateVal) {
        if (!dateVal) return '';
        const dateObj = new Date(dateVal);
        const day = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const dayOfWeek = dateObj.getDay();

        const banglaMonths = [
            'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
            'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
        ];
        const banglaDays = [
            'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
        ];

        return `${banglaDays[dayOfWeek]}, ${translateDigits(day.toString())} ${banglaMonths[month]} ${translateDigits(year.toString())}`;
    }

    const uiTranslations = {
        en: {
            home_nav: 'Home',
            about_nav: 'About',
            menu_nav: 'Menu',
            chef_specials_nav: 'Chef Specials',
            gallery_nav: 'Gallery',
            contact_nav: 'Contact',
            book_table: 'Book Table',
            hero_subtitle: 'Classic Italian & Fast Food',
            hero_title: 'A Legacy of Fresh Culinary <span class="text-gradient">Craft</span>',
            hero_desc: 'Established in 2012, Avanti Mymensingh serves authentic Italian pizzas, gourmet platters, and fine fast food, made with fresh local ingredients and timeless passion.',
            explore_menu: 'Explore Menu',
            explore_avanti: 'Explore Avanti',
            about_subtitle: 'Our Journey',
            about_title: 'Moving Forward with Flavor Since 2012',
            about_text1: "Founded in 2012 by partners with a shared vision of culinary excellence, Avanti Restaurant has become a benchmark for high-quality dining in Mymensingh Sadar. The name Avanti, meaning 'let's move forward' in Italian, guides our commitment to fresh ingredients and progressive recipes.",
            about_text2: 'We serve a wide variety of cuisines ranging from artisanal pizzas and creamy pasta to set platters and refreshing custom beverages. Every dish is cooked to order by our dedicated kitchen crew, ensuring a memorable dining experience for you and your family.',
            highlight_1: 'Artisanal Pizza',
            highlight_2: 'Fresh Ingredients',
            highlight_3: '14+ Years Legacy',
            menu_subtitle: 'The Culinary List',
            menu_title: 'Savor Our Authentic Masterpieces',
            menu_desc: "Explore Avanti's extensive menu in Mymensingh, featuring authentic Italian pizza, creamy pasta, gourmet set meals, and fresh custom drinks.",
            load_more: 'Load All Dishes',
            show_less: 'Show Featured Only',
            no_items: 'No items found in this category.',
            add_to_cart: 'Add to Cart',
            call_to_order: 'Call to Order',
            unavailable: 'Unavailable',
            reviews_subtitle: 'Testimonials',
            reviews_title: 'Stories from Our Guests',
            gallery_subtitle: 'Visual Delights',
            gallery_title: 'Moments from Avanti',
            gallery_desc: 'A glimpse into our visual space, dynamic kitchen operations, and gourmet plate presentations.',
            reserve_subtitle: 'Secure Your Experience',
            reserve_title: 'Table Reservation',
            reserve_desc: 'Established on principles of service quality, we welcome table bookings. Reserving in advance secures your table for birthday bashes, family dinners, or corporate meetings.',
            notice_title: 'Notice for Reservations:',
            notice_text: 'Reservations are held for 15 minutes past the booking time. For group bookings larger than 12 guests, please contact us directly at 01755-559933.',
            label_name: 'Full Name',
            label_phone: 'Phone Number',
            label_email: 'Email Address',
            label_guests: 'Number of Guests',
            label_date: 'Date',
            label_time: 'Preferred Time',
            label_requests: 'Special Requests (Optional)',
            name_required: 'Name is required',
            phone_invalid: 'Please enter a valid phone number',
            email_invalid: 'Please enter a valid email',
            guests_required: 'Please select number of guests',
            date_invalid: 'Please select a future date',
            time_invalid: 'Please select a time slot',
            confirm_reservation: 'Confirm Reservation',
            contact_subtitle: 'Locate Avanti',
            contact_title: 'Where to Find Us',
            address_lbl: 'Address',
            phone_lbl_contact: 'Reservation Line',
            email_lbl_contact: 'Email Enquiries',
            hours_lbl: 'Opening Hours',
            connect_online: 'Connect Online',
            map_popup_title: 'Avanti Restaurant',
            map_popup_desc: 'Amlapara, Mymensingh',
            open_maps: 'Open in Google Maps',
            cart_header: '<i class="fa-solid fa-cart-shopping"></i> Your Cart',
            empty_cart: 'Your cart is empty.',
            explore_menu_btn: 'Explore Menu',
            subtotal: 'Subtotal:',
            delivery_fee_label: 'Delivery Fee:',
            grand_total_label: 'Grand Total:',
            proceed_to_checkout: 'Proceed to Checkout',
            name_required_checkout: 'Name is required (min 2 chars)',
            phone_invalid_checkout: 'Please enter a valid BD phone number',
            label_address: 'Delivery Address',
            address_required: 'Delivery address is required',
            label_notes: 'Special Instructions (Optional)',
            btn_place_order: 'Place Order via WhatsApp',
            order_type_lbl: 'Order Type',
            processing: 'Processing...',
            order_placed_success: 'Order Placed Successfully!',
            order_success_desc: 'Your order has been recorded in our system. You are being redirected to WhatsApp to send the order details to the kitchen.',
            send_manually: 'Send message manually',
            return_to_store: 'Return to Store',
            order_id_lbl: 'Order ID:',
            order_method_lbl: 'Method:',
            order_delivery_fee_lbl: 'Delivery Fee:',
            order_total_lbl: 'Total Amount:',
            footer_tagline: 'Serving authentic Italian pizzas, gourmet set meals, and fresh fast food with progressive culinary craft since 2012.',
            footer_sitemap_lbl: 'Sitemap',
            about_philosophy_nav: 'About Philosophy',
            chefs_menu_nav: "Chef's Menu",
            guest_reviews_nav: 'Guest Reviews',
            visual_gallery_nav: 'Visual Gallery',
            join_our_club: 'Join Our Club',
            newsletter_desc: 'Subscribe to receive updates on chef tastings, pizza discounts, and seasonal menus.',
            designer_credit: 'Developed with Passion. Redesigned with Minimal Excellence.',
            reservation_requested: 'Reservation Requested',
            done_btn: 'Done',
            guest_name_lbl: 'Guest Name:',
            phone_lbl: 'Phone Number:',
            table_size_lbl: 'Table Size:',
            reserved_date_lbl: 'Reserved Date:',
            reserved_time_lbl: 'Reserved Time:',
            special_requests_lbl: 'Special Requests:',
            confirm_sent_lbl: 'A confirmation email has been sent to the restaurant.'
        },
        bn: {
            home_nav: 'হোম',
            about_nav: 'আমাদের সম্পর্কে',
            menu_nav: 'মেনু',
            chef_specials_nav: 'শেফ স্পেশাল',
            gallery_nav: 'গ্যালারি',
            contact_nav: 'যোগাযোগ',
            book_table: 'টেবিল বুক করুন',
            hero_subtitle: 'ক্লাসিক ইতালিয়ান ও ফাস্ট ফুড',
            hero_title: 'তাজা রন্ধনশিল্পের একটি চমৎকার <span class="text-gradient">ঐতিহ্য</span>',
            hero_desc: '২০১২ সালে প্রতিষ্ঠিত, অবন্তি ময়মনসিংহ পরিবেশন করে আসল ইতালীয় পিৎজা, সুস্বাদু প্ল্যাটার এবং চমৎকার ফাস্ট ফুড, যা স্থানীয় তাজা উপাদান এবং রন্ধনপ্রেম দিয়ে তৈরি।',
            explore_menu: 'মেনু অন্বেষণ করুন',
            explore_avanti: 'অবন্তি অন্বেষণ করুন',
            about_subtitle: 'আমাদের যাত্রা',
            about_title: '২০১২ থেকে স্বাদের সাথে এগিয়ে যাওয়া',
            about_text1: "রন্ধনসম্পর্কীয় শ্রেষ্ঠত্বের একটি অংশীদারিত্বের দৃষ্টিভঙ্গি নিয়ে ২০১২ সালে অংশীদারদের দ্বারা প্রতিষ্ঠিত, অবন্তি রেস্টুরেন্ট ময়মনসিংহ সদরে একটি মানসম্মত খাবারের মাইলফলক হয়ে উঠেছে। ইতালীয় শব্দ 'অবন্তি' যার অর্থ 'চলুন এগিয়ে যাই', আমাদের তাজা উপাদান এবং প্রগতিশীল রেসিপির প্রতি অঙ্গীকারকে নির্দেশ করে।",
            about_text2: 'আমরা শৈল্পিক পিৎজা এবং ক্রিমি পাস্তা থেকে শুরু করে সেট প্ল্যাটার এবং সতেজ কাস্টম পানীয় পর্যন্ত বিস্তৃত খাবার পরিবেশন করি। প্রতিটি খাবার আমাদের ডেডিকেটেড কিচেন ক্রু দ্বারা সদ্য তৈরি করা হয়, যা আপনার এবং আপনার পরিবারের জন্য একটি অবিস্মরণীয় ডাইনিং অভিজ্ঞতা নিশ্চিত করে।',
            highlight_1: 'শৈল্পিক পিৎজা',
            highlight_2: 'তাজা উপাদান',
            highlight_3: '১৪+ বছরের ঐতিহ্য',
            menu_subtitle: 'রন্ধন তালিকা',
            menu_title: 'আমাদের খাঁটি মাস্টারপিসগুলো উপভোগ করুন',
            menu_desc: 'ময়মনসিংহে অবন্তির চমৎকার মেনু অন্বেষণ করুন, যার মধ্যে রয়েছে আসল ইতালীয় পিৎজা, ক্রিমি পাস্তা, সুস্বাদু সেট মিল এবং চমৎকার পানীয়।',
            load_more: 'সব ডিশ দেখুন',
            show_less: 'শুধু ফিচারড ডিশ',
            no_items: 'এই ক্যাটাগরিতে কোনো খাবার পাওয়া যায়নি।',
            add_to_cart: 'কার্টে যোগ করুন',
            call_to_order: 'অর্ডার করতে কল করুন',
            unavailable: 'অপ্রাপ্য',
            reviews_subtitle: 'অতিথিদের মূল্যায়ন',
            reviews_title: 'আমাদের অতিথিদের গল্প',
            gallery_subtitle: 'দৃশ্যমান আনন্দ',
            gallery_title: 'অবন্তির কিছু মুহূর্ত',
            gallery_desc: 'আমাদের সুন্দর ডাইনিং স্পেস, রান্নাঘরের চমৎকার কর্মযজ্ঞ এবং চমৎকার খাবারের প্লেটিংয়ের এক ঝলক।',
            reserve_subtitle: 'আপনার অভিজ্ঞতা নিশ্চিত করুন',
            reserve_title: 'টেবিল বুকিং',
            reserve_desc: 'সেবার মানের ভিত্তিতে প্রতিষ্ঠিত, আমরা টেবিল বুকিংকে স্বাগত জানাই। আগে থেকে বুকিং করা হলে জন্মদিন, পারিবারিক ডিনার বা কর্পোরেট মিটিংয়ের জন্য আপনার টেবিলটি সুরক্ষিত থাকবে।',
            notice_title: 'বুকিংয়ের নোটিশ:',
            notice_text: 'বুকিং সময়ের পরবর্তী ১৫ মিনিট পর্যন্ত টেবিলটি রাখা হবে। ১২ জনের বেশি বুকিংয়ের জন্য অনুগ্রহ করে সরাসরি ০১৭৫৫-৫৫৯৯৩৩ নম্বরে যোগাযোগ করুন।',
            label_name: 'পূর্ণ নাম',
            label_phone: 'ফোন নম্বর',
            label_email: 'ইমেল ঠিকানা',
            label_guests: 'অতিথির সংখ্যা',
            label_date: 'তারিখ',
            label_time: 'পছন্দসই সময়',
            label_requests: 'বিশেষ অনুরোধ (ঐচ্ছিক)',
            name_required: 'নাম আবশ্যক',
            phone_invalid: 'একটি সঠিক ফোন নম্বর দিন',
            email_invalid: 'একটি সঠিক ইমেল ঠিকানা দিন',
            guests_required: 'অতিথির সংখ্যা নির্বাচন করুন',
            date_invalid: 'ভবিষ্যতের একটি তারিখ নির্বাচন করুন',
            time_invalid: 'সময় নির্বাচন করুন',
            confirm_reservation: 'বুকিং নিশ্চিত করুন',
            contact_subtitle: 'অবন্তি খুঁজুন',
            contact_title: 'কোথায় পাবেন আমাদের',
            address_lbl: 'ঠিকানা',
            phone_lbl_contact: 'বুকিং লাইন',
            email_lbl_contact: 'ইমেল যোগাযোগ',
            hours_lbl: 'খোলা থাকার সময়',
            connect_online: 'অনলাইনে যুক্ত হন',
            map_popup_title: 'অবন্তি রেস্টুরেন্ট',
            map_popup_desc: 'আমলাপাড়া, ময়মনসিংহ',
            open_maps: 'গুগল ম্যাপসে দেখুন',
            cart_header: '<i class="fa-solid fa-cart-shopping"></i> আপনার কার্ট',
            empty_cart: 'আপনার কার্ট খালি আছে।',
            explore_menu_btn: 'মেনু অন্বেষণ করুন',
            subtotal: 'উপ-মোট:',
            delivery_fee_label: 'ডেলিভারি চার্জ:',
            grand_total_label: 'সর্বমোট:',
            proceed_to_checkout: 'চেকআউটে যান',
            name_required_checkout: 'নাম আবশ্যক (ন্যূনতম ২ অক্ষর)',
            phone_invalid_checkout: 'একটি সঠিক বাংলাদেশী ফোন নম্বর দিন',
            label_address: 'ডেলিভারি ঠিকানা',
            address_required: 'ডেলিভারি ঠিকানা আবশ্যক',
            label_notes: 'বিশেষ নির্দেশনা (ঐচ্ছিক)',
            btn_place_order: 'হোয়াটসঅ্যাপের মাধ্যমে অর্ডার করুন',
            order_type_lbl: 'অর্ডারের ধরন',
            processing: 'প্রক্রিয়াকরণ হচ্ছে...',
            order_placed_success: 'অর্ডার সফলভাবে সম্পন্ন হয়েছে!',
            order_success_desc: 'আপনার অর্ডারটি আমাদের সিস্টেমে রেকর্ড করা হয়েছে। রান্নাঘরে অর্ডারের বিবরণ পাঠাতে আপনাকে হোয়াটসঅ্যাপে রিডাইরেক্ট করা হচ্ছে।',
            send_manually: 'ম্যানুয়ালি মেসেজ পাঠান',
            return_to_store: 'দোকানে ফিরে যান',
            order_id_lbl: 'অর্ডার আইডি:',
            order_method_lbl: 'পদ্ধতি:',
            order_delivery_fee_lbl: 'ডেলিভারি চার্জ:',
            order_total_lbl: 'মোট পরিমাণ:',
            footer_tagline: '২০১২ সাল থেকে আসল ইতালীয় পিৎজা, চমৎকার সেট মিল এবং ফাস্ট ফুড পরিবেশন করে আসছি।',
            footer_sitemap_lbl: 'সাইটম্যাপ',
            about_philosophy_nav: 'আমাদের দর্শন',
            chefs_menu_nav: 'শেফের মেনু',
            guest_reviews_nav: 'অতিথি রিভিউ',
            visual_gallery_nav: 'ভিজ্যুয়াল গ্যালারি',
            join_our_club: 'আমাদের ক্লাবে যোগ দিন',
            newsletter_desc: 'শেফ টেস্টিং, পিৎজা ডিসকাউন্ট এবং মৌসুমী মেনুর আপডেট পেতে সাবস্ক্রাইব করুন।',
            designer_credit: 'ভালবাসা দিয়ে তৈরি। চমৎকার মিনিমাল ডিজাইনে রিডিজাইন করা।',
            reservation_requested: 'বুকিংয়ের অনুরোধ সম্পন্ন হয়েছে',
            done_btn: 'সম্পন্ন',
            guest_name_lbl: 'অতিথির নাম:',
            phone_lbl: 'ফোন নম্বর:',
            table_size_lbl: 'টেবিল সাইজ:',
            reserved_date_lbl: 'বুকিংয়ের তারিখ:',
            reserved_time_lbl: 'বুকিংয়ের সময়:',
            special_requests_lbl: 'বিশেষ অনুরোধ:',
            confirm_sent_lbl: 'রেস্টুরেন্টে একটি নিশ্চিতকরণ ইমেল পাঠানো হয়েছে।'
        }
    };

    const categoryTranslations = {
        en: {
            'Starter': 'Starter',
            'Fast Food & Sandwith': 'Fast Food & Sandwich',
            'Keto Meal': 'Keto Meal',
            'Salad': 'Salad',
            'Soup': 'Soup',
            'Noodles & Chow Mein': 'Noodles & Chow Mein',
            'Rice': 'Rice Dishes',
            'Chicken': 'Chicken Dishes',
            'Beef & Mutton': 'Beef & Mutton',
            'Sea Food': 'Sea Food',
            'Vegetable': 'Vegetable',
            'Pasta': 'Pasta',
            'Premium Burger': 'Premium Burger',
            'Pizza': 'Wood-Fired Pizza',
            'Kids & Snacks': 'Kids & Snacks',
            'Platters': 'Gourmet Platters',
            'Hot Coffee': 'Hot Coffee',
            'Over Iced Latte': 'Over Iced Latte',
            'Smoothies': 'Smoothies',
            'Lemonade': 'Lemonade',
            'Cold Coffee Freppe': 'Cold Coffee Frappe',
            'Moctail': 'Mocktail',
            'Juice': 'Fresh Juice',
            'Lassi': 'Lassi',
            'Milk Shake': 'Milk Shake',
            'Ice-Cream': 'Ice Cream',
            'Dessert': 'Dessert'
        },
        bn: {
            'Starter': 'স্টার্টার',
            'Fast Food & Sandwith': 'ফাস্ট ফুড ও স্যান্ডউইচ',
            'Keto Meal': 'কিটো মিল',
            'Salad': 'সালাদ',
            'Soup': 'সুপ',
            'Noodles & Chow Mein': 'নুডলস ও চাওমিন',
            'Rice': 'ভাত ও রাইস',
            'Chicken': 'চিকেন আইটেম',
            'Beef & Mutton': 'গরু ও খাসির মাংস',
            'Sea Food': 'সী ফুড',
            'Vegetable': 'সবজি',
            'Pasta': 'পাস্তা',
            'Premium Burger': 'প্রিমিয়াম বার্গার',
            'Pizza': 'পিজ্জা',
            'Kids & Snacks': 'কিডস ও স্ন্যাক্স',
            'Platters': 'প্ল্যাটার্স',
            'Hot Coffee': 'গরম কফি',
            'Over Iced Latte': 'আইসড ল্যাটে',
            'Smoothies': 'স্মুদি',
            'Lemonade': 'লেমনেড',
            'Cold Coffee Freppe': 'কোল্ড কফি ফ্র্যাপে',
            'Moctail': 'মকটেল',
            'Juice': 'তাজা জুস',
            'Lassi': 'লাচ্ছি',
            'Milk Shake': 'মিল্কশেক',
            'Ice-Cream': 'আইসক্রিম',
            'Dessert': 'ডেজার্ট'
        }
    };

    const termTranslations = {
        en: {},
        bn: {
            'Chicken': 'চিকেন',
            'Mutton': 'খাসি',
            'Rice': 'রাইস',
            'Prawn': 'চিংড়ি',
            'Fish': 'মাছ',
            'Vegetable': 'সবজি',
            'Chowmein': 'চাওমিন',
            'Pasta': 'পাস্তা',
            'Pizza': 'পিজ্জা',
            'Quater': 'কোয়ার্টার',
            'Half': 'হাফ',
            'Full': 'ফুল',
            '1:1': '১:১',
            '1:2': '১:২',
            '1:3': '১:৩',
            '1:4': '১:৪',
            '1:5': '১:৫',
            '1:6': '১:৬',
            '4 pcs': '৪ পিস',
            '4 Pcs': '৪ পিস',
            '6 Pcs': '৬ পিস',
            '8 Pcs': '৮ পিস',
            '2 Pcs': '২ পিস',
            '8 Pic': '৮ পিস',
            'Medium': 'মিডিয়াম',
            'Large': 'লার্জ'
        }
    };

    const tabTranslations = {
        en: {
            'all': 'Featured',
            'starter': 'Starters & Salads',
            'soup': 'Soup & Noodles',
            'main': 'Main Courses',
            'pizza': 'Burgers & Pizzas',
            'platters': 'Platters',
            'drinks': 'Drinks & Desserts'
        },
        bn: {
            'all': 'ফিচারড',
            'starter': 'স্টার্টার ও সালাদ',
            'soup': 'সুপ ও নুডলস',
            'main': 'মেইন কোর্স',
            'pizza': 'পিজ্জা ও বার্গার',
            'platters': 'প্ল্যাটার্স',
            'drinks': 'পানীয় ও ডেজার্ট'
        }
    };

    const placeholderTranslations = {
        en: {
            'name': 'John Doe',
            'phone': '01755-559933',
            'email': 'john@example.com',
            'requests': 'Birthday celebration, dietary restrictions, window seat...',
            'checkout-name': 'John Doe',
            'checkout-phone': '01755-559933',
            'checkout-address': '25, TN Roy Road, Amlapara, Mymensingh',
            'checkout-notes': 'e.g. Make it extra cheesy, call before delivery...',
            'subscribe-email': 'Your Email Address'
        },
        bn: {
            'name': 'জন ডো',
            'phone': '০১৭৫৫-৫৫৯৯৩৩',
            'email': 'john@example.com',
            'requests': 'জন্মদিন উদযাপন, বিশেষ খাদ্য তালিকা, জানালার পাশের সিট...',
            'checkout-name': 'জন ডো',
            'checkout-phone': '০১৭৫৫-৫৫৯৯৩৩',
            'checkout-address': '২৫, টিএন রায় রোড, আমলাপাড়া, ময়মনসিংহ',
            'checkout-notes': 'যেমন: পিজ্জা অতিরিক্ত চিজি করুন, ডেলিভারির আগে কল দিন...',
            'subscribe-email': 'আপনার ইমেল ঠিকানা'
        }
    };

    const selectorTranslationMap = {
        'header #navbar a[href*="#home"]': 'home_nav',
        'header #navbar a[href*="#about"]': 'about_nav',
        'header #navbar a[href*="menu"]': 'menu_nav',
        'header #navbar a[href*="chef-specials"]': 'chef_specials_nav',
        'header #navbar a[href*="#gallery"]': 'gallery_nav',
        'header #navbar a[href*="contact"]': 'contact_nav',
        'header #navbar a[href*="#reserve"]': 'contact_nav',
        'header .nav-cta': 'book_table',
        '.hero-section .hero-subtitle': 'hero_subtitle',
        '.hero-section .hero-title': 'hero_title',
        '.hero-section .hero-desc': 'hero_desc',
        '.hero-section .hero-actions a[href*="#reserve"]': 'book_table',
        '.hero-section .hero-actions a[href*="menu"]': 'explore_menu',
        '.scroll-down-indicator span': 'explore_avanti',
        '.about-section .section-subtitle': 'about_subtitle',
        '.about-section .section-title': 'about_title',
        '.about-section .about-text:nth-of-type(1)': 'about_text1',
        '.about-section .about-text:nth-of-type(2)': 'about_text2',
        '.about-section .highlight-item:nth-child(1) span': 'highlight_1',
        '.about-section .highlight-item:nth-child(2) span': 'highlight_2',
        '.about-section .highlight-item:nth-child(3) span': 'highlight_3',
        '.menu-section .section-subtitle': 'menu_subtitle',
        '.menu-section .section-title': 'menu_title',
        '.menu-section .section-desc': 'menu_desc',
        '#load-more-btn': 'load_more',
        '.reviews-section .section-subtitle': 'reviews_subtitle',
        '.reviews-section .section-title': 'reviews_title',
        '.gallery-section .section-subtitle': 'gallery_subtitle',
        '.gallery-section .section-title': 'gallery_title',
        '.gallery-section .section-desc': 'gallery_desc',
        '.reserve-section .section-subtitle': 'reserve_subtitle',
        '.reserve-section .section-title': 'reserve_title',
        '.reserve-section .reserve-desc': 'reserve_desc',
        '.reserve-section .notice-title': 'notice_title',
        '.reserve-section .notice-text': 'notice_text',
        '.reserve-section label[for="name"]': 'label_name',
        '.reserve-section label[for="phone"]': 'label_phone',
        '.reserve-section label[for="email"]': 'label_email',
        '.reserve-section label[for="guests"]': 'label_guests',
        '.reserve-section label[for="date"]': 'label_date',
        '.reserve-section label[for="time"]': 'label_time',
        '.reserve-section label[for="requests"]': 'label_requests',
        '.reserve-section #name-error': 'name_required',
        '.reserve-section #phone-error': 'phone_invalid',
        '.reserve-section #email-error': 'email_invalid',
        '.reserve-section #guests-error': 'guests_required',
        '.reserve-section #date-error': 'date_invalid',
        '.reserve-section #time-error': 'time_invalid',
        '.reserve-section button[type="submit"]': 'confirm_reservation',
        '.contact-section .section-subtitle': 'contact_subtitle',
        '.contact-section .section-title': 'contact_title',
        '.contact-section .info-item:nth-child(1) h4': 'address_lbl',
        '.contact-section .info-item:nth-child(2) h4': 'phone_lbl_contact',
        '.contact-section .info-item:nth-child(3) h4': 'email_lbl_contact',
        '.contact-section .info-item:nth-child(4) h4': 'hours_lbl',
        '.contact-section .social-links-container h4': 'connect_online',
        '.contact-section .map-info-popup h3': 'map_popup_title',
        '.contact-section .map-info-popup p': 'map_popup_desc',
        '.contact-section .map-btn': 'open_maps',
        '.cart-drawer-header h3': 'cart_header',
        '.empty-cart-message p': 'empty_cart',
        '.empty-cart-message .close-cart-on-click': 'explore_menu_btn',
        '#go-to-checkout-btn': 'proceed_to_checkout',
        '#checkout-form label[for="checkout-name"]': 'label_name',
        '#checkout-name + .error-msg': 'name_required_checkout',
        '#checkout-form label[for="checkout-phone"]': 'label_phone',
        '#checkout-phone + .error-msg': 'phone_invalid_checkout',
        '#address-group label[for="checkout-address"]': 'label_address',
        '#checkout-address + .error-msg': 'address_required',
        '#checkout-form label[for="checkout-notes"]': 'label_notes',
        '#place-order-btn': 'btn_place_order',
        '#order-success-modal h2': 'order_placed_success',
        '#order-success-modal p': 'order_success_desc',
        '#whatsapp-manual-btn': 'send_manually',
        '#close-success-modal': 'return_to_store',
        'footer .brand-tagline': 'footer_tagline',
        'footer .footer-links-col h4': 'footer_sitemap_lbl',
        'footer .footer-links-col a[href*="about"]': 'about_philosophy_nav',
        'footer .footer-links-col a[href*="menu"]': 'chefs_menu_nav',
        'footer .footer-links-col a[href*="chef-specials"]': 'chef_specials_nav',
        'footer .footer-links-col a[href*="gallery"]': 'visual_gallery_nav',
        'footer .footer-newsletter-col h4': 'join_our_club',
        'footer .footer-newsletter-col p': 'newsletter_desc',
        'footer .designer': 'designer_credit',
        '#booking-modal h2': 'reservation_requested',
        '#close-booking-modal': 'done_btn'
    };

    function updateToggleBtnUI(lang) {
        const enText = document.querySelector('.lang-text-en');
        const bnText = document.querySelector('.lang-text-bn');
        if (enText && bnText) {
            if (lang === 'bn') {
                enText.classList.remove('active');
                bnText.classList.add('active');
            } else {
                enText.classList.add('active');
                bnText.classList.remove('active');
            }
        }
    }

    function translatePage(lang) {
        currentLang = lang;
        localStorage.setItem('avanti_selectedLang', lang);
        
        updateToggleBtnUI(lang);
        
        // 1. Selector Translations
        Object.keys(selectorTranslationMap).forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (lang === 'bn') {
                    const key = selectorTranslationMap[selector];
                    const translation = uiTranslations['bn'][key];
                    if (translation) {
                        if (!el.hasAttribute('data-orig-html')) {
                            el.setAttribute('data-orig-html', el.innerHTML);
                        }
                        el.innerHTML = translation;
                    }
                } else {
                    if (el.hasAttribute('data-orig-html')) {
                        el.innerHTML = el.getAttribute('data-orig-html');
                    }
                }
            });
        });

        // 2. Placeholder Translations
        const placeholderMap = placeholderTranslations[lang];
        if (placeholderMap) {
            Object.keys(placeholderTranslations['en']).forEach(id => {
                let el = null;
                if (id === 'subscribe-email') {
                    el = document.querySelector('#subscribe-form input[type="email"]');
                } else {
                    el = document.getElementById(id);
                }
                if (el) {
                    if (lang === 'bn') {
                        if (!el.hasAttribute('data-orig-placeholder')) {
                            el.setAttribute('data-orig-placeholder', el.placeholder || '');
                        }
                        el.placeholder = placeholderMap[id] || '';
                    } else {
                        if (el.hasAttribute('data-orig-placeholder')) {
                            el.placeholder = el.getAttribute('data-orig-placeholder');
                        }
                    }
                }
            });
        }

        // 3. Translate Tab buttons
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            const cat = btn.getAttribute('data-category');
            if (cat) {
                if (lang === 'bn') {
                    if (!btn.hasAttribute('data-orig-text')) {
                        btn.setAttribute('data-orig-text', btn.textContent);
                    }
                    if (tabTranslations['bn'][cat]) {
                        btn.textContent = tabTranslations['bn'][cat];
                    }
                } else {
                    if (btn.hasAttribute('data-orig-text')) {
                        btn.textContent = btn.getAttribute('data-orig-text');
                    }
                }
            }
        });

        // 4. Translate Dropdown selects (guests, time)
        const guestsSelect = document.getElementById('guests');
        if (guestsSelect) {
            Array.from(guestsSelect.options).forEach((opt, idx) => {
                if (idx === 0) {
                    opt.textContent = lang === 'bn' ? 'অতিথি সংখ্যা' : 'Select Guests';
                } else {
                    const val = opt.value;
                    if (lang === 'bn') {
                        if (!opt.hasAttribute('data-orig-text')) {
                            opt.setAttribute('data-orig-text', opt.textContent);
                        }
                        opt.textContent = translateDigits(val) + ' জন অতিথি';
                    } else {
                        if (opt.hasAttribute('data-orig-text')) {
                            opt.textContent = opt.getAttribute('data-orig-text');
                        }
                    }
                }
            });
        }

        const timeSelect = document.getElementById('time');
        if (timeSelect) {
            Array.from(timeSelect.options).forEach((opt, idx) => {
                if (idx === 0) {
                    opt.textContent = lang === 'bn' ? 'পছন্দের সময়' : 'Select Time';
                } else {
                    const val = opt.value;
                    if (lang === 'bn') {
                        if (!opt.hasAttribute('data-orig-text')) {
                            opt.setAttribute('data-orig-text', opt.textContent);
                        }
                        opt.textContent = translateTime(val);
                    } else {
                        if (opt.hasAttribute('data-orig-text')) {
                            opt.textContent = opt.getAttribute('data-orig-text');
                        }
                    }
                }
            });
        }

        // 5. Re-render Menu and Cart
        if (typeof renderMenu === 'function') {
            renderMenu();
        }
        if (typeof loadCart === 'function') {
            loadCart();
        }
    }

    /* ==========================================================================
       1. Dynamic Header Scroll & Active Link Tracking
       ========================================================================== */
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Shrink header on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        trackActiveLink();
    };

    // Track active page links
    const trackActiveLink = () => {
        // Only run scroll active tracking if we have hash links in the menu (i.e. we are on the homepage)
        const hasHashLinks = Array.from(navLinks).some(link => {
            const href = link.getAttribute('href');
            return href && href.includes('#');
        });

        if (!hasHashLinks) {
            return;
        }

        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120; // offset for sticky header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const hashIndex = href.indexOf('#');
            if (hashIndex !== -1) {
                const hash = href.substring(hashIndex);
                link.classList.remove('active');
                if (hash === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init on load

    /* ==========================================================================
       2. Mobile Navigation Toggle
       ========================================================================== */
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-links');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on clicking any navigation anchor
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                mobileNavToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    /* ==========================================================================
       3. Intersection Observer for Scroll Reveal Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    /* ==========================================================================
       4. Dynamic Menu Rendering & Filtering
       ========================================================================== */
    const menuGrid = document.getElementById('menu-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadMoreContainer = document.querySelector('.load-more-container');
    const menuSearchInput = document.getElementById('menu-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    // Category mapping matching database imports
    const CATEGORY_MAP = {
        'starter': ['Starter', 'Salad', 'Kids & Snacks'],
        'soup': ['Soup', 'Noodles & Chow Mein', 'Pasta'],
        'main': ['Rice', 'Chicken', 'Beef & Mutton', 'Sea Food', 'Vegetable', 'Keto Meal'],
        'pizza': ['Pizza', 'Premium Burger', 'Fast Food & Sandwith'],
        'platters': ['Platters'],
        'drinks': ['Hot Coffee', 'Over Iced Latte', 'Smoothies', 'Lemonade', 'Cold Coffee Freppe', 'Moctail', 'Juice', 'Lassi', 'Milk Shake', 'Ice-Cream', 'Dessert']
    };

    let currentCategory = 'all';
    let isShowingAll = false;
    let searchQuery = '';

    // Helper to format price in BDT (৳) or show MRP
    function formatPrice(priceStr) {
        if (!priceStr) return '';
        priceStr = priceStr.trim();
        if (priceStr.toUpperCase() === 'MRP') {
            return 'MRP';
        }
        if (priceStr.includes('-')) {
            return priceStr.split('-').map(p => `৳${p.trim()}`).join(' - ');
        }
        return `৳${priceStr}`;
    }

    // Associate custom high-res assets to the 4 signature items
    function getItemImage(id) {
        const numericId = parseInt(id);
        const baseUri = AVANTI_APP.theme_uri;
        
        if (numericId === 99 || numericId === 100) {
            return baseUri + '/assets/special_pizza.png';
        }
        if (numericId === 110) {
            return baseUri + '/assets/special_meal.png';
        }
        if (numericId === 106) {
            return baseUri + '/assets/bbq_meal.png';
        }
        if (numericId === 108) {
            return baseUri + '/assets/chicken_boustead.png';
        }
        return null;
    }

    // Helper to get fallback category icon for visual elegance
    function getFallbackIcon(category, name) {
        const catLower = (category || '').toLowerCase();
        const nameLower = (name || '').toLowerCase();
        
        if (catLower.includes('breakfast')) return 'fa-egg';
        if (nameLower.includes('rice') || nameLower.includes('biryani') || nameLower.includes('platter')) return 'fa-bowl-rice';
        if (catLower.includes('kabab') || catLower.includes('grill') || catLower.includes('barbecue') || nameLower.includes('bbq') || nameLower.includes('chap')) return 'fa-fire-burner';
        if (nameLower.includes('fish') || nameLower.includes('prawn') || nameLower.includes('sea food')) return 'fa-fish';
        if (catLower.includes('soup') || nameLower.includes('soup')) return 'fa-bowl-food';
        if (catLower.includes('salad') || nameLower.includes('salad')) return 'fa-leaf';
        if (nameLower.includes('burger') || nameLower.includes('sandwich')) return 'fa-burger';
        if (nameLower.includes('pizza') || nameLower.includes('pasta') || nameLower.includes('italian')) return 'fa-pizza-slice';
        if (catLower.includes('coffee') || nameLower.includes('tea') || nameLower.includes('latte')) return 'fa-mug-hot';
        if (catLower.includes('drink') || catLower.includes('juice') || catLower.includes('lassi') || catLower.includes('chiller') || catLower.includes('shake')) return 'fa-glass-water';
        if (catLower.includes('dessert') || nameLower.includes('ice cream') || nameLower.includes('sweet')) return 'fa-ice-cream';
        
        return 'fa-utensils';
    }

    // Main render function
    function renderMenu() {
        if (!menuGrid) return;
        
        const baseUri = AVANTI_APP.theme_uri;
        const t = uiTranslations[currentLang] || uiTranslations['en'];

        // 1. Filter items by search query
        let filteredItems = MENU_DATA;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredItems = MENU_DATA.filter(item => 
                item.name.toLowerCase().includes(query) || 
                (item.description && item.description.toLowerCase().includes(query)) ||
                item.category.toLowerCase().includes(query)
            );
        }

        // 2. Filter items by Category Tab
        if (currentCategory !== 'all') {
            const allowedCategories = CATEGORY_MAP[currentCategory] || [];
            filteredItems = filteredItems.filter(item => allowedCategories.includes(item.category));
        }

        // 3. Paginate / Slice
        let itemsToRender = filteredItems;
        
        if (searchQuery) {
            if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        } else {
            if (currentCategory === 'all' && !isShowingAll) {
                // On featured tab, show only the 4 Chef Specials + first 8 items
                itemsToRender = filteredItems.filter(item => item.featured).concat(
                    filteredItems.filter(item => !item.featured).slice(0, 8)
                );
                
                if (loadMoreContainer) loadMoreContainer.style.display = 'block';
                if (loadMoreBtn) loadMoreBtn.textContent = t['load_more'] || 'Load All Dishes';
            } else {
                if (currentCategory === 'all') {
                    if (loadMoreContainer) loadMoreContainer.style.display = 'block';
                    if (loadMoreBtn) loadMoreBtn.textContent = t['show_less'] || 'Show Featured Only';
                } else {
                    if (loadMoreContainer) loadMoreContainer.style.display = 'none';
                }
            }
        }

        // Clear grid
        menuGrid.innerHTML = '';

        if (itemsToRender.length === 0) {
            menuGrid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; color: var(--color-text-muted); padding: 4rem 0;">${t['no_items'] || 'No items found.'}</p>`;
            return;
        }

        // Create cards HTML
        itemsToRender.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item-card'; 
            card.setAttribute('data-category', item.category);

            // Construct link to individual description details page
            const dishDetailUrl = AVANTI_APP.theme_uri.replace('/wp-content/themes/avanti-theme', '/dish/') + item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            const imgPath = item.image ? item.image : getItemImage(item.id);
            let imgHtml = '';
            
            if (imgPath) {
                imgHtml = `
                    <div class="menu-item-img-container" onclick="location.href='${dishDetailUrl}'">
                        <img src="${imgPath}" alt="${item.name}" class="menu-item-img" loading="lazy">
                        <div class="img-overlay">
                            <span class="overlay-text"><i class="fa-solid fa-eye"></i> View Details</span>
                        </div>
                    </div>
                `;
            } else {
                const iconClass = getFallbackIcon(item.category, item.name);
                imgHtml = `
                    <div class="menu-item-img-container placeholder-img" onclick="location.href='${dishDetailUrl}'">
                        <i class="fa-solid ${iconClass} custom-card-bg-icon"></i>
                        <div class="img-overlay">
                            <span class="overlay-text"><i class="fa-solid fa-eye"></i> View Details</span>
                        </div>
                    </div>
                `;
            }

            const transTerm = (term) => {
                if (currentLang === 'en') return term;
                return termTranslations.bn[term] || term;
            };

            const quantityBadgeHtml = item.quantity ? `<span class="tag"><i class="fa-solid fa-weight-hanging"></i> ${transTerm(item.quantity)}</span>` : '';
            const subCategoryHtml = item.subCategory ? `<span class="tag"><i class="fa-solid fa-circle-info"></i> ${transTerm(item.subCategory)}</span>` : '';
            const descriptionHtml = item.description ? `<p class="menu-item-desc">${item.description}</p>` : '';

            // Handle price logic for Adding to Cart
            const isMRP = (item.price || '').trim().toUpperCase() === 'MRP';
            const hasPrice = item.price && item.price.trim() !== '';
            let btnText = `<i class="fa-solid fa-cart-plus"></i> ${t['add_to_cart'] || 'Add to Cart'}`;
            let btnDisabled = '';
            let cleanPrice = '';

            if (isMRP) {
                btnText = `<i class="fa-solid fa-phone"></i> ${t['call_to_order'] || 'Call to Order'}`;
                btnDisabled = 'disabled';
            } else if (!hasPrice) {
                btnText = t['unavailable'] || 'Unavailable';
                btnDisabled = 'disabled';
            } else {
                if (item.price.includes('-')) {
                    cleanPrice = item.price.split('-')[0].trim();
                } else {
                    cleanPrice = item.price.trim();
                }
            }

            const displayCategory = categoryTranslations[currentLang][item.category] || item.category;

            card.innerHTML = `
                ${imgHtml}
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title"><a href="${dishDetailUrl}">${item.name}</a></h3>
                        <span class="menu-item-price">${formatPrice(item.price)}</span>
                    </div>
                    ${descriptionHtml}
                    <div class="menu-item-meta">
                        <span class="tag"><i class="fa-solid fa-tags"></i> ${displayCategory}</span>
                        ${quantityBadgeHtml}
                        ${subCategoryHtml}
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: auto; width: 100%;">
                        <a href="${dishDetailUrl}" class="btn btn-secondary" style="flex-grow: 1; padding: 0.6rem; font-size: 0.8rem; border-radius: var(--border-radius-sm); height: 44px; display: inline-flex; align-items: center; justify-content: center;">View Details</a>
                        <button type="button" class="btn-add-to-cart btn btn-primary" ${btnDisabled} data-id="${item.id}" data-name="${item.name}" data-price="${cleanPrice}" style="flex-grow: 1.5; padding: 0.6rem; font-size: 0.8rem; border-radius: var(--border-radius-sm); height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-shadow: none;">
                            ${btnText}
                        </button>
                    </div>
                </div>
            `;

            menuGrid.appendChild(card);
        });
    }

    // Set up tabs action listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentCategory = button.getAttribute('data-category');
            if (currentCategory !== 'all') {
                isShowingAll = false;
            }
            renderMenu();
        });
    });

    // Set up load more button listener
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            isShowingAll = !isShowingAll;
            renderMenu();
            if (!isShowingAll) {
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // Live search event listeners
    if (menuSearchInput) {
        menuSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (searchQuery) {
                if (clearSearchBtn) clearSearchBtn.style.display = 'block';
            } else {
                if (clearSearchBtn) clearSearchBtn.style.display = 'none';
            }
            renderMenu();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (menuSearchInput) {
                menuSearchInput.value = '';
                searchQuery = '';
                clearSearchBtn.style.display = 'none';
                renderMenu();
            }
        });
    }

    // Initial render
    if (typeof MENU_DATA !== 'undefined') {
        renderMenu();
    }

    /* ==========================================================================
       5. Guest Reviews Testimonials Slider
       ========================================================================== */
    const slides = document.querySelectorAll('.review-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let currentSlide = 0;
    let autoSlideInterval;

    const showSlide = (index) => {
        if (slides.length === 0) return;

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 7000);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    };

    if (slides.length > 0) {
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startAutoSlide();
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startAutoSlide();
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-index'));
                showSlide(targetIndex);
                startAutoSlide();
            });
        });

        showSlide(currentSlide);
        startAutoSlide();

        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
            reviewsSection.addEventListener('mouseenter', stopAutoSlide);
            reviewsSection.addEventListener('mouseleave', startAutoSlide);
        }
    }

    /* ==========================================================================
       6. Custom Image Lightbox Modal
       ========================================================================== */
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.lightbox-trigger');
        if (trigger) {
            const imgSrc = trigger.getAttribute('data-src');
            const childImg = trigger.querySelector('img');
            const captionText = childImg ? childImg.getAttribute('alt') : 'Avanti Restaurant Fine Dining';

            if (lightboxModal && lightboxImg) {
                lightboxImg.src = imgSrc;
                if (lightboxCaption) {
                    lightboxCaption.textContent = captionText;
                }
                lightboxModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    const closeLightbox = () => {
        if (lightboxModal) {
            lightboxModal.classList.remove('show');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (lightboxImg) lightboxImg.src = '';
            }, 300);
        }
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeBookingModal();
        }
    });

    /* ==========================================================================
       7. Table Reservation Form Client-side Validation & Success Modal
       ========================================================================== */
    const reservationForm = document.getElementById('reservation-form');
    const bookingModal = document.getElementById('booking-modal');
    const bookingDetails = document.getElementById('booking-modal-details');
    const closeBookingBtn = document.getElementById('close-booking-modal');

    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+88)?01[3-9]\d{8}$/;

    const validateField = (element, validationFn) => {
        if (!element) return true;
        const value = element.value.trim();
        const isValid = validationFn(value);
        const parent = element.closest('.form-group');

        if (!isValid) {
            parent.classList.add('has-error');
        } else {
            parent.classList.remove('has-error');
        }

        return isValid;
    };

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('name');
            const phoneEl = document.getElementById('phone');
            const emailEl = document.getElementById('email');
            const guestsEl = document.getElementById('guests');
            const dateEl = document.getElementById('date');
            const timeEl = document.getElementById('time');
            const requestsEl = document.getElementById('requests');

            const isNameValid = validateField(nameEl, (val) => val.length >= 2);
            const isPhoneValid = validateField(phoneEl, (val) => phoneRegex.test(val.replace(/[\s-]/g, '')));
            const isEmailValid = validateField(emailEl, (val) => emailRegex.test(val));
            const isGuestsValid = validateField(guestsEl, (val) => val !== '');
            const isDateValid = validateField(dateEl, (val) => val !== '');
            const isTimeValid = validateField(timeEl, (val) => val !== '');

            const isFormValid = isNameValid && isPhoneValid && isEmailValid && isGuestsValid && isDateValid && isTimeValid;

            if (isFormValid) {
                const formattedDate = new Date(dateEl.value).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                const specialRequests = requestsEl.value.trim() ? requestsEl.value.trim() : 'None';

                const submitBtn = reservationForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

                const ajaxUrl = AVANTI_APP.ajax_url;
                const reservationNonce = AVANTI_APP.reservation_nonce;

                const formData = new FormData();
                formData.append('action', 'avanti_submit_reservation');
                formData.append('nonce', reservationNonce);
                formData.append('name', nameEl.value.trim());
                formData.append('phone', phoneEl.value.trim());
                formData.append('email', emailEl.value.trim());
                formData.append('guests', guestsEl.value);
                formData.append('date', dateEl.value);
                formData.append('time', timeEl.value);
                formData.append('requests', requestsEl.value.trim());

                fetch(ajaxUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        if (bookingDetails) {
                            const t = uiTranslations[currentLang] || uiTranslations['en'];
                            const guestsCountText = currentLang === 'bn' ? `${translateDigits(guestsEl.value)} জন` : `${guestsEl.value} Guest(s)`;
                            const displayDate = currentLang === 'bn' ? translateDateToBangla(dateEl.value) : formattedDate;
                            const displayTime = currentLang === 'bn' ? translateTime(timeEl.value) : timeEl.value;
                            const displaySpecialRequests = specialRequests === 'None' ? (currentLang === 'bn' ? 'কোনোটিই নয়' : 'None') : specialRequests;

                            bookingDetails.innerHTML = `
                                <p><strong>${t['guest_name_lbl']}</strong> ${nameEl.value.trim()}</p>
                                <p><strong>${t['phone_lbl']}</strong> ${phoneEl.value.trim()}</p>
                                <p><strong>${t['table_size_lbl']}</strong> ${guestsCountText}</p>
                                <p><strong>${t['reserved_date_lbl']}</strong> ${displayDate}</p>
                                <p><strong>${t['reserved_time_lbl']}</strong> ${displayTime}</p>
                                <p><strong>${t['special_requests_lbl']}</strong> "${displaySpecialRequests}"</p>
                                <p style="margin-top: 15px; font-size: 0.85rem; color: #dfb15b; text-align: center;"><i class="fa-solid fa-circle-info"></i> ${t['confirm_sent_lbl']}</p>
                            `;
                        }

                        if (bookingModal) {
                            bookingModal.style.display = 'flex';
                            setTimeout(() => {
                                bookingModal.classList.add('show');
                            }, 50);
                            document.body.style.overflow = 'hidden';
                        }

                        reservationForm.reset();
                        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('has-error'));
                    } else {
                        const resError = currentLang === 'bn' ? 'বুকিং ত্রুটি: ' + (result.data.message || 'কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।') : 'Reservation Error: ' + (result.data.message || 'Something went wrong. Please try again.');
                        alert(resError);
                    }
                })
                .catch(err => {
                    console.error('AJAX Error: ', err);
                    const connectionError = currentLang === 'bn' ? 'সংযোগ ত্রুটি। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।' : 'Connection error. Please check your internet connection.';
                    alert(connectionError);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
            }
        });

        const inputsToObserve = ['name', 'phone', 'email', 'guests', 'date', 'time'];
        inputsToObserve.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const eventType = el.tagName === 'SELECT' || el.type === 'date' ? 'change' : 'input';
                el.addEventListener(eventType, () => {
                    const parent = el.closest('.form-group');
                    if (parent && parent.classList.contains('has-error')) {
                        if (id === 'name') validateField(el, (val) => val.length >= 2);
                        if (id === 'phone') validateField(el, (val) => phoneRegex.test(val.replace(/[\s-]/g, '')));
                        if (id === 'email') validateField(el, (val) => emailRegex.test(val));
                        if (id === 'guests') validateField(el, (val) => val !== '');
                        if (id === 'date') validateField(el, (val) => val !== '');
                        if (id === 'time') validateField(el, (val) => val !== '');
                    }
                });
            }
        });
    }

    const closeBookingModal = () => {
        if (bookingModal) {
            bookingModal.classList.remove('show');
            setTimeout(() => {
                bookingModal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        }
    };

    if (closeBookingBtn) {
        closeBookingBtn.addEventListener('click', closeBookingModal);
    }
    
    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                closeBookingModal();
            }
        });
    }

    /* ==========================================================================
       8. Footer Newsletter Subscription
       ========================================================================== */
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = subscribeForm.querySelector('input');
            const email = input.value.trim();
            
            if (email) {
                const alertText = currentLang === 'bn' ? `সাবস্ক্রাইব করার জন্য ধন্যবাদ! আমরা ${email} এ আপডেট পাঠাবো।` : `Thank you for subscribing! We will send updates to ${email}.`;
                alert(alertText);
                subscribeForm.reset();
            }
        });
    }

    /* ==========================================================================
       9. Custom Shopping Cart & Checkout System
       ========================================================================== */
    let cart = [];

    const floatingCart = document.getElementById('floating-cart');
    const cartBadge = document.getElementById('cart-badge');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartDrawer = document.getElementById('close-cart-drawer');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSummary = document.getElementById('cart-summary');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartDelivery = document.getElementById('cart-delivery');
    const cartTotal = document.getElementById('cart-total');
    
    const goToCheckoutBtn = document.getElementById('go-to-checkout-btn');
    const checkoutFormContainer = document.getElementById('checkout-form-container');
    const backToCartBtn = document.getElementById('back-to-cart-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const deliveryToggleBtns = document.querySelectorAll('.delivery-toggle-btn');
    const addressGroup = document.getElementById('address-group');
    const checkoutAddress = document.getElementById('checkout-address');
    
    const orderSuccessModal = document.getElementById('order-success-modal');
    const orderSummaryDetails = document.getElementById('order-summary-details');
    const whatsappManualBtn = document.getElementById('whatsapp-manual-btn');
    const closeSuccessModal = document.getElementById('close-success-modal');

    const ajaxUrl = AVANTI_APP.ajax_url;
    const orderNonce = AVANTI_APP.order_nonce;
    const baseDeliveryCharge = parseFloat(AVANTI_APP.delivery_charge);

    let deliveryType = 'Delivery'; // Default

    // Load cart from LocalStorage
    const loadCart = () => {
        const storedCart = localStorage.getItem('avanti_cart');
        if (storedCart) {
            try {
                cart = JSON.parse(storedCart);
            } catch (e) {
                cart = [];
            }
        }
        updateCartUi();
    };

    // Save cart to LocalStorage
    const saveCart = () => {
        localStorage.setItem('avanti_cart', JSON.stringify(cart));
        updateCartUi();
    };

    // Get fallback image path or category icon for cart
    const getCartItemImageHtml = (id, category, name) => {
        const imgPath = getItemImage(id);
        if (imgPath) {
            return `<img src="${imgPath}" alt="${name}" class="cart-item-img-sm">`;
        } else {
            const iconClass = getFallbackIcon(category, name);
            return `<div class="cart-item-placeholder-icon"><i class="fa-solid ${iconClass}"></i></div>`;
        }
    };

    // Update cart badge count and drawer UI
    const updateCartUi = () => {
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartBadge) {
            cartBadge.textContent = totalQty;
        }

        if (totalQty > 0) {
            if (floatingCart) floatingCart.style.transform = 'scale(1)';
        } else {
            if (floatingCart) floatingCart.style.transform = 'scale(0)';
        }

        if (!cartItemsList) return;

        const t = uiTranslations[currentLang] || uiTranslations['en'];

        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <p>${t['empty_cart']}</p>
                    <button type="button" class="btn btn-primary btn-sm close-cart-on-click">${t['explore_menu_btn']}</button>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            if (checkoutFormContainer) checkoutFormContainer.style.display = 'none';
        } else {
            let listHtml = '';
            let subtotal = 0;

            cart.forEach(item => {
                const itemPrice = parseFloat(item.price) || 0;
                const itemSub = itemPrice * item.quantity;
                subtotal += itemSub;

                let itemCategory = '';
                if (typeof MENU_DATA !== 'undefined') {
                    const matched = MENU_DATA.find(m => m.id == item.id);
                    if (matched) itemCategory = matched.category;
                }

                const imgHtml = getCartItemImageHtml(item.id, itemCategory, item.name);

                listHtml += `
                    <div class="cart-item-card" data-id="${item.id}">
                        ${imgHtml}
                        <div class="cart-item-info">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <div class="cart-item-pricing">
                                <span>৳${item.price}</span>
                                <span class="sub">${currentLang === 'bn' ? 'মোট: ' : 'Total: '}৳${itemSub}</span>
                            </div>
                            <div class="cart-item-controls">
                                <button type="button" class="qty-btn qty-minus" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
                                <span class="qty-count">${currentLang === 'bn' ? translateDigits(item.quantity) : item.quantity}</span>
                                <button type="button" class="qty-btn qty-plus" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
                                <button type="button" class="qty-remove" data-id="${item.id}"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            });

            cartItemsList.innerHTML = listHtml;

            // Update Summary calculations
            const deliveryFee = (deliveryType === 'Takeaway') ? 0 : baseDeliveryCharge;
            const grandTotal = subtotal + deliveryFee;

            if (cartSubtotal) cartSubtotal.textContent = `৳${subtotal}`;
            if (cartDelivery) cartDelivery.textContent = `৳${deliveryFee}`;
            if (cartTotal) cartTotal.textContent = `৳${grandTotal}`;

            const labelEl = document.getElementById('delivery-label');
            if (labelEl) {
                labelEl.textContent = t['delivery_fee_label'];
            }

            const subtotalLabelEl = cartSubtotal.previousElementSibling;
            if (subtotalLabelEl) {
                subtotalLabelEl.textContent = t['subtotal'];
            }

            const totalLabelEl = cartTotal.previousElementSibling;
            if (totalLabelEl) {
                totalLabelEl.textContent = t['grand_total_label'];
            }

            // Only show cart summary if not in checkout screen
            if (checkoutFormContainer && checkoutFormContainer.style.display !== 'block') {
                if (cartSummary) cartSummary.style.display = 'block';
            }
        }
    };

    // Toggle Drawer active class
    const toggleCartDrawer = () => {
        if (!cartDrawer) return;
        cartDrawer.classList.toggle('active');
        if (cartOverlay) {
            cartOverlay.classList.toggle('active');
        }
        document.body.classList.toggle('cart-open');
        
        // Reset checkout view to cart view on open
        if (cartDrawer.classList.contains('active')) {
            if (checkoutFormContainer) checkoutFormContainer.style.display = 'none';
            if (cartItemsList) cartItemsList.style.display = 'block';
            if (cart.length > 0 && cartSummary) {
                cartSummary.style.display = 'block';
            }
        }
    };

    if (floatingCart) floatingCart.addEventListener('click', toggleCartDrawer);
    if (closeCartDrawer) closeCartDrawer.addEventListener('click', toggleCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCartDrawer);

    // Event delegation inside drawer
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-cart-on-click')) {
            toggleCartDrawer();
        }

        // Add to cart click handler
        const addBtn = e.target.closest('.btn-add-to-cart');
        if (addBtn) {
            const id = addBtn.getAttribute('data-id');
            const name = addBtn.getAttribute('data-name');
            const price = parseFloat(addBtn.getAttribute('data-price')) || 0;

            const existingItem = cart.find(item => item.id == id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            saveCart();

            // Trigger micro-animation highlight on cart badge
            if (cartBadge) {
                cartBadge.classList.add('bounce-trigger');
                setTimeout(() => cartBadge.classList.remove('bounce-trigger'), 300);
            }
            if (floatingCart) {
                floatingCart.classList.add('pulse-trigger');
                setTimeout(() => floatingCart.classList.remove('pulse-trigger'), 500);
            }
        }

        // Quantity Plus
        const plusBtn = e.target.closest('.qty-plus');
        if (plusBtn) {
            const id = plusBtn.getAttribute('data-id');
            const item = cart.find(item => item.id == id);
            if (item) {
                item.quantity += 1;
                saveCart();
            }
        }

        // Quantity Minus
        const minusBtn = e.target.closest('.qty-minus');
        if (minusBtn) {
            const id = minusBtn.getAttribute('data-id');
            const item = cart.find(item => item.id == id);
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id != id);
                }
                saveCart();
            }
        }

        // Remove completely
        const removeBtn = e.target.closest('.qty-remove');
        if (removeBtn) {
            const id = removeBtn.getAttribute('data-id');
            cart = cart.filter(i => i.id != id);
            saveCart();
        }
    });

    // Checkout Navigation
    if (goToCheckoutBtn) {
        goToCheckoutBtn.addEventListener('click', () => {
            if (cartItemsList) cartItemsList.style.display = 'none';
            if (cartSummary) cartSummary.style.display = 'none';
            if (checkoutFormContainer) {
                checkoutFormContainer.style.display = 'block';
                // Reset errors
                document.querySelectorAll('#checkout-form .form-group').forEach(group => group.classList.remove('has-error'));
            }
        });
    }

    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', () => {
            if (checkoutFormContainer) checkoutFormContainer.style.display = 'none';
            if (cartItemsList) cartItemsList.style.display = 'block';
            if (cartSummary) cartSummary.style.display = 'block';
        });
    }

    // Order type delivery vs takeaway toggle
    deliveryToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            deliveryToggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            deliveryType = btn.getAttribute('data-value');
            
            const labelToggle = (typeof uiTranslations !== 'undefined') ? (uiTranslations[currentLang] || uiTranslations['en']) : { label_address: 'Delivery Address', delivery_address_bn: 'ডেলিভারি ঠিকানা' };
            const labelSelector = document.querySelector('#address-group label');

            if (deliveryType === 'Takeaway') {
                if (addressGroup) addressGroup.style.display = 'none';
                if (checkoutAddress) checkoutAddress.required = false;
            } else {
                if (addressGroup) addressGroup.style.display = 'block';
                if (checkoutAddress) checkoutAddress.required = true;
                if (labelSelector) {
                    labelSelector.textContent = currentLang === 'bn' ? 'ডেলিভারি ঠিকানা' : 'Delivery Address';
                }
            }

            updateCartUi();
        });
    });

    // Checkout Form Client-side Validator
    const validateCheckoutField = (element, validationFn) => {
        if (!element) return true;
        const value = element.value.trim();
        const isValid = validationFn(value);
        const parent = element.closest('.form-group');

        if (!isValid) {
            parent.classList.add('has-error');
        } else {
            parent.classList.remove('has-error');
        }

        return isValid;
    };

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('checkout-name');
            const phoneEl = document.getElementById('checkout-phone');
            const addressEl = document.getElementById('checkout-address');

            const isNameValid = validateCheckoutField(nameEl, (val) => val.length >= 2);
            const isPhoneValid = validateCheckoutField(phoneEl, (val) => phoneRegex.test(val.replace(/[\s-]/g, '')));
            
            let isAddressValid = true;
            if (deliveryType === 'Delivery') {
                isAddressValid = validateCheckoutField(addressEl, (val) => val.length >= 8);
            }

            if (isNameValid && isPhoneValid && isAddressValid) {
                const placeBtn = document.getElementById('place-order-btn');
                const originalText = placeBtn.innerHTML;
                placeBtn.disabled = true;
                placeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${uiTranslations[currentLang]['processing']}`;

                // Prep Ajax payload
                const notesEl = document.getElementById('checkout-notes');
                const formData = new FormData();
                formData.append('action', 'avanti_submit_order');
                formData.append('nonce', orderNonce);
                formData.append('name', nameEl.value.trim());
                formData.append('phone', phoneEl.value.trim());
                formData.append('delivery_type', deliveryType);
                formData.append('address', deliveryType === 'Delivery' ? addressEl.value.trim() : '');
                formData.append('instructions', notesEl ? notesEl.value.trim() : '');
                formData.append('cart', JSON.stringify(cart));

                fetch(ajaxUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const orderId = result.data.order_id;
                        const waUrl = result.data.whatsapp_url;
                        const totalAmount = result.data.total;

                        // Display Success Summary
                        if (orderSummaryDetails) {
                            const t = uiTranslations[currentLang] || uiTranslations['en'];
                            const displayMethod = deliveryType === 'Takeaway' ? (currentLang === 'bn' ? 'টেকঅ্যাওয়ে' : 'Takeaway') : (currentLang === 'bn' ? 'হোম ডেলিভারি' : 'Home Delivery');
                            
                            orderSummaryDetails.innerHTML = `
                                <p><strong>${t['order_id_lbl']}</strong> #${orderId}</p>
                                <p><strong>${t['order_method_lbl']}</strong> ${displayMethod}</p>
                                <p><strong>${t['order_total_lbl']}</strong> ৳${totalAmount}</p>
                            `;
                        }

                        if (whatsappManualBtn) {
                            whatsappManualBtn.href = waUrl;
                        }

                        // Trigger WhatsApp redirect instantly
                        window.open(waUrl, '_blank');

                        // Show Success Modal
                        if (orderSuccessModal) {
                            orderSuccessModal.style.display = 'flex';
                            setTimeout(() => orderSuccessModal.classList.add('show'), 50);
                            document.body.style.overflow = 'hidden';
                        }

                        // Clear cart
                        cart = [];
                        saveCart();
                        checkoutForm.reset();
                        toggleCartDrawer(); // Hide Drawer
                    } else {
                        const errText = currentLang === 'bn' ? 'অর্ডার ত্রুটি: ' + (result.data.message || 'কিছু ভুল হয়েছে।') : 'Order Error: ' + (result.data.message || 'Something went wrong.');
                        alert(errText);
                    }
                })
                .catch(err => {
                    console.error('Checkout error: ', err);
                    const connectionError = currentLang === 'bn' ? 'সংযোগ ত্রুটি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।' : 'Connection error. Please try again.';
                    alert(connectionError);
                })
                .finally(() => {
                    placeBtn.disabled = false;
                    placeBtn.innerHTML = originalText;
                });
            }
        });

        // Instant validation listeners on type
        const cInputs = ['checkout-name', 'checkout-phone', 'checkout-address'];
        cInputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', () => {
                    const parent = el.closest('.form-group');
                    if (parent && parent.classList.contains('has-error')) {
                        if (id === 'checkout-name') validateCheckoutField(el, (val) => val.length >= 2);
                        if (id === 'checkout-phone') validateCheckoutField(el, (val) => phoneRegex.test(val.replace(/[\s-]/g, '')));
                        if (id === 'checkout-address') validateCheckoutField(el, (val) => val.length >= 8);
                    }
                });
            }
        });
    }

    if (closeSuccessModal) {
        closeSuccessModal.addEventListener('click', () => {
            if (orderSuccessModal) {
                orderSuccessModal.classList.remove('show');
                setTimeout(() => {
                    orderSuccessModal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });
    }

    // Init App components
    loadCart();

    /* ==========================================================================
       Chef Specials Gallery Carousel
       ========================================================================== */
    const specialsTrack = document.getElementById('specialsTrack');
    const specialsPrev = document.getElementById('specialsPrev');
    const specialsNext = document.getElementById('specialsNext');
    const specialsDots = document.querySelectorAll('.specials-dot');
    const specialsSlides = document.querySelectorAll('.specials-slide');

    if (specialsTrack && specialsSlides.length > 0) {
        let currentSlide = 0;
        const totalSlides = specialsSlides.length;

        function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentSlide = index;
            specialsTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
            specialsSlides.forEach(s => s.classList.remove('active'));
            specialsSlides[currentSlide].classList.add('active');
            specialsDots.forEach(d => d.classList.remove('active'));
            if (specialsDots[currentSlide]) specialsDots[currentSlide].classList.add('active');
        }

        if (specialsPrev) specialsPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
        if (specialsNext) specialsNext.addEventListener('click', () => goToSlide(currentSlide + 1));

        specialsDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-index'));
                goToSlide(idx);
            });
        });

        // Auto-advance every 5 seconds
        let autoInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

        // Pause on hover
        const wrapper = document.querySelector('.specials-carousel-wrapper');
        if (wrapper) {
            wrapper.addEventListener('mouseenter', () => clearInterval(autoInterval));
            wrapper.addEventListener('mouseleave', () => {
                clearInterval(autoInterval);
                autoInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
            if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
        });
    }

    /* ==========================================================================
       Services Carousel
       ========================================================================== */
    const servicesTrack = document.getElementById('servicesTrack');
    const servicesPrev = document.getElementById('servicesPrev');
    const servicesNext = document.getElementById('servicesNext');
    const servicesDots = document.querySelectorAll('.services-dot');
    const servicesSlides = document.querySelectorAll('.services-slide');

    if (servicesTrack && servicesSlides.length > 0) {
        let currentService = 0;
        const totalServices = servicesSlides.length;

        function goToService(index) {
            if (index < 0) index = totalServices - 1;
            if (index >= totalServices) index = 0;
            currentService = index;
            servicesTrack.style.transform = 'translateX(-' + (currentService * 100) + '%)';
            servicesSlides.forEach(s => s.classList.remove('active'));
            servicesSlides[currentService].classList.add('active');
            servicesDots.forEach(d => d.classList.remove('active'));
            if (servicesDots[currentService]) servicesDots[currentService].classList.add('active');
        }

        if (servicesPrev) servicesPrev.addEventListener('click', () => goToService(currentService - 1));
        if (servicesNext) servicesNext.addEventListener('click', () => goToService(currentService + 1));

        servicesDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-index'));
                goToService(idx);
            });
        });

        // Auto-advance every 6 seconds
        let servicesInterval = setInterval(() => goToService(currentService + 1), 6000);
        const servicesWrapper = document.querySelector('.services-carousel-wrapper');
        if (servicesWrapper) {
            servicesWrapper.addEventListener('mouseenter', () => clearInterval(servicesInterval));
            servicesWrapper.addEventListener('mouseleave', () => {
                clearInterval(servicesInterval);
                servicesInterval = setInterval(() => goToService(currentService + 1), 6000);
            });
        }
    }

    /* ==========================================================================
       Moments Carousel — same pattern as Services
       ========================================================================== */
    const momentsTrack = document.getElementById('momentsTrack');
    const momentsPrev = document.getElementById('momentsPrev');
    const momentsNext = document.getElementById('momentsNext');
    const momentsDotsContainer = document.getElementById('momentsDots');
    const momentsSlides = document.querySelectorAll('.moments-slide');

    if (momentsTrack && momentsSlides.length > 0) {
        let currentMoment = 0;
        const totalMoments = momentsSlides.length;

        // Create dots
        momentsSlides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'moments-dot' + (idx === 0 ? ' active' : '');
            dot.setAttribute('data-index', idx);
            dot.addEventListener('click', () => goToMoment(idx));
            momentsDotsContainer.appendChild(dot);
        });
        const momentsDots = document.querySelectorAll('.moments-dot');

        function goToMoment(index) {
            if (index < 0) index = totalMoments - 1;
            if (index >= totalMoments) index = 0;
            currentMoment = index;
            momentsTrack.style.transform = 'translateX(-' + (currentMoment * 100) + '%)';
            momentsSlides.forEach(s => s.classList.remove('active'));
            momentsSlides[currentMoment].classList.add('active');
            momentsDots.forEach(d => d.classList.remove('active'));
            if (momentsDots[currentMoment]) momentsDots[currentMoment].classList.add('active');
        }

        if (momentsPrev) momentsPrev.addEventListener('click', () => goToMoment(currentMoment - 1));
        if (momentsNext) momentsNext.addEventListener('click', () => goToMoment(currentMoment + 1));

        // Auto-advance every 6 seconds
        let momentsInterval = setInterval(() => goToMoment(currentMoment + 1), 6000);
        const momentsWrapper = document.querySelector('.moments-carousel-wrapper');
        if (momentsWrapper) {
            momentsWrapper.addEventListener('mouseenter', () => clearInterval(momentsInterval));
            momentsWrapper.addEventListener('mouseleave', () => {
                clearInterval(momentsInterval);
                momentsInterval = setInterval(() => goToMoment(currentMoment + 1), 6000);
            });
        }
    }

    /* ==========================================================================
       10. Multi-Language translation toggle hook
       ========================================================================== */
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const nextLang = (currentLang === 'en') ? 'bn' : 'en';
            translatePage(nextLang);
        });
    }

    // Set initial translations based on stored selection
    translatePage(currentLang);
});
