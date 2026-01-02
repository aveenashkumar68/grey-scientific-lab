# Product Management App

A **React-based Product Management application** that allows users to **view, add, edit, search, and paginate products**. The app provides a clean and responsive UI using **Tailwind CSS** and is fully **frontend-driven** (no backend required).

---

## 🏆 Features

1. **Product List & Grid View**
   - View products in **table (list) view** or **card (grid) view**
   - Toggle between views easily

2. **Search Functionality**
   - Real-time search by product name
   - Debounced input (500ms) to improve performance

3. **Add & Edit Products**
   - Add new products with **Name, Price, Category, Stock, Description**
   - Edit existing products with form pre-filled
   - Form validation with clear inline **error messages**

4. **Pagination**
   - Paginate product list for better UX
   - Works with search results
   - Page resets on new search

5. **Responsive Design**
   - Works on **mobile, tablet, and desktop**
   - Grid layout adjusts to screen size
   - Table supports horizontal scroll on small screens

6. **UX Enhancements**
   - Empty states when no products found
   - Hover effects on cards and buttons
   - Smooth transitions for interactive elements

---

## 📂 Folder Structure

src/
├─ App.jsx
├─ data/
│ └─ initialProducts.js
├─ hooks/
│ └─ useDebounce.js
├─ utils/
│ ├─ paginate.js
│ └─ validateProduct.js
└─ components/
├─ Header/
│ └─ Header.jsx
├─ Pagination/
│ └─ Pagination.jsx
└─ Product/
├─ ProductForm/
│ └─ ProductForm.jsx
├─ ProductList.jsx
├─ ProductGrid.jsx
└─ ProductCard.jsx


---

## ⚡ Technologies Used

- **React** — Frontend library
- **Tailwind CSS** — Styling and responsive design
- **JavaScript** — App logic
- **Custom hooks & utils** — Debounce, Pagination, Validation
- **In-memory data storage** — No backend needed

---

## 🚀 Getting Started

### 1. Clone the repository

git clone <your-repo-url>
cd <project-folder>

2. Install dependencies
npm install

3. Start the development server
npm start


The app will run at http://localhost:3000

🛠 Usage

View Products

Toggle between list view and grid view using the button at the top.

Search Products

Start typing a product name in the search bar.

Results update after 500ms debounce.

Add a Product

Click Add Product

Fill in Name, Price, Category (required)

Optional: Stock, Description

Click Save to add it.

Edit a Product

Click Edit on any product (table or card)

Update the fields and save

Form pre-fills with the product data

Pagination

Products are paginated (5 per page)

Navigate pages using Prev / Next / page numbers

Works seamlessly with search results

✅ Validation Rules
Field	Rule
Name	Required
Price	Required, must be positive number
Category	Required
Stock	Optional, must be number if filled
Description	Optional
📐 UI & UX

Responsive across all devices

Hover effects on buttons and cards

Clear inline error messages

Friendly empty states when no products found

👩‍💻 Author
Aveenash Kumar
Frontend Development | React & Tailwind CSS
