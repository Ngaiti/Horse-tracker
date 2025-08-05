# 🐴 Horse Tracker System

A full-stack web application designed to manage and monitor the status of horses in a stable or training environment. This system provides a clean, interactive interface to view horse data, track their status, and gain insights into their training progress.

---

## Project Architecture

1. Frontend

A dynamic Single-Page Application built with React. It provides a rich, interactive user experience for managing and viewing horse data.

UI Library: Material-UI is used for the entire component library, ensuring a consistent and responsive design. This includes the header, cards, data table, modals, and notification icons.

Key Responsibilities:

Rendering two distinct views for horse data: a visual Card View and a dense Table View.

Managing client-side navigation between the views using React Router without requiring a page reload.

Filtering horses by status or clicking a horse to view its detailed profile in a modal by clicking on each individual horse card in Card View.

Visualizing training data with charts using the Recharts library.

Communicating with the Backend API via fetch to request and display horse data.

2. Backend

RESTful API created with Node.js and the Express framework. It acts as the central hub for data and logic.

Key Responsibilities:

Exposing clear API endpoints (e.g., GET /api/horses, GET /api/horses/:id) for the frontend.

Processing incoming HTTP requests and returning data in a structured JSON format.

Interacting with the Horse Data Manager to retrieve or update information.

Running a simulation to periodically update training logs (every 20 seconds), mimicking a live data environment.

3. Horse Data Manager

For this project, the data is managed in an in-memory JavaScript array on the server. The mockData.js (backend folder) file acts as a temporary, non-persistent database.

Key Responsibilities:

Serving as the single source of data for all horse information.

Holding the application's state, which is loaded into memory when the server starts.

The data is non-persistent. Any updates (including the simulated training logs) will be reset if the server restarts.
---

## Technology Stack

* **Frontend:**
    * React
    * Material-UI 
    * React Router
    * Recharts
* **Backend:**
    * Node.js
    * Express.js
    * CORS

---

## Project Setup

The project is split into two folders: `horse-frontend` and `horse-backend`.

Running the Application Locally
Follow these instructions to set up and run the project on your local machine for development and testing.

Prerequisites
Node.js (which includes npm)

Git

Step 1: Clone the Repository
First, clone the project from GitHub to your local machine.

git clone https://github.com/Ngaiti/Horse-tracker.git

Step 2: Set Up and Run the Backend
You'll need one terminal window for the backend server.

Navigate to the backend directory:


cd horse-backend
Install the necessary dependencies:


npm install
Start the backend server:


npm start
The terminal should confirm that the server is running, typically on port 8000:
🐴 Horse Tracker backend is running on http://localhost:8000

Step 3: Set Up and Run the Frontend
Open a new, separate terminal window or tab for the frontend application.

From the project's root directory, navigate to the frontend directory:


cd horse-frontend
Install the necessary dependencies:


npm install
Start the frontend development server:


npm run dev
Your web browser should automatically open to the application, usually at http://localhost:5173. Click on the link itself if web browser doesn't automatically open.

At this point, you will have the full application running locally, with the frontend communicating with your local backend server.

---
## Hosted Demo Link

Project demo link: https://horse-tracker.onrender.com/

---

## How to Evolve This System

To evolve this prototype into a real-world equine management system, the focus would be on three core areas: data persistence, user management, and real-time integration. The first step is to replace the mock data with a database like PostgreSQL or MongoDB, which would securely store all horse records, training logs, and medical histories. Next, I would implement a comprehensive user authentication system with role based access control (vets, trainers, owners, etc.) to securely access and manage only the information relevant to them. Finally, I would then integrate it with wearable sensors on the horses to stream live health data (real time data using websockets to push updates to frontend) and expand its features to include a scheduling module for appointments and financial tracking for expenses.
