# 🛒 বাজার দর | BazarDor

**Your Everyday Market Price Companion**

[![Live Website](https://img.shields.io/badge/Live-Visit%20Website-16a34a?style=for-the-badge)](https://bazar-dor-delta.vercel.app/)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/mehedilabs/bazar-dor)

**BazarDor (বাজার দর)** is a responsive market price web application that helps users explore the latest prices of everyday essentials in Bangladesh. Users can browse products by category, compare market prices, track price changes, sort products by price, and view detailed pricing information through a clean and user-friendly interface.

## ✨ Key Features

- **📊 Market Price Tracking:** Explore the latest available prices of essential products, including rice, lentils, oil, vegetables, fish, meat, eggs, and spices.
- **📈 Price Change Ticker:** View a continuously scrolling ticker showing product names, current prices, units, and percentage changes.
- **🔺 Rising & Falling Prices:** Discover products with increasing and decreasing prices in dedicated sections on the homepage.
- **🛍️ Product Details:** View product information, minimum price, maximum price, average price, and market-wise price comparisons.
- **📂 Category Browsing:** Browse products by category and explore category-specific product listings.
- **↕️ Smart Price Sorting:** Sort products by default order, lowest price first, or highest price first.
- **🔐 Authentication:** Sign in and register using Better Auth, with email/password and Google/GitHub social authentication options.
- **👤 Profile Management:** Access profile information and update the user's name.
- **📱 Fully Responsive Design:** Enjoy a responsive interface across mobile phones, tablets, and desktop screens.
- **⏳ Loading & Empty States:** Display loading skeletons while data is being fetched and helpful messages when no products are available.
- **🔔 Toast Notifications:** Receive relevant feedback for authentication, validation, and other user interactions.
- **🚀 Production Deployment:** Deployed on Vercel for online access.

## 🧰 Technologies Used

| Technology         | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| Next.js            | Application framework and server rendering        |
| Next.js App Router | File-based routing and page navigation            |
| React              | Building reusable UI components                   |
| TypeScript         | Type safety and maintainable code                 |
| Tailwind CSS       | Styling and responsive layouts                    |
| DaisyUI            | Prebuilt UI components and styling utilities      |
| Better Auth        | Authentication and session management             |
| React Hot Toast    | Success and error notifications                   |
| REST API           | Fetching product, category, and market price data |
| Git                | Version control                                   |
| GitHub             | Source code hosting                               |
| Vercel             | Deployment and hosting                            |

## 📄 Pages & Routes

| Route              | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| `/`                | Homepage with hero banner, price ticker, price trends, and all products |
| `/category/[slug]` | Category-specific products, price sorting, and empty states             |
| `/product/[slug]`  | Product details, price summary, and market-wise prices                  |
| `/signin`          | User login with email/password and social login options                 |
| `/signup`          | User registration and social authentication options                     |
| `/profile`         | User profile information and profile management                         |

Invalid routes and unavailable products should display a friendly not-found page with a link back to the homepage.

## 🏠 Homepage

The homepage provides an overview of essential market prices in one place.

- A navigation bar with the BazarDor logo and Bengali date.
- Category navigation for convenient product browsing.
- A scrolling price ticker with price movement indicators.
- A hero section with a call-to-action button that scrolls to the all-products section.
- Dedicated sections for products with rising and falling prices.
- A responsive product grid displaying product images or emojis, names, units, prices, and percentage changes.
- A footer with market price information and a disclaimer.

## 🛒 Product Details

The product details page provides a more detailed view of individual products.

- Product name, image or emoji, category, and unit.
- Current price and price change information.
- Minimum, maximum, and average price summary.
- Market-wise price ranges, including market names and divisions when available.
- A convenient way to return to the product listing.

## 📂 Category Browsing & Sorting

Users can browse products by category and sort the available products using three options:

1. **ডিফল্ট** — Default product order.
2. **দাম: কম থেকে বেশি** — Sort by price from lowest to highest.
3. **দাম: বেশি থেকে কম** — Sort by price from highest to lowest.

Sorting uses numeric price values so that displayed Bengali numerals do not interfere with the sorting order.

Category pages also provide loading feedback and an empty state when no matching products are available.

## 🔐 Authentication & Profile

Authentication is implemented using Better Auth.

- Email and password registration.
- Email and password sign-in.
- Google and GitHub social authentication.
- Toast notifications for relevant success and error states.
- Profile access and name-update functionality.
- Protected-route handling where authentication is required.

## 📱 Responsive Design

BazarDor is designed to work across different screen sizes.

- Responsive product grids for mobile, tablet, and desktop.
- Adaptive hero and content layouts.
- Usable navigation and scrolling price ticker.
- Responsive forms, buttons, and product cards.
- Consistent spacing and readable typography.

## ⏳ Loading, Error Handling & Navigation

The application includes loading skeletons and user-friendly empty or not-found states to improve the browsing experience.

Dynamic category and product routes should also be tested directly and after refreshing the deployed page to ensure correct production routing. API failures should be handled gracefully with helpful feedback whenever possible.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mehedilabs/bazar-dor.git
```

### 2. Navigate to the Project Directory

```bash
cd bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and configure the environment variables required by the Better Auth setup and authentication providers.

Use the variable names expected by the project's configuration. Never commit secret keys, database credentials, or provider secrets to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Create a Production Build

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## 🌍 Deployment

BazarDor is deployed on Vercel.

- **Live Website:** https://bazar-dor-delta.vercel.app/
- **Source Code:** https://github.com/mehedilabs/bazar-dor

For production authentication, configure the correct production domain and callback/redirect URLs for Better Auth and the Google/GitHub providers.

## 📌 Important Notes

- Product and category data depend on the configured BazarDor API.
- Market prices are indicative and may vary depending on market conditions.
- API availability may affect data-dependent pages.
- Authentication providers must be configured correctly for production use.
- The deployed website should be tested for API availability, authentication, responsive layouts, dynamic-route refreshes, and error handling before submission.

## 👨‍💻 Author

**Mehedi Hasan**

- GitHub: [@mehedilabs](https://github.com/mehedilabs)
- LinkedIn: [mehedilabs](https://www.linkedin.com/in/mehedilabs)

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

_সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়._
