# Product API (https://productmanagementsystem-4y6q.onrender.com)

## Overview
This is a simple RESTful API for managing products. It provides functionality to create, read, update, delete, search, filter, and sort products.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Abdul-Samad-75/ProductManagementSystem.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB connection URL:
   ```env
   DB_URL=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/yourdbname
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run at `http://localhost:5000`

## API Endpoints
### Base URL: `/api`

### 1. Create a Product
- **Endpoint:** `POST /api/products`
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "description": "Product Description"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Product created successfully",
    "Product": { ... }
  }
  ```

### 2. Get All Products
- **Endpoint:** `GET /api/products`
- **Response:**
  ```json
  {
    "msg": "All Products",
    "Products": [ ... ]
  }
  ```

### 3. Search Products
- **Endpoint:** `GET /api/products/search?name=example&description=sample`
- **Response:**
  ```json
  {
    "msg": "Found searched products",
    "Products": [ ... ]
  }
  ```

### 4. Sort Products
- **Endpoint:** `GET /api/products/sortBy?sortField=price&sortOrder=asc&page=1&limit=10`
- **Response:**
  ```json
  {
    "msg": "Sorted Products by price",
    "Products": [ ... ]
  }
  ```

### 5. Filter Products by Price
- **Endpoint:** `GET /api/products/filter?price=100`
- **Response:**
  ```json
  {
    "msg": "Found filtered products",
    "Products": [ ... ]
  }
  ```

### 6. Update a Product
- **Endpoint:** `PUT /api/product/:id`
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "price": 200,
    "description": "Updated Description"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Product updated",
    "Product": { ... }
  }
  ```

### 7. Delete a Product
- **Endpoint:** `DELETE /api/product/:id`
- **Response:**
  ```json
  {
    "msg": "Product Deleted Successfully",
    "Product": { ... }
  }
  ```

## License
This project is licensed under the MIT License.

