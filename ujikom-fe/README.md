# 📌 React Project - Seventeen Kpop Merchandise Store (CARATEEN) 

## 📚 Introduction
This is a React-based project that focuses on buying and selling Seventeen merchandise. It utilizes React Router for navigation and Axios for API requests. The project includes pages for user registration, product listing, and order management. The backend is built using Express.js with JWT for authentication.

## 🚀 Features
- 🌐 **React Router** for navigation
- 🔄 **Axios** for API interactions
- 📝 **User Registration** form with validation
- 👜 **Merchandise Listing** page
- 🛍️ **Order Management System**
- 🔒 **JWT Authentication** for secure access
- 🛠 **Express.js Backend** for handling API requests

## 💂 Project Structure
📁 src/
 ├── 📁 components/       # Reusable React components
 ├── 📁 pages/            # Page components (Registration, Merchandise, Orders, etc.)
 ├── 📁 api/              # API service functions (Axios-based CRUD operations)
 ├── 📁 routes/           # React Router configuration
 ├── 📁 assets/           # Static assets (images, icons, etc.)
 ├── App.js              # Main React component
 ├── index.js            # Entry point of the application

📁 backend/
 ├── 📁 controllers/      # API route controllers
 ├── 📁 models/           # Database models
 ├── 📁 routes/           # Express route handlers
 ├── 📁 middleware/       # JWT authentication middleware
 ├── 📁 config/           # Configuration files (e.g., database, JWT secret)
 ├── index.js          # Main Express.js server file

## ⚡ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/kpop-merch-store.git
   ```
2. Navigate to the project folder:
   ```sh
   cd kpop-merch-store
   ```
3. Install frontend dependencies:
   ```sh
   npm install
   ```
4. Start the frontend development server:
   ```sh
   npm start
   ```
5. Navigate to the backend folder:
   ```sh
   cd backend
   ```
6. Install backend dependencies:
   ```sh
   npm install
   ```
7. Start the backend server:
   ```sh
   node server.js
   ```

## 🔗 API Configuration
This project uses Axios for API calls. Make sure to configure your `.env` file:
```
REACT_APP_API_BASE_URL=https://your-api-url.com
JWT_SECRET=your_jwt_secret_key
```
Modify `api.js` in the `src/api/` directory to use this base URL.

## 📌 Usage
- Navigate through the app using the provided navbar (except on the login page, where the navbar is hidden).
- Register users through the **login** page.
- View the available merchandise in the **Merchandise** page.
- Manage orders in the **Order Management** page.
- Authenticate users securely using JWT.

## 🛠️ Tech Stack
- **React.js** - Frontend framework
- **React Router** - Client-side navigation
- **Axios** - HTTP requests
- **Mantine UI**  - Styling
- **Express.js** - Backend framework
- **JWT** - Authentication mechanism
- **MySQL - Laragon**  - Database for storing user and order data

## 👥 Contributors
- [Roro Primanisaa Anugerah Rahmawati](https://github.com/ahjinjja-clo)



