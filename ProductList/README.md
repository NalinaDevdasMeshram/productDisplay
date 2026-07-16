# Product Listing Application

## Overview

This project is a responsive product listing application built with **Next.js**, **React.js**, and **Bootstrap**. It fetches product data from the Fake Store API using **Server-Side Rendering (SSR)** with `getServerSideProps`.

Users can browse products, search products by title, and view important product information in a clean, responsive layout.

---

## Features

- Server-side rendering using `getServerSideProps`
- Fetch product data from Fake Store API
- Responsive UI using Bootstrap grid system
- Product cards displaying:
  - Product image
  - Product title
  - Product price
  - Product category
  - Product rating

- Client-side search functionality
- Loading spinner during filtering
- Mobile-friendly design

---

## Tech Stack

- React.js
- Next.js
- Bootstrap 5
- Fetch API (or Axios)

---

## API Used

Fake Store API:

`https://fakestoreapi.com/products`

---

## Project Structure

```text
product-listing-app/
│
├── pages/
│   ├── _app.js
│   └── index.js
│
├── components/
│   ├── SearchBar.js
│   ├── ProductCard.js
│   └── Loader.js
│
├── styles/
│   └── globals.css
│
├── public/
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd product-listing-app
```

Install dependencies:

```bash
npm install
```

---

## Install Required Packages

Using npm:

```bash
npm install bootstrap axios
```

Or using yarn:

```bash
yarn add bootstrap axios
```

---

## Running the Development Server

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

in your browser.

---

## Server-Side Data Fetching

The application uses Next.js SSR through:

```javascript
export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
```

This ensures that product data is fetched on the server before rendering the page.

---

## Product Card Information

Each product card displays:

- Product image
- Product title
- Price
- Category
- Rating (rate and count)

Example:

```javascript
{
  id: 1,
  title: "Product Name",
  price: 109.95,
  category: "electronics",
  rating: {
    rate: 3.9,
    count: 120
  }
}
```

---

## Search Functionality

- A search bar is available at the top of the page.
- Products are filtered on the client side.
- Search works by matching the product title.
- A loading spinner is displayed while filtering results.

Example:

```javascript
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase()),
);
```

---

## Responsive Design

Bootstrap grid classes are used to ensure responsiveness:

```jsx
<div className="row">
  {products.map((product) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
      <ProductCard product={product} />
    </div>
  ))}
</div>
```

---

## Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
npm run dev
```

## Future Enhancements

- Category filtering
- Pagination
- Sorting by price
- Product details page
- Wishlist functionality

---

## Author

Developed using React.js,Bootstrap, and Fake Store API.
