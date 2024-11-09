
# Angular E-commerce Website

An e-commerce web application built using Angular for the frontend, Node.js/Express for the backend, and MongoDB as the database. This project offers a seamless shopping experience with modern design and comprehensive product management.

## 🛠️ Features

- User authentication and authorization (Login, Registration)
- Product listing with search, sort, and filter options
- Shopping cart, wishlist, and order management
- Secure payment gateway integration (e.g., Stripe/PayPal)
- Admin panel for managing products, categories, and orders
- Responsive design for desktop and mobile devices

## 🚀 Technologies Used

### Frontend:
- **Angular**: Frontend framework
- **TypeScript**: Strongly typed JavaScript
- **HTML/CSS/SCSS**: Frontend design and styling
- **Bootstrap**: Responsive UI components

### Backend:
- **Node.js**: JavaScript runtime for server-side code
- **Express.js**: Web framework for building REST APIs
- **MongoDB**: NoSQL database for storing product and user data
- **Mongoose**: ODM for MongoDB

## 📦 Installation

### Prerequisites

- Node.js 14+
- Angular CLI
- MongoDB (Local or MongoDB Atlas)
- Git

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rithvik23-root/Angular-E-commerce-website.git
   cd Angular-E-commerce-website
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Set up the backend:**
   - Navigate to the backend folder (if your project has a separate folder for the backend).
   ```bash
   cd backend
   npm install
   ```

4. **Configure MongoDB:**
   - Create a `.env` file in the backend folder with the following content:
     ```
     MONGODB_URI=mongodb://localhost:27017/ecommerce_db
     JWT_SECRET=your_secret_key
     PORT=5000
     ```

5. **Run migrations and seed the database (if applicable):**
   ```bash
   npm run seed
   ```

6. **Start the backend server:**
   ```bash
   npm start
   ```

7. **Start the frontend server:**
   - Open a new terminal in the project root folder and run:
   ```bash
   ng serve
   ```

8. **Open your browser and visit:**
   ```
   Frontend: http://localhost:4200/
   Backend API: http://localhost:5000/
   ```

## 📚 API Endpoints

### Authentication:
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Products:
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Add a new product (Admin only)

### Orders:
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create a new order

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 💬 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 🛡️ Security

If you find any security issues, please report them directly to the repository owner.



