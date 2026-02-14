# Health App Frontend

This project is a pixel-perfect implementation of a Health Application frontend based on the provided design specifications. Ideally built with React, TypeScript, and Tailwind CSS.

## Problem Description
The goal was to create a responsive, interactive frontend for a health tracking application. Key requirements included:
- **Design Fidelity**: Strictly following the provided layout, colors (gradients), and typography.
- **Interactivity**: Implementing "Load More" functionality for records and columns, and category filtering.
- **Responsiveness**: ensuring the layout adapts to different screen sizes (Mobile, Tablet, Desktop).

## Solution
The solution is built using a modern tech stack focused on performance and developer experience:
- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (using `@theme` and variables for the design system)
- **Routing**: React Router v7
- **Build Tool**: Vite

### Key Features
- **Dashboard**: Displays meal history with filtering options (Morning, Lunch, Dinner, Snack) and a progress chart (placeholder).
- **Column Page**: grid layout of health articles with "Load More" functionality.
- **Components**: Reusable UI components like `HexagonButton`, `MealCard`, and `RecordCategoryCard`.
- **Animations**: Usage of `View Transitions API` for smooth state updates (filtering/loading).

## Architecture
The project follows a clean architecture separating data from UI:
- **`src/components`**: strictly presentational components (dumb components).
- **`src/pages`**: Container components that manage state (smart components).
- **`src/utils/mockData.ts`**: Centralized mock data generation, keeping hardcoded data out of components.
- **`src/layouts`**: Layout wrappers (Header/Footer management).

## Operation Verification Procedure

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
1.  **Top Page (Dashboard)**:
    -   Verify the hexagon buttons (Morning, Lunch, etc.) filter the meal list when clicked.
    -   Click "記録をもっと見る" (Load More) and verify 8 more items are added gracefully.
    -   Check the hover effects on images and buttons.
2.  **Column Page**:
    -   Navigate to "コラム一覧" (Column List) via the footer or URL `/column-list`.
    -   Check the responsive grid (4 columns on desktop, 2 on tablet, 1 on mobile).
    -   Click "コラムをもっと見る" to load more articles.

## Code Consistency
- **Naming**: PascalCase for components, camelCase for functions.
- **Styling**: Utility-first CSS using Tailwind.
- **Types**: Strict TypeScript interfaces for all props and data models.
