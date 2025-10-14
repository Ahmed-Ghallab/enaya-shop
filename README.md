# 🛍️ Enaya – Modern Skincare E-Commerce Platform

> A fully responsive and multilingual skincare e-commerce website built with **React**, **Vite**, and **Tailwind CSS**, integrated with **Strapi** backend for content management and product data.

---

## 🌸 Overview

**Enaya** is a modern, feature-rich e-commerce platform focused on skincare and beauty products.  
It delivers a seamless shopping experience with elegant UI, smart state management, and bilingual support (Arabic & English).

---

## ⚙️ Tech Stack

### **Frontend**
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS, animate.css, styled-components, Framer Motion, classnames
- **Routing:** React Router DOM
- **State Management:** Zustand
- **Internationalization:** i18next, react-i18next, i18next-browser-languagedetector
- **Notifications & Alerts:** react-toastify, sweetalert2
- **HTTP Client:** Axios
- **UI Enhancements:** Swiper, React Icons
- **Linting & Type Safety:** ESLint, @eslint/js, globals, @types/react, @types/react-dom

### **Backend**
- **Headless CMS:** Strapi  
  (Already installed and connected, currently running without populated data)

---

## 🧱 Project Structure

```
public/
  vite.svg

src/
  App.jsx
  App.css
  i18n.js
  index.css
  main.jsx

  api/
    auth.js
    cart.js
    products.js
    services.js

  assets/
    (images, brand logos, home banners, product visuals...)

  components/
    common/
      CartIcon/
      LanguageSwitcher/
      LiveSearch/
      ShopNowButton/
      SocialIcons/
      UserMenu/
    layout/
      Header.jsx
      Footer.jsx
      HeroSection.jsx
      BigSaleBanner.jsx
      SalesBanners.jsx
      BrandsSlider.jsx
      CareCategories.jsx
      EnayaFeatures.jsx
      BottomNav.jsx
      HomeSections/
        DealsSection.jsx
        ProductCard.jsx
        ProductGrid.jsx
        QuickViewModal.jsx
        ShopCollection.jsx
        TrendingNewArrivals.jsx
    ui/

  data/
    cartStore.js
    deliveryFees.js
    productsData.js

  layouts/
    MainLayout.jsx
    AuthLayout.jsx

  locales/
    en.json
    ar.json

  pages/
    AboutPage/
    AccountPage/
    Auth/
      LoginPage/
      RegisterPage/
      ForgotPasswordPage/
      LogoutPage/
    CartPage/
    CategoriesPage/
    CheckoutPage/
    ContactPage/
    FAQPage/
    HomePage/
    OrderSuccessPage/
    PrivacyPolicyPage/
    ProductPage/
    RefundPolicyPage/
    ShopPage/
    TermsOfServicePage/
    WishlistPage/

  routes/
    AppRoutes.jsx

  store/
    authStore.js
    cartStore.js
    productStore.js
    wishlistStore.js

  utils/
```

---

## ✨ Key Features

- 🏠 **Dynamic Home Page:** banners, sliders, trending sections, and product grids  
- 🛍️ **Product Management:** product listing, quick view modal, and detailed product pages  
- 🧾 **Cart & Wishlist:** real-time state management with visual indicators  
- 🧑‍💻 **User Authentication:** login, register, logout, and account page  
- 💳 **Checkout Process:** step-based checkout with delivery fee calculations  
- 🌐 **Bilingual Interface:** Arabic and English via i18next  
- 🔍 **Smart Search:** live product search bar  
- 📱 **Responsive Design:** fully optimized for mobile and desktop  
- ⚡ **Optimized Performance:** built using Vite for fast development and builds  
- 📢 **Toasts & Alerts:** modern notifications using react-toastify and SweetAlert2  
- 🧠 **Clean Architecture:** organized folder structure and reusable components  
- 💅 **Modern Animations:** smooth transitions powered by Framer Motion

---

## 🧭 Future Plans

- 📦 Populate Strapi with real product data  
- 🔐 Add JWT authentication integrated with Strapi  
- 💰 Integrate real payment gateways (Stripe / Paymob)  
- 🧾 Add order tracking & invoice pages  
- 📊 Admin dashboard for analytics and order management  
- 🔍 Advanced filtering and sorting options  
- 📬 Newsletter subscription feature  
- 🚀 Deploy on production (Vercel for frontend + Render for Strapi)

---

## 🖼️ Project Logo
> (Place the logo here once selected)  
> Example:  
> `![Enaya Logo](src/assets/newlogo.jpeg)`

---

## 📄 License & Ownership

© 2025 **Ahmed Ghallab** – All Rights Reserved.  
This project is created and owned exclusively by **Ahmed Ghallab**.  
Unauthorized use, reproduction, or distribution is prohibited.

---

## 💌 Contact

**Developer:** Ahmed Ghallab  
**Role:** Front-End Developer  
**GitHub:** [Ahmed-Ghallab](https://github.com/Ahmed-Ghallab)  
**LinkedIn:** [Ahmed Ghallab](https://www.linkedin.com/in/ahmedghallab22/)  
**Email:** *[ahghallab1@gmail.com]*

---
