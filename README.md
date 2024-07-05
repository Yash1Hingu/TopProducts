
# 🌟 TopProducts React Application

## Overview

TopProducts is a responsive React web application designed to display the top N products. The application provides two main pages: one for presenting all the products and another for spotlighting a specific product. It offers detailed information for each product, including the name, company, category, price, rating, discount, and availability.

The project integrates with backend APIs provided by [json-server.bytexl.app](https://json-server.bytexl.app/products) and uses the MUI (Material-UI) library for styling.

## ✨ Features

- 🛍️ Display a list of all products with detailed information.
- 🔍 Spotlight a specific product with detailed information.
- 🗂️ Filter products based on category, e-commerce company, rating, price range, and availability.
- 📊 Sort products by price, rating, discount.
- 📄 Pagination for smooth navigation.
- 🖼️ Random assortment of images as product images.
- 📱 Responsive design with user-friendly UI.

## 🛠️ Technologies Used

- ⚛️ React ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
- 🔄 React Router ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)
- 📦 Axios ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)
- 🎨 MUI (Material-UI) ![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)

- 📜 JavaScript ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Getting Started

### Prerequisites

- 🖥️ Node.js ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- 📦 npm (Node Package Manager) ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)
### Installation

## 📁 Project Structure

```
TopProducts/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ProductDetail.js
│   │   ├── AllProductsPage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## 🌐 API Integration

The application integrates with the backend APIs available at [json-server.bytexl.app](https://json-server.bytexl.app/products).

### Example API Calls

- Fetch all products:
    ```javascript
    axios.get('https://json-server.bytexl.app/products')
    ```

## 🎨 Styling

The application uses the MUI (Material-UI) library for styling. MUI provides a robust, customizable, and accessible library of components, making it easier to build a responsive and user-friendly UI.
