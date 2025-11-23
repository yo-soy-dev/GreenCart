# GREENCART - 🛒 Grocery Delivery Website (MERN Stack + Tailwind + Stripe)

A full-stack **Grocery Delivery Web Application** built using **MongoDB, Express, React, Node.js**, styled with **Tailwind CSS**, integrated with **Stripe Payment Gateway**, and deployed online for **free**.

This project includes:

* Customer-side grocery store
* Seller/Admin panel to upload products
* Secure online payments using Stripe
* Fully functional backend API
* Free deployment (Frontend + Backend + Database)

---

## 🚀 Features

### **Frontend (React + Tailwind CSS)**

* Modern UI with Tailwind CSS
* Product listing page
* Product details page
* Cart functionality (Add/Remove items)
* User authentication (Signup/Login)
* Online ordering with Stripe checkout
* Fully responsive design
* Admin product upload panel

---

## 🧰 Tech Stack

### **Frontend**

* React JS
* Tailwind CSS
* React Router
* Axios

### **Backend**

* Node JS
* Express JS
* MongoDB + Mongoose
* Stripe Payment API
* JWT Authentication
* Multer for image upload

### **Deployment**

* Frontend → Vercel / Netlify
* Backend → Render / Railway
* Database → MongoDB Atlas

---

## 📦 Project Structure

```
grocery-app/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node + Express Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🧑‍💻 Installation & Setup

### **1. Clone the Repo**

```bash
git clone https://github.com/your-username/grocery-delivery-mern.git
cd grocery-delivery-mern
```

---

# ⚛️ Frontend Setup (React + Tailwind)

```
cd client
npm install
npm run dev
```

### Tailwind Setup

If needed:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Free UI Components: **[https://prebuiltui.com](https://prebuiltui.com)**

---

# 🖥 Backend Setup (Express + MongoDB)

```
cd server
npm install
npm start
```

Create a `.env` file:

```
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_key
CLIENT_URL=http://localhost:5173
```

---

## 🧾 API Endpoints

### **User**

| Method | Endpoint           | Description |
| ------ | ------------------ | ----------- |
| POST   | /api/auth/register | Create User |
| POST   | /api/auth/login    | Login User  |

### **Products**

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | /api/products/add | Add product (Admin) |
| GET    | /api/products     | Get all products    |
| GET    | /api/products/:id | Get single product  |

### **Payment (Stripe)**

| Method | Endpoint                             | Description            |
| ------ | ------------------------------------ | ---------------------- |
| POST   | /api/payment/create-checkout-session | Create Stripe checkout |

---

## 💳 Stripe Payment Integration

### **Frontend Example:**

```js
const response = await axios.post('/api/payment/create-checkout-session', {
  items: cartItems,
});
window.location.href = response.data.url;
```

### **Backend Example:**

```js
const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  line_items,
  mode: "payment",
  success_url: `${CLIENT_URL}/success`,
  cancel_url: `${CLIENT_URL}/cancel`,
});
```

---

## 📤 Deployment Instructions

### **Frontend — Vercel**

1. Upload `/client` folder
2. Add environment variables
3. Deploy

### **Backend — Render/Railway**

1. Upload `/server` folder
2. Add environment variables
3. Deploy

### **Database — MongoDB Atlas**

1. Create free cluster
2. Whitelist IP
3. Add connection string to `.env`

---

## 🛠 Admin / Seller Dashboard

Admins can:

* Upload grocery products
* Manage inventory
* Upload images
* View orders (optional)

---

## 🤝 Contributing

Pull requests are welcome. Feel free to improve the project.

---

## 📄 License

MIT License

