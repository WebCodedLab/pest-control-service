# Pest Control Service Website

This project is a modern, responsive website for a pest control service, built using a combination of cutting-edge technologies including React, Vite, React Router, and Tailwind CSS. It aims to provide a user-friendly interface for browsing services, learning about the company, and contacting them.

## Key Features

-   **Intuitive Navigation:** Seamless navigation between pages using React Router, including Home, Services, About, Contact, FAQ, Emergency, and a custom 404 error page.
-   **Loading State Management:** A loading animation is displayed while transitioning between pages. This animation provides visual feedback during route changes to enhance the user experience.
-   **Reusable Component Architecture:** The project is built using reusable components like buttons, loaders, headers, and footers, allowing for easy maintenance and expansion.
-   **Modern Styling:** Tailwind CSS is used for styling, ensuring a modern, responsive, and easily customizable design.
-   **SEO-Friendly:** React Helmet is included for managing metadata, enhancing search engine optimization.
-   **Iconography:** Lucide React is utilized for easy implementation of icons throughout the website.

## Technologies & Libraries

-   **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
-   **React Router:** A standard library for routing in React applications, enabling navigation.
-   **React Helmet:** For managing document head (title, meta tags) for better SEO.
-   **Tailwind CSS:** A utility-first CSS framework that allows for rapid UI development through the use of pre-defined classes.
-   **Lucide React:** An open-source library containing a collection of high-quality icons.

## Project Structure

The project directory is organized to promote maintainability and scalability:

-   **`package.json`:** Contains project metadata, dependencies, and scripts for development, building, and linting.
-   **`App.jsx`:** The main application component. It sets up the router, handles loading states, and renders page components based on the route.
-   **`main.jsx`:** The entry point of the React application, responsible for rendering the `<App />` component into the DOM.
-   **`components/`:** Contains reusable UI components.
    -   **`Header.jsx`:** (Not explicitly provided but assumed to be in this directory) The website header component. It likely contains site navigation and logo.
    -   **`Footer.jsx`:** (Not explicitly provided but assumed to be in this directory) The website footer component. It may contain copyright information, social links etc.
    -   **`Button.jsx`:** A reusable button component, styled with Tailwind CSS, using the `Link` component from React Router to enable navigation.
    -   **`Loader.jsx`:** A component that displays a loading animation, composed of multiple bouncing circles, providing visual feedback when transitioning between routes.
-   **`pages/`:** Contains individual page components.
    -   **`Home.jsx`:** The homepage component.
    -   **`Services.jsx`:** The page displaying pest control services offered.
    -   **`About.jsx`:** The "About Us" page component.
    -   **`Contact.jsx`:** The page for contact information.
    -   **`FAQ.jsx`:** A page containing frequently asked questions.
    -   **`Emergency.jsx`:**  A page dedicated to emergency services.
    -   **`NotFound.jsx`:** A custom 404 error page displayed when a route does not match.
-   **`index.css`:** The main CSS file, importing the required Tailwind directives.
-   **`tailwind.config.js`:** The configuration file for Tailwind CSS, allowing for customization of colors, spacing, etc.

## Getting Started

To set up and run the project locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/WebCodedLab/pest-control-service.git
    cd pest-control-service
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    This will launch the development server with hot-reloading enabled. Access the application in your browser, typically at `http://localhost:5173`.

4.  **Build the Project:**
    ```bash
    npm run build
    ```
    This command will create a production-ready build of the application within the `dist` folder, which can be deployed to a web server.

## Available Scripts

The following scripts are defined in the `package.json` file:

-   **`dev`:** Starts the Vite development server. This will provide a local development environment that provides hot module replacement.
-   **`build`:** Builds the application for production, optimizing the code and assets.
-   **`lint`:** Runs ESLint to check for code style and potential issues.
-   **`preview`:** Serves the production build locally using Vite. This is helpful for verifying the final output before deployment.

## Code Structure and Implementation Details

-   **Loading State Management:** The `App.jsx` file efficiently manages the loading state between page transitions. This is done using React Router's `useLocation` hook, a state variable (`isLoading`), and a `useEffect` hook with a `setTimeout` to simulate asynchronous data loading and visual transition timing. This improves the perceived performance of the application.
-   **Button Component:** The `Button.jsx` component exemplifies reusability. It uses the `Link` component from React Router and applies Tailwind CSS classes for consistent styling across the application.
-   **Tailwind CSS Configuration:** The `tailwind.config.js` file is used to configure and customize Tailwind CSS, ensuring consistency throughout the project's design.
-   **404 Page:** The `NotFound.jsx` component is a custom 404 error page that includes a clear message and a link back to the homepage, improving the user experience when a non-existent page is requested.

