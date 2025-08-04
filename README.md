# 🐴 Horse Tracker System

A full-stack web application designed to manage and monitor the status of horses in a stable or training environment. This system provides a clean, interactive interface to view horse data, track their status, and gain insights into their training progress.

### Live Demo & Screenshots

**(Placeholder: Add your live demo link here if you deploy the app, and include a few screenshots of the card view, table view, and detail modal.)**

---

## Project Architecture

The application is built with a decoupled frontend and backend, ensuring a clear separation of concerns.

* **Frontend (React):** A responsive Single-Page Application built with React and Material-UI. It handles all user interactions, routing, and data visualization.
* **Backend (Node.js/Express):** A lightweight RESTful API that serves horse data via clearly defined endpoints.
* **Data Layer (In-Memory):** The project uses a simple in-memory JavaScript array to simulate a database, making it self-contained and easy to run without any database configuration.

---

## Features

* **Two Viewing Modes:** View horses in a responsive **Card Grid** or a detailed **Data Table**.
* **Client-Side Routing:** Seamless navigation between views without page reloads, handled by React Router.
* **Dynamic Filtering:** Filter the list of horses by their status (Active, Resting, Injured).
* **Detailed Modals:** Click on any horse to view a detailed modal with health stats and training history.
* **Data Visualization:** A line chart within the modal visualizes the horse's training duration over time.
* **Notification System:** A notification icon in the header displays a badge with a count of horses whose vet checks are more than 6 months overdue.

---

## Technology Stack

* **Frontend:**
    * React
    * Material-UI (for components and styling)
    * React Router (for navigation)
    * Recharts (for data visualization)
* **Backend:**
    * Node.js
    * Express.js
    * CORS

---

## Project Setup

The project is split into two folders: `horse-tracker-frontend` and `horse-tracker-backend`. You must run both concurrently in separate terminal windows.

### Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd horse-tracker-backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the backend server:
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:8000`.

### Frontend Setup

1.  Open a **new terminal** and navigate to the frontend directory:
    ```bash
    cd horse-tracker-frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm run dev
    ```
    The application will open in your browser, usually at `http://localhost:5173`.

---

## How to Evolve This System

To evolve this prototype into a real-world equine management system, I would focus on several key areas. First, I would replace the in-memory data with a robust **SQL or NoSQL database** (like PostgreSQL or MongoDB) to ensure data persistence and scalability. Second, I would implement **user authentication and roles** (e.g., for Owners, Trainers, Vets) to control access to sensitive information. Finally, I'd introduce a **real-time data layer using WebSockets** to instantly push updates to the frontend, such as live health alerts from IoT sensors on each horse, providing a truly dynamic and interactive monitoring experience.
