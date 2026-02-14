# Health App Frontend

This project is a pixel-perfect implementation of a Health Application frontend based on the provided design specifications. It is built with **React**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Key Features

### 1. Dashboard (Top Page)
- **Meal History**: Visualizes meal records with filtering options (Morning, Lunch, Dinner, Snack).
- **Progress Chart**: Interactive weight graph implemented with `Recharts`.
- **Achievement Rate**: Circular progress visualization of the daily achievement rate.

### 2. My Record Page
- **Body Record Chart**: Interactive line chart visualizing weight and body fat percentage trends.
    - **Filtering**: Supports different time ranges (Day, Week, Month, Year) with dynamic data simulation.
    - **Responsive Axes**: Smart x-axis intervals for cleaner visualization (e.g., every 4 hours for the daily view).
- **Exercise List**: Scrollable list of daily exercises with custom scrollbar styling.
- **Diary**: Grid layout of diary entries with infinite scrolling ("Load More" functionality).

### 3. Column Page
- **Articles Grid**: Responsive grid layout (up to 4 columns) displaying health-related articles.
- **Recommendations**: Prominent recommendation categories at the top.
- **Load More**: Dynamic loading of additional articles.

### 4. Authentication & Security
- **Protected Routes**: The Dashboard and My Record pages are protected and require login.
- **Public Fallback**: Unauthenticated users are automatically redirected to the **Column Page**, which serves as the public landing page.
- **Login System**:
    - Built with **React Hook Form** and **Zod** for validation.
    - **Auto-fill**: Credentials (`user` / `user`) are pre-filled for easy testing.
- **Dynamic Navigation**: Header menu items change based on authentication state (e.g., "Login" vs "Logout").

### 5. Utilities & UX
- **Scroll to Top**: A floating button appears when scrolling down, allowing users to smoothly return to the top.
- **Under Maintenance**: Placeholder pages for future features (Weight Graph, Goals, Settings, etc.) are implemented with a unified maintenance view.
- **Responsive Design**: Fully responsive layout adapting to Mobile, Tablet, and Desktop screens.

## 🛠 Tech Stack

- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (using CSS variables and `@theme` for the design system)
- **Routing**: React Router v7
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod + @hookform/resolvers
- **Build Tool**: Vite

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (Buttons, Cards, Charts, Header/Footer)
├── contexts/         # React Contexts (AuthContext)
├── layouts/          # Layout wrappers (DashboardLayout)
├── pages/            # Page components (Dashboard, MyRecord, Login, ColumnPage)
├── types/            # TypeScript type definitions
├── utils/            # Helper functions and mock data generators
└── assets/           # Static assets (Images, SVGs)
```

## 🚀 Getting Started

### 1. Installation
Ensure you have Node.js installed.
```bash
npm install
```

### 2. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Verification Steps

1.  **Public Access**:
    -   Open the app. You should land on the **Column Page** (`/column-list`) if not logged in.
    -   Try to access `/my-record`. You should be redirected back to the Column Page.

2.  **Login**:
    -   Click "Login" in the header menu.
    -   Click "Sign in" (credentials are pre-filled).
    -   You will be redirected to the **Dashboard**.

3.  **Dashboard**:
    -   Check the meal history filters.
    -   View the achievement circle and graph.

4.  **My Record**:
    -   Navigate to "My Record".
    -   Interact with the **Body Record Chart** filters (Day/Week/Month/Year).
    -   Scroll through the **Exercise List**.
    -   Load more **Diary** entries.

5.  **Scroll to Top**:
    -   Scroll down on any page and verify the arrow button appears on the bottom right. Click it to return to the top.
