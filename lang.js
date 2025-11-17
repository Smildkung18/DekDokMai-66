// ===================================
//  พจนานุกรม (Dictionary) 
//  (ไฟล์ lang.js)
// ===================================

const translations = {
    // === 1. UI (เมนู, ปุ่ม, ทั่วไป) ===
    "site_title_home": { th: "หน้าแรก - DekDokMai Shop", en: "Home - DekDokMai Shop" },
    "site_title_shop": { th: "Shop - DekDokMai Shop", en: "Shop - DekDokMai Shop" },
    "site_title_detail": { th: "รายละเอียดสินค้า - DekDokMai Shop", en: "Product Detail - DekDokMai Shop" },
    "site_title_cart": { th: "ตะกร้าสินค้า - DekDokMai Shop", en: "Cart - DekDokMai Shop" },
    "site_title_checkout": { th: "ชำระเงิน - DekDokMai Shop", en: "Checkout - DekDokMai Shop" },
    "site_title_confirm": { th: "ยืนยันคำสั่งซื้อ - DekDokMai Shop", en: "Order Confirmation - DekDokMai Shop" },
    "site_title_contact": { th: "Contact - DekDokMai Shop", en: "Contact - DekDokMai Shop" },
    "site_title_profile": { th: "โปรไฟล์ของฉัน - DekDokMai Shop", en: "My Profile - DekDokMai Shop" },
    "site_title_search": { th: "ผลการค้นหา - DekDokMai Shop", en: "Search Results - DekDokMai Shop" },
    "nav_search_placeholder": { th: "ค้นหาสินค้า...", en: "Search products..." },
    "nav_home": { th: "Home", en: "Home" },
    "nav_shop": { th: "Shop", en: "Shop" },
    "nav_contact": { th: "Contact", en: "Contact" },
    "footer_credit": { th: "© 2025 DekDokMai Shop by Seni Gohsongnoen", en: "© 2025 DekDokMai Shop by Seni Gohsongnoen" },
    "btn_view_details": { th: "ดูรายละเอียด", en: "View Details" },
    "btn_add_to_cart": { th: "เพิ่มลงตะกร้า", en: "Add to Cart" },
    "btn_added_to_cart": { th: "เพิ่มลงตะกร้าแล้ว!", en: "Added to Cart!" },
    "btn_custom_order": { th: "Custom", en: "Custom" },
    "btn_back_to_shop": { th: "กลับไปที่หน้าร้านค้า", en: "Back to Shop" },
    "btn_back": { th: "ย้อนกลับ", en: "Back" },

    // === 2. หน้า Home (index.html) ===
    "home_carousel_title_1": { th: "คอลเลคชั่นใหม่ล่าสุด", en: "Newest Collection" },
    "home_carousel_desc_1": { th: "งานถักทอทำมือที่ไม่เหมือนใคร ใส่ใจในทุกรายละเอียด", en: "Unique handmade crafts, crafted with care in every detail." },
    "home_carousel_title_2": { th: "ของขวัญสุดพิเศษ", en: "Special Gifts" },
    "home_carousel_desc_2": { th: "มอบของขวัญทำมือที่มีชิ้นเดียวในโลกให้กับคนพิเศษของคุณ", en: "Give a one-of-a-kind handmade gift to your special someone." },
    "home_featured_title": { th: "สินค้าแนะนำ", en: "Featured Products" },

    // === 3. หน้า Shop (shop.html) ===
    "shop_title": { th: "สินค้าทั้งหมด", en: "All Products" },
    "tab_cat1": { th: "ตุ๊กตาถัก", en: "Knitted Dolls" },
    "tab_cat2": { th: "กระเป๋าผ้า", en: "Fabric Bags" },
    "tab_cat3": { th: "เครื่องประดับ", en: "Accessories" },
    "tab_cat4": { th: "งานเรซิ่น", en: "Resin Crafts" },
    "tab_cat5": { th: "พวงกุญแจ", en: "Keychains" },
    "tab_cat6": { th: "สมุดโน้ต", en: "Notebooks" },
    "tab_cat7": { th: "ของตกแต่ง", en: "Decorations" },

    // === 4. หน้า Detail (product_detail.html) ===
    "detail_loading": { th: "กำลังโหลด...", en: "Loading..." },
    "detail_price_unit": { th: "บาท", en: "Baht" },
    "detail_heading": { th: "รายละเอียดสินค้า:", en: "Product Details:" },
    "detail_recommended_title": { th: "สินค้าแนะนำอื่นๆ", en: "You Might Also Like" },
    "detail_not_found_title": { th: "ไม่พบข้อมูลสินค้า", en: "Product Not Found" },
    "detail_not_found_desc": { th: "กรุณากลับไปที่หน้า Shop และเลือกสินค้าที่ท่านสนใจ", en: "Please return to the Shop page and select a product." },
    "detail_no_details": { th: "ไม่มีรายละเอียดเพิ่มเติม", en: "No additional details" },

    // === 5. หน้า Cart (cart.html) ===
    "cart_title": { th: "ตะกร้าสินค้าของคุณ", en: "Your Shopping Cart" },
    "cart_table_select": { th: "เลือก", en: "Select" },
    "cart_table_product": { th: "สินค้า", en: "Product" },
    "cart_table_price": { th: "ราคา", en: "Price" },
    "cart_table_quantity": { th: "จำนวน", en: "Quantity" },
    "cart_table_total": { th: "รวม", en: "Total" },
    "cart_table_remove": { th: "ลบ", en: "Remove" },
    "cart_empty": { th: "ตะกร้าของคุณว่างเปล่า", en: "Your cart is empty" },
    "cart_summary_title": { th: "สรุปยอด", en: "Summary" },
    "cart_summary_desc": { th: "ยอดรวม (สำหรับสินค้าที่เลือก)", en: "Total (for selected items)" },
    "cart_summary_button": { th: "ไปยังหน้าชำระเงิน", en: "Proceed to Checkout" },
    "cart_select_all": { th: "เลือกทั้งหมด", en: "Select All" },

    // === 6. หน้า Checkout (checkout.html) ===
    "checkout_title": { th: "สรุปคำสั่งซื้อ", en: "Order Summary" },
    "checkout_item_list": { th: "รายการสินค้า", en: "Item List" },
    "checkout_payment_method": { th: "เลือกช่องทางชำระเงิน", en: "Select Payment Method" },
    "checkout_payment_qr": { th: "สแกน QR Code", en: "Scan QR Code" },
    "checkout_payment_bank": { th: "โอนผ่านบัญชีธนาคาร", en: "Bank Transfer" },
    "checkout_payment_cod": { th: "เก็บเงินปลายทาง (ยังไม่เปิดให้บริการ)", en: "Cash on Delivery (Unavailable)" },
    "checkout_summary_title": { th: "สรุปยอด", en: "Summary" },
    "checkout_subtotal": { th: "ยอดรวมสินค้า", en: "Subtotal" },
    "checkout_shipping": { th: "ค่าจัดส่ง", en: "Shipping Fee" },
    "checkout_total": { th: "ยอดสุทธิ", en: "Total Amount" },
    "checkout_confirm_button": { th: "ยืนยันคำสั่งซื้อ", en: "Confirm Order" },
    "checkout_no_items": { th: "ไม่มีสินค้าในตะกร้า", en: "No items in cart" },
    "checkout_coupon_title": { th: "โค้ดส่วนลด", en: "Discount Code" },
    "checkout_coupon_placeholder": { th: "กรอกโค้ด", en: "Enter code" },
    "checkout_coupon_apply": { th: "ใช้โค้ด", en: "Apply" },
    "checkout_coupon_applied": { th: "ใช้โค้ดแล้ว!", en: "Applied!" },
    "checkout_coupon_invalid": { th: "โค้ดไม่ถูกต้อง", en: "Invalid Code" },
    "checkout_discount_label": { th: "ส่วนลด (50%)", en: "Discount (50%)" },


    // === 7. หน้า Confirmation (confirmation.html) ===
    "confirm_title": { th: "ขอบคุณสำหรับคำสั่งซื้อ!", en: "Thank You For Your Order!" },
    "confirm_desc": { th: "เราได้รับคำสั่งซื้อของคุณเรียบร้อยแล้ว และจะรีบดำเนินการจัดส่งให้เร็วที่สุด", en: "We have received your order and will process it for shipping soon." },
    "confirm_note": { th: "(นี่เป็นเพียงหน้ายืนยันตัวอย่างสำหรับโปรเจกต์)", en: "(This is a sample confirmation page for the project)" },
    "confirm_back_home": { th: "กลับสู่หน้าแรก", en: "Back to Home" },

    // === 8. หน้า Contact (contact.html) ===
    "contact_title": { th: "ติดต่อ / สั่งซื้อ", en: "Contact / Custom Order" },
    "contact_desc": { th: "สนใจสินค้าชิ้นไหน หรือต้องการสั่งทำพิเศษ (Custom Order) สามารถกรอกฟอร์มด้านล่างนี้ได้เลยค่ะ", en: "Interested in any product or want a custom order? Please fill out the form below." },
    "contact_name": { th: "ชื่อ-นามสกุล", en: "Full Name" },
    "contact_name_placeholder": { th: "กรอกชื่อ-นามสกุล", en: "Enter your full name" },
    "contact_phone": { th: "เบอร์โทรศัพท์", en: "Phone" },
    "contact_phone_placeholder": { th: "กรอกเบอร์โทรศัพท์", en: "Enter your phone number" },
    "contact_email": { th: "E-mail", en: "E-mail" },
    "contact_subject": { th: "หัวข้อติดต่อ", en: "Subject" },
    "contact_subject_placeholder": { th: "-- กรุณาเลือก --", en: "-- Please select --" },
    "contact_subject_opt1": { th: "สั่งซื้อสินค้า", en: "Product Order" },
    "contact_subject_opt2": { th: "สั่งทำพิเศษ (Custom Order)", en: "Custom Order" },
    "contact_subject_opt3": { th: "สอบถามทั่วไป", en: "General Inquiry" },
    "contact_subject_opt4": { th: "ติดตามออเดอร์", en: "Order Tracking" },
    "contact_message": { th: "ข้อความ / รายละเอียดสินค้า", en: "Message / Product Details" },
    "contact_message_placeholder": { th: "กรุณาระบุสินค้าที่สนใจ หรือรายละเอียดที่ต้องการสอบถาม...", en: "Please specify the product you are interested in or your inquiry..." },
    "contact_send_button": { th: "ส่งข้อความ", en: "Send Message" },

    // === 9. หน้า Profile (profile.html) ===
    "profile_title": { th: "โปรไฟล์ของฉัน", en: "My Profile" },
    "profile_welcome": { th: "สวัสดี, Guest", en: "Hello, Guest" },
    "profile_menu_history": { th: "ประวัติการสั่งซื้อ", en: "Order History" },
    "profile_menu_address": { th: "ที่อยู่จัดส่ง", en: "Shipping Address" },
    "profile_menu_password": { th: "เปลี่ยนรหัสผ่าน (จำลอง)", en: "Change Password (Demo)" },
    "profile_menu_logout": { th: "ออกจากระบบ (จำลอง)", en: "Logout (Demo)" },
    "profile_history_title": { th: "ประวัติการสั่งซื้อ (ตัวอย่าง)", en: "Order History (Demo)" },
    "profile_order1_title": { th: "ออเดอร์ #1024 - (ตุ๊กตาถักไหมพรม)", en: "Order #1024 - (Knitted Doll)" },
    "profile_order1_status": { th: "จัดส่งแล้ว", en: "Shipped" },
    "profile_order_date": { th: "วันที่สั่งซื้อ:", en: "Order Date:" },
    "profile_order_total": { th: "ยอดรวม:", en: "Total:" },
    "profile_order_items": { th: "รายการ:", en: "Items:" },
    "profile_order2_title": { th: "ออเดอร์ #1023 - (กระเป๋าผ้าปักลาย)", en: "Order #1023 - (Embroidered Bag)" },
    "profile_order2_status": { th: "กำลังเตรียมจัดส่ง", en: "Processing" },

    // === 10. หน้า Search (search_results.html) ===
    "search_title": { th: "ผลการค้นหาสำหรับ:", en: "Search results for:" },
    "search_no_results_title": { th: "ไม่พบสินค้าที่คุณค้นหา", en: "No products found" },
    "search_no_query": { th: "กรุณากรอกคำค้นหา", en: "Please enter a search term" },

    // === 11. สินค้า (Products) ===
    // --- (Key ทั่วไป) ---
    "key_material": { th: "วัสดุ", en: "Material" },
    "key_size": { th: "ขนาด", en: "Size" },
    "key_care": { th: "การดูแล", en: "Care" },

    // --- (CAT 1: ตุ๊กตาถัก) ---
    "product_cat1_01_name": { th: "ตุ๊กตาถักไหมพรม", en: "Knitted Doll" },
    "product_cat1_01_desc": { th: "ตุ๊กตาน้องกระต่าย ขนนุ่มนิ่มน่ากอด ทำจากไหมพรมคอตตอนอย่างดี ปลอดภัยสำหรับเด็กเล็ก", en: "A soft, huggable bunny doll made from high-quality cotton yarn, safe for young children." },
    "product_cat1_01_val1": { th: "ไหมพรม Milk Cotton", en: "Milk Cotton Yarn" },
    "product_cat1_01_val2": { th: "สูงประมาณ 12 นิ้ว", en: "Approx. 12 inches tall" },
    "product_cat1_01_val3": { th: "สามารถซักมือเบาๆ ด้วยน้ำสบู่อ่อน แล้วตากในที่ร่ม", en: "Hand wash gently with mild soap and dry in shade." },

    "product_cat1_02_name": { th: "ตุ๊กตาหมีน้อย", en: "Little Bear Doll" },
    "product_cat1_02_desc": { th: "ตุ๊กตาหมีถัก ไซส์พกพา น่ารัก เหมาะสำหรับเป็นเพื่อนเดินทาง", en: "A cute, portable knitted bear, perfect as a travel companion." },
    "product_cat1_02_val1": { th: "ไหมพรมขนแกะ", en: "Wool Yarn" },
    "product_cat1_02_val2": { th: "สูง 8 นิ้ว", en: "8 inches tall" },
    "product_cat1_02_val3": { th: "ซักมือเบาๆ หรือใส่ถุงซักผ้าในเครื่องซักผ้า", en: "Hand wash gently or use a laundry bag for machine wash." },

    "product_cat1_03_name": { th: "น้องแมวถัก", en: "Knitted Kitty" },
    "product_cat1_03_desc": { th: "น้องแมวตัวอ้วนกลม หน้าตากวนๆ น่าฟัดสุดๆ", en: "A chubby, playful-looking knitted cat that's irresistibly huggable." },
    "product_cat1_03_val1": { th: "ไหมพรมคอตตอน", en: "Cotton Yarn" },
    "product_cat1_03_val2": { th: "สูง 7 นิ้ว", en: "7 inches tall" },
    "product_cat1_03_val3": { th: "ใช้ผ้าชุบน้ำเช็ดทำความสะอาด", en: "Wipe clean with a damp cloth." },

    "product_cat1_04_name": { th: "ไดโนเสาร์ถัก", en: "Knitted Dinosaur" },
    "product_cat1_04_desc": { th: "ไดโนเสาร์คอยาวพันธุ์บรอนโตซอรัส สีเขียวสดใส ตั้งโชว์ได้", en: "A bright green Brontosaurus dinosaur, perfect for display." },
    "product_cat1_04_val1": { th: "ไหมพรม", en: "Yarn" },
    "product_cat1_04_val2": { th: "สูง 10 นิ้ว", en: "10 inches tall" },
    "product_cat1_04_val3": { th: "ปัดฝุ่นเบาๆ หรือซักมือ", en: "Dust lightly or hand wash." },

    "product_cat1_05_name": { th: "ปลาวาฬถัก", en: "Knitted Whale" },
    "product_cat1_05_desc": { th: "ปลาวาฬตัวจิ๋ว สีฟ้าคราม ใช้เป็นหมอนอิงใบเล็กหรือของบีบเล่น", en: "A small, sky-blue whale, great as a mini-pillow or squeeze toy." },
    "product_cat1_05_val1": { th: "ไหมพรมกำมะหยี่", en: "Velvet Yarn" },
    "product_cat1_05_val2": { th: "ยาว 5 นิ้ว", en: "5 inches long" },
    "product_cat1_05_val3": { th: "ซักมือเบาๆ", en: "Hand wash gently." },

    "product_cat1_06_name": { th: "กระต่ายหูยาว", en: "Long-Eared Bunny" },
    "product_cat1_06_desc": { th: "น้องกระต่ายหูยาวสีชมพูพาสเทล หูสามารถดัดได้", en: "A pastel pink bunny with long, poseable ears." },
    "product_cat1_06_val1": { th: "ไหมพรมคอตตอน, โครงลวดดัด", en: "Cotton Yarn, Bendable Wire" },
    "product_cat1_06_val2": { th: "สูง 14 นิ้ว", en: "14 inches tall" },
    "product_cat1_06_val3": { th: "ซักแห้ง หรือใช้ผ้าชุบน้ำเช็ด", en: "Dry clean or wipe with a damp cloth." },

    // --- (CAT 2: กระเป๋าผ้า) ---
    "product_cat2_01_name": { th: "กระเป๋าผ้าปักลาย", en: "Embroidered Fabric Bag" },
    "product_cat2_01_desc": { th: "กระเป๋าผ้าแคนวาส ปักลายดอกไม้ด้วยมือ สวยงามและทนทาน มีช่องใส่ของด้านใน", en: "Durable canvas bag with hand-embroidered flowers. Includes an inner pocket." },
    "product_cat2_01_val1": { th: "ผ้าแคนวาส, ด้ายปัก", en: "Canvas, Embroidery Thread" },
    "product_cat2_01_val2": { th: "14 x 16 นิ้ว", en: "14 x 16 inches" },
    "product_cat2_01_val3": { th: "ซักมือเบาๆ และรีดด้านในกระเป๋า", en: "Hand wash gently and iron on the inside." },

    "product_cat2_02_name": { th: "กระเป๋าถักโครเชต์", en: "Crochet Bag" },
    "product_cat2_02_desc": { th: "กระเป๋าสะพายข้าง ถักโครเชต์ลายตารางสุดฮิต", en: "A trendy checkered crochet shoulder bag." },
    "product_cat2_02_val1": { th: "เชือกฟอก", en: "Macrame Cord" },
    "product_cat2_02_val2": { th: "10 x 10 นิ้ว", en: "10 x 10 inches" },
    "product_cat2_02_val3": { th: "ซักมือ ห้ามบิด", en: "Hand wash, do not wring." },

    "product_cat2_03_name": { th: "ถุงผ้าลดโลกร้อน", en: "Eco-Friendly Tote Bag" },
    "product_cat2_03_desc": { th: "ถุงผ้าสกรีนลายแมว น่ารัก พับเก็บง่าย", en: "A cute, foldable tote bag with a cat print." },
    "product_cat2_03_val1": { th: "ผ้าดิบ", en: "Calico Fabric" },
    "product_cat2_03_val2": { th: "13 x 15 นิ้ว", en: "13 x 15 inches" },
    "product_cat2_03_val3": { th: "ซักเครื่องได้", en: "Machine washable." },

    "product_cat2_04_name": { th: "กระเป๋าใส่เหรียญ", en: "Coin Purse" },
    "product_cat2_04_desc": { th: "กระเป๋าใส่เหรียญใบเล็ก ปักลายสตอเบอรี่ มีซิป", en: "A small zippered coin purse with strawberry embroidery." },
    "product_cat2_04_val1": { th: "ผ้าฝ้าย", en: "Cotton Fabric" },
    "product_cat2_04_val2": { th: "4 x 4 นิ้ว", en: "4 x 4 inches" },
    "product_cat2_04_val3": { th: "ซักมือ", en: "Hand wash." },

    "product_cat2_05_name": { th: "กระเป๋าผ้าฝ้าย", en: "Cotton Bag" },
    "product_cat2_05_desc": { th: "กระเป๋าผ้าฝ้ายย้อมสีธรรมชาติ สไตล์มินิมอล", en: "A minimalist, natural-dyed cotton bag." },
    "product_cat2_05_val1": { th: "ผ้าฝ้ายย้อมคราม", en: "Indigo-dyed Cotton" },
    "product_cat2_05_val2": { th: "12 x 14 นิ้ว", en: "12 x 14 inches" },
    "product_cat2_05_val3": { th: "ซักมือด้วยน้ำยาอ่อนๆ แยกซักในครั้งแรก", en: "Hand wash with mild detergent, wash separately first time." },

    "product_cat2_06_name": { th: "กระเป๋าเป้ผ้า", en: "Canvas Backpack" },
    "product_cat2_06_desc": { th: "เป้ผ้าแคนวาส จุของได้เยอะ ใส่โน้ตบุ๊กได้", en: "A spacious canvas backpack that can fit a laptop." },
    "product_cat2_06_val1": { th: "ผ้าแคนวาสหนา", en: "Heavy Canvas" },
    "product_cat2_06_val2": { th: "16 x 12 x 5 นิ้ว", en: "16 x 12 x 5 inches" },
    "product_cat2_06_val3": { th: "ใช้ผ้าชุบน้ำเช็ดบริเวณที่เปื้อน", en: "Spot clean with a damp cloth." },

    // --- (CAT 3: เครื่องประดับ) ---
    "product_cat3_01_name": { th: "สร้อยข้อมือหิน", en: "Stone Bracelet" },
    "product_cat3_01_desc": { th: "สร้อยข้อมือหินนำโชค (Rose Quartz) ร้อยเรียงอย่างประณีต เสริมดวงความรัก", en: "Rose Quartz lucky stone bracelet, meticulously crafted to enhance love." },
    "product_cat3_01_val1": { th: "หิน Rose Quartz, เอ็นยืด", en: "Rose Quartz, Elastic Cord" },
    "product_cat3_01_val2": { th: "Free Size (รอบวง 16-18 cm)", en: "Free Size (16-18 cm circumference)" },
    "product_cat3_01_val3": { th: "ใช้ผ้าสะอาดเช็ดทำความสะอาด", en: "Wipe clean with a soft cloth." },

    "product_cat3_02_name": { th: "ต่างหูแฮนด์เมด", en: "Handmade Earrings" },
    "product_cat3_02_desc": { th: "ต่างหูจากวัสดุธรรมชาติ ดีไซน์เก๋ไก๋ น้ำหนักเบา", en: "Chic, lightweight earrings made from natural materials." },
    "product_cat3_02_val1": { th: "ไม้, โลหะ (Nickle Free)", en: "Wood, Metal (Nickel-Free)" },
    "product_cat3_02_val2": { th: "ยาว 2 นิ้ว", en: "2 inches long" },
    "product_cat3_02_val3": { th: "เก็บในที่แห้ง หลีกเลี่ยงความชื้น", en: "Store in a dry place, avoid moisture." },

    "product_cat3_03_name": { th: "สร้อยคอลูกปัด", en: "Bead Necklace" },
    "product_cat3_03_desc": { th: "สร้อยคอลูกปัด สไตล์ Y2K ร้อยสลับจี้น่ารัก", en: "Y2K style bead necklace with cute charms." },
    "product_cat3_03_val1": { th: "ลูกปัด, เอ็น", en: "Beads, String" },
    "product_cat3_03_val2": { th: "ยาว 16 นิ้ว", en: "16 inches long" },
    "product_cat3_03_val3": { th: "หลีกเลี่ยงการโดนน้ำหอม", en: "Avoid contact with perfume." },

    "product_cat3_04_name": { th: "แหวนถักเชือก", en: "Woven Rope Ring" },
    "product_cat3_04_desc": { th: "แหวนเชือกเทียนถัก แต่งหินมงคล สามารถปรับขนาดได้", en: "Woven wax cord ring with a lucky stone, adjustable size." },
    "product_cat3_04_val1": { th: "เชือกเทียน, หิน", en: "Wax Cord, Stone" },
    "product_cat3_04_val2": { th: "Free Size (ปรับรูดได้)", en: "Free Size (Adjustable)" },
    "product_cat3_04_val3": { th: "โดนน้ำได้ แต่ควรตากให้แห้ง", en: "Water resistant, but should be dried properly." },

    "product_cat3_05_name": { th: "กำไลข้อเท้า", en: "Anklet" },
    "product_cat3_05_desc": { th: "กำไลข้อเท้าลูกปัด แต่งจี้เปลือกหอย สไตล์โบฮีเมียน", en: "Bohemian style bead anklet with seashell charms." },
    "product_cat3_05_val1": { th: "ลูกปัด, เปลือกหอย, เชือก", en: "Beads, Seashells, String" },
    "product_cat3_05_val2": { th: "Free Size (มีตะขอปรับระดับ)", en: "Free Size (Adjustable clasp)" },
    "product_cat3_05_val3": { th: "หลีกเลี่ยงน้ำทะเลเพื่อความคงทน", en: "Avoid seawater for durability." },

    "product_cat3_06_name": { th: "ต่างหูเรซิ่น", en: "Resin Earrings" },
    "product_cat3_06_desc": { th: "ต่างหูเรซิ่นดอกไม้แห้ง ใสๆ เห็นดอกไม้จริงข้างใน", en: "Clear resin earrings with real dried flowers inside." },
    "product_cat3_06_val1": { th: "เรซิ่น, ดอกไม้แห้ง, โลหะ", en: "Resin, Dried Flowers, Metal" },
    "product_cat3_06_val2": { th: "เส้นผ่านศูนย์กลาง 1 นิ้ว", en: "1 inch diameter" },
    "product_cat3_06_val3": { th: "เก็บในกล่องเมื่อไม่ใช้งาน", en: "Store in a box when not in use." },

    // --- (CAT 4: งานเรซิ่น) ---
    "product_cat4_01_name": { th: "ที่รองแก้วเรซิ่น", en: "Resin Coaster" },
    "product_cat4_01_desc": { th: "ที่รองแก้วเรซิ่น แต่งดอกไม้และทองคำเปลว สวยหรู", en: "Elegant resin coaster decorated with flowers and gold leaf." },
    "product_cat4_01_val1": { th: "เรซิ่น, ดอกไม้แห้ง, ทองคำเปลว", en: "Resin, Dried Flowers, Gold Leaf" },
    "product_cat4_01_val2": { th: "4 x 4 นิ้ว", en: "4 x 4 inches" },
    "product_cat4_01_val3": { th: "ใช้ผ้าชุบน้ำเช็ด ห้ามเข้าเครื่องล้างจาน", en: "Wipe with damp cloth, not dishwasher safe." },

    "product_cat4_02_name": { th: "หวีเรซิ่น", en: "Resin Comb" },
    "product_cat4_02_desc": { th: "หวีพกพา ด้ามจับเรซิ่นดอกไม้แห้ง สวยไม่ซ้ำใคร", en: "A unique portable comb with a dried flower resin handle." },
    "product_cat4_02_val1": { th: "เรซิ่น, พลาสติก", en: "Resin, Plastic" },
    "product_cat4_02_val2": { th: "ยาว 6 นิ้ว", en: "6 inches long" },
    "product_cat4_02_val3": { th: "ล้างน้ำได้", en: "Washable." },

    "product_cat4_03_name": { th: "จานรองเครื่องประดับ", en: "Jewelry Dish" },
    "product_cat4_03_desc": { th: "จานรองรูปเปลือกหอย ทำจากเรซิ่น สำหรับวางแหวน ต่างหู", en: "A shell-shaped resin dish for holding rings and earrings." },
    "product_cat4_03_val1": { th: "เรซิ่น", en: "Resin" },
    "product_cat4_03_val2": { th: "5 x 5 นิ้ว", en: "5 x 5 inches" },
    "product_cat4_03_val3": { th: "ใช้ผ้านุ่มเช็ดทำความสะอาด", en: "Wipe clean with a soft cloth." },

    "product_cat4_04_name": { th: "โคมไฟเรซิ่น", en: "Resin Lamp" },
    "product_cat4_04_desc": { th: "โคมไฟตั้งโต๊ะ ฐานไม้ ตัวครอบเรซิ่น แสงไฟนุ่มนวล", en: "A table lamp with a wooden base and resin cover, giving a soft light." },
    "product_cat4_04_val1": { th: "เรซิ่น, ไม้, ไฟ LED (USB)", en: "Resin, Wood, LED Light (USB)" },
    "product_cat4_04_val2": { th: "สูง 6 นิ้ว", en: "6 inches tall" },
    "product_cat4_04_val3": { th: "ใช้ผ้าแห้งเช็ด", en: "Wipe with a dry cloth." },

    "product_cat4_05_name": { th: "ที่ทับกระดาษ", en: "Paperweight" },
    "product_cat4_05_desc": { th: "ที่ทับกระดาษเรซิ่นทรงโดม ใสเห็นดอกไม้ภายใน", en: "A dome-shaped resin paperweight with visible flowers inside." },
    "product_cat4_05_val1": { th: "เรซิ่น, ดอกไม้แห้ง", en: "Resin, Dried Flowers" },
    "product_cat4_05_val2": { th: "สูง 2 นิ้ว", en: "2 inches tall" },
    "product_cat4_05_val3": { th: "ระวังการตกกระแทก", en: "Avoid dropping." },

    "product_cat4_06_name": { th: "ปิ่นปักผมเรซิ่น", en: "Resin Hairpin" },
    "product_cat4_06_desc": { th: "ปิ่นปักผมสไตล์จีน ตกแต่งด้วยเรซิ่นและพู่ห้อย", en: "A Chinese-style hairpin decorated with resin and tassels." },
    "product_cat4_06_val1": { th: "เรซิ่น, โลหะ", en: "Resin, Metal" },
    "product_cat4_06_val2": { th: "ยาว 7 นิ้ว", en: "7 inches long" },
    "product_cat4_06_val3": { th: "เก็บในที่แห้ง", en: "Store in a dry place." },

    // --- (CAT 5: พวงกุญแจ) ---
    "product_cat5_01_name": { th: "พวงกุญแจเรซิ่น", en: "Resin Keychain" },
    "product_cat5_01_desc": { th: "พวงกุญแจตัวอักษรเรซิ่นใส ใส่ดอกไม้แห้ง สามารถเลือกตัวอักษรได้", en: "Clear resin letter keychain with dried flowers. Customizable letter." },
    "product_cat5_01_val1": { th: "เรซิ่น", en: "Resin" },
    "product_cat5_01_val2": { th: "สูง 2 นิ้ว", en: "2 inches tall" },
    "product_cat5_01_val3": { th: "ใช้ผ้านุ่มเช็ด", en: "Wipe with a soft cloth." },

    "product_cat5_02_name": { th: "พวงกุญแจถัก", en: "Knitted Keychain" },
    "product_cat5_02_desc": { th: "พวงกุญแจรูปดอกไม้ถักไหมพรม น่ารักสดใส", en: "A cute and bright knitted flower keychain." },
    "product_cat5_02_val1": { th: "ไหมพรม", en: "Yarn" },
    "product_cat5_02_val2": { th: "3 x 3 นิ้ว", en: "3 x 3 inches" },
    "product_cat5_02_val3": { th: "ซักมือเบาๆ", en: "Hand wash gently." },

    "product_cat5_03_name": { th: "พวงกุญแจลูกปัด", en: "Bead Keychain" },
    "product_cat5_03_desc": { th: "พวงกุญแจร้อยลูกปัดสีพาสเทล ห้อยกระเป๋าน่ารักๆ", en: "Pastel bead keychain, perfect for bags." },
    "product_cat5_03_val1": { th: "ลูกปัด, เอ็น", en: "Beads, String" },
    "product_cat5_03_val2": { th: "ยาว 4 นิ้ว", en: "4 inches long" },
    "product_cat5_03_val3": { th: "หลีกเลี่ยงการดึงแรงๆ", en: "Avoid pulling hard." },

    "product_cat5_04_name": { th: "พวงกุญแจหนัง", en: "Leather Keychain" },
    "product_cat5_04_desc": { th: "พวงกุญแจหนังแท้ ตอกชื่อได้ เหมาะสำหรับเป็นของขวัญ", en: "Genuine leather keychain, can be stamped with a name. Great gift." },
    "product_cat5_04_val1": { th: "หนังแท้", en: "Genuine Leather" },
    "product_cat5_04_val2": { th: "1 x 3 นิ้ว", en: "1 x 3 inches" },
    "product_cat5_04_val3": { th: "ใช้ครีมบำรุงหนังเช็ด", en: "Wipe with leather conditioner." },

    "product_cat5_05_name": { th: "พวงกุญแจผ้า", en: "Fabric Keychain" },
    "product_cat5_05_desc": { th: "พวงกุญแจตุ๊กตาผ้าสักหลาด รูปสัตว์ต่างๆ", en: "Felt fabric doll keychain, various animal shapes." },
    "product_cat5_05_val1": { th: "ผ้าสักหลาด, ใยสังเคราะห์", en: "Felt, Synthetic Fiber" },
    "product_cat5_05_val2": { th: "3 x 3 นิ้ว", en: "3 x 3 inches" },
    "product_cat5_05_val3": { th: "ซักมือเบาๆ", en: "Hand wash gently." },

    "product_cat5_06_name": { th: "พวงกุญแจไม้", en: "Wood Keychain" },
    "product_cat5_06_desc": { th: "พวงกุญแจไม้แกะสลัก สามารถเลเซอร์ชื่อหรือโลโก้ได้", en: "Carved wood keychain, can be laser engraved with name or logo." },
    "product_cat5_06_val1": { th: "ไม้", en: "Wood" },
    "product_cat5_06_val2": { th: "2 x 2 นิ้ว", en: "2 x 2 inches" },
    "product_cat5_06_val3": { th: "ใช้ผ้าแห้งเช็ด", en: "Wipe with a dry cloth." },

    // --- (CAT 6: สมุดโน้ต) ---
    "product_cat6_01_name": { th: "สมุดโน้ตปกผ้า", en: "Fabric Cover Notebook" },
    "product_cat6_01_desc": { th: "สมุดโน้ตปกผ้าปักลายวินเทจ สันปกเย็บมืออย่างดี", en: "Vintage embroidered fabric cover notebook, well hand-stitched." },
    "product_cat6_01_val1": { th: "ผ้าปัก, กระดาษถนอมสายตา", en: "Embroidery Fabric, Eye-care Paper" },
    "product_cat6_01_val2": { th: "A5", en: "A5" },
    "product_cat6_01_val3": { th: "เก็บให้พ้นจากความชื้น", en: "Keep away from moisture." },

    "product_cat6_02_name": { th: "สมุดปกหนัง", en: "Leather Cover Notebook" },
    "product_cat6_02_desc": { th: "สมุดไดอารี่ปกหนังแท้ พร้อมสายรัดคลาสสิก", en: "Genuine leather cover diary with a classic strap." },
    "product_cat6_02_val1": { th: "หนังแท้, กระดาษถนอมสายตา", en: "Genuine Leather, Eye-care Paper" },
    "product_cat6_02_val2": { th: "A5", en: "A5" },
    "product_cat6_02_val3": { th: "ใช้ครีมบำรุงหนังเช็ด", en: "Wipe with leather conditioner." },

    "product_cat6_03_name": { th: "สมุดปกไม้", en: "Wood Cover Notebook" },
    "product_cat6_03_desc": { th: "สมุดโน้ตปกไม้ สลักชื่อได้ เหมาะเป็นของขวัญ", en: "Wood cover notebook, can be engraved. Great as a gift." },
    "product_cat6_03_val1": { th: "ไม้, กระดาษ", en: "Wood, Paper" },
    "product_cat6_03_val2": { th: "A5", en: "A5" },
    "product_cat6_03_val3": { th: "ระวังไม่ให้โดนน้ำ", en: "Avoid contact with water." },

    "product_cat6_04_name": { th: "สมุดเย็บมือ", en: "Hand-stitched Notebook" },
    "product_cat6_04_desc": { th: "สมุดโน้ตเย็บสัน สไตล์ญี่ปุ่น ปกกระดาษคราฟต์", en: "Japanese-style stitched notebook with a kraft paper cover." },
    "product_cat6_04_val1": { th: "กระดาษคราฟต์, กระดาษถนอมสายตา", en: "Kraft Paper, Eye-care Paper" },
    "product_cat6_04_val2": { th: "B6", en: "B6" },
    "product_cat6_04_val3": { th: "เก็บในที่แห้ง", en: "Store in a dry place." },

    "product_cat6_05_name": { th: "สมุดวาดเขียน", en: "Sketchbook" },
    "product_cat6_05_desc": { th: "สมุดวาดเขียน ปกแข็ง กระดาษ 100 ปอนด์", en: "Hardcover sketchbook with 100 lb. paper." },
    "product_cat6_05_val1": { th: "กระดาษ 100 ปอนด์", en: "100 lb. Paper" },
    "product_cat6_05_val2": { th: "A4", en: "A4" },
    "product_cat6_05_val3": { th: "เก็บในที่แห้ง", en: "Store in a dry place." },

    "product_cat6_06_name": { th: "สมุดปกกระดาษสา", en: "Mulberry Paper Notebook" },
    "product_cat6_06_desc": { th: "สมุดโน้ตปกกระดาษสา แต่งดอกไม้แห้ง สวยงาม", en: "Beautiful notebook with a mulberry paper cover decorated with dried flowers." },
    "product_cat6_06_val1": { th: "กระดาษสา, ดอกไม้แห้ง", en: "Mulberry Paper, Dried Flowers" },
    "product_cat6_06_val2": { th: "A6", en: "A6" },
    "product_cat6_06_val3": { th: "เก็บในที่แห้ง", en: "Store in a dry place." },

    // --- (CAT 7: ของตกแต่ง) ---
    "product_cat7_01_name": { th: "โมบายแขวน", en: "Hanging Mobile" },
    "product_cat7_01_desc": { th: "โมบายเปลือกหอย สำหรับแขวนหน้าต่างหรือระเบียง", en: "Seashell mobile, perfect for windows or balconies." },
    "product_cat7_01_val1": { th: "เปลือกหอย, เชือก, ไม้", en: "Seashells, String, Wood" },
    "product_cat7_01_val2": { th: "ยาว 20 นิ้ว", en: "20 inches long" },
    "product_cat7_01_val3": { th: "ปัดฝุ่นเบาๆ", en: "Dust lightly." },

    "product_cat7_02_name": { th: "ที่ดักฝัน", en: "Dreamcatcher" },
    "product_cat7_02_desc": { th: "ที่ดักฝัน (Dreamcatcher) ถักเชือก ตกแต่งขนนก", en: "Woven dreamcatcher decorated with feathers." },
    "product_cat7_02_val1": { th: "เชือก, ขนนก, ลูกปัด", en: "String, Feathers, Beads" },
    "product_cat7_02_val2": { th: "วงกลม 8 นิ้ว", en: "8 inch diameter" },
    "product_cat7_02_val3": { th: "ปัดฝุ่น", en: "Dust." },

    "product_cat7_03_name": { th: "เทียนหอม", en: "Scented Candle" },
    "product_cat7_03_desc": { th: "เทียนหอม Soy Wax กลิ่น Lavender ในถ้วยเซรามิก", en: "Lavender scented soy wax candle in a ceramic cup." },
    "product_cat7_03_val1": { th: "Soy Wax, เซรามิก, น้ำมันหอมระเหย", en: "Soy Wax, Ceramic, Essential Oil" },
    "product_cat7_03_val2": { th: "8 oz", en: "8 oz" },
    "product_cat7_03_val3": { th: "จุดในที่โล่ง, ตัดไส้เทียนก่อนจุดทุกครั้ง", en: "Burn in open area, trim wick before each use." },

    "product_cat7_04_name": { th: "กระถางต้นไม้", en: "Flower Pot" },
    "product_cat7_04_desc": { th: "กระถางเซรามิกเพ้นท์ลาย ทำมือ สำหรับต้นไม้เล็ก", en: "Hand-painted ceramic pot for small plants." },
    "product_cat7_04_val1": { th: "เซรามิก", en: "Ceramic" },
    "product_cat7_04_val2": { th: "4 x 4 นิ้ว", en: "4 x 4 inches" },
    "product_cat7_04_val3": { th: "ล้างทำความสะอาดได้", en: "Washable." },

    "product_cat7_05_name": { th: "ภาพวาดสีน้ำ", en: "Watercolor Painting" },
    "product_cat7_05_desc": { th: "ภาพวาดสีน้ำขนาดเล็ก รูปดอกไม้ พร้อมกรอบไม้", en: "Small watercolor painting of flowers, comes with a wooden frame." },
    "product_cat7_05_val1": { th: "สีน้ำ, กระดาษ, กรอบไม้", en: "Watercolor, Paper, Wood Frame" },
    "product_cat7_05_val2": { th: "5 x 7 นิ้ว (รวมกรอบ)", en: "5 x 7 inches (including frame)" },
    "product_cat7_05_val3": { th: "หลีกเลี่ยงแสงแดดโดยตรง", en: "Avoid direct sunlight." },

    "product_cat7_06_name": { th: "ผ้าปักผนัง", en: "Wall Tapestry" },
    "product_cat7_06_desc": { th: "ผ้าปักลายแขวนผนัง สไตล์โบฮีเมียน ใช้ตกแต่งห้อง", en: "Bohemian style embroidered wall tapestry for room decor." },
    "product_cat7_06_val1": { th: "ผ้า, เชือก, ไม้", en: "Fabric, String, Wood" },
    "product_cat7_06_val2": { th: "20 x 30 นิ้ว", en: "20 x 30 inches" },
    "product_cat7_06_val3": { th: "ปัดฝุ่น", en: "Dust." }
};