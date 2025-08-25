
# 📝 Todo List App – Front-End

Welcome to the **Fullstack Take-Home Test: Todo List App**!  
This project is part of a challenge to build a simple, clean, and functional Todo List using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Express.js**, **Prisma**, and **MySQL** – all in TypeScript.

---

## 🚀 About the Challenge

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Backend:** Express.js, Prisma, MySQL ([Backend Repo](https://github.com/aidacarabot/Backend-TodoApp))
- **Features:** Add, edit, complete, and delete tasks. Responsive UI. Modular components.  
- **Best Practices:** Clean, modular code, validation, error handling, and user feedback.

---

## ✨ Loader & Backend Performance

> **ℹ️ Note:**  
> This app includes a loading spinner (Loader) for a better UI/UX experience.  
> The default backend is hosted on [Render](https://backend-todoapp-j408.onrender.com) and can be **very slow** (cold starts, free tier).  
> The Loader will appear during all fetch operations to give users feedback while waiting for data.

### 🔗 Backend Options

#### 1️⃣ Use the public backend (slow, but no setup required)

- Default API base URL:
  ```
  https://backend-todoapp-j408.onrender.com
  ```
  as the API base URL. You can use this endpoint, but expect slow response times.

#### 2️⃣ Run your own backend locally (⚡ recommended for best experience)

1. Go to the backend repository: [https://github.com/aidacarabot/Backend-TodoApp](https://github.com/aidacarabot/Backend-TodoApp)
2. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/aidacarabot/Backend-TodoApp.git
   cd Backend-TodoApp
   npm install
   npm run dev
   ```
3. The backend will start on your local machine (usually at `http://localhost:3001`).
4. In this front-end project, open `src/utils/api/tasksApi.ts` and change:
   ```typescript
   const BASE_URL = 'https://backend-todoapp-j408.onrender.com' //change here to localhost if the server is not working correctly
   ```
   to:
   ```typescript
   const BASE_URL = 'http://localhost:3001'
   ```
5. Save and restart the front-end dev server if needed.

---

This will make all API requests much faster and improve your development experience.

## 🛠️ Features

- View, create, edit, complete, and delete tasks
- Color selection for tasks
- Task summary: "Tasks: X" and "Completed: Y of X"
- Responsive, clean UI matching the Figma design
- Modular, reusable React components
- Loader (spinner) for all fetch operations 🌀

## 📁 Project Structure

- `src/app/` – Main app entry, layout, and pages
- `src/components/` – Reusable UI components (TaskBox, TaskForm, TaskList, etc.)
- `src/utils/api/` – API client for tasks
- `globals.css` – Global styles (Tailwind CSS).  
  **Note:** In `globals.css` you will find custom Tailwind CSS tags (CSS variables and utility classes) to make editing and customizing the project and its components much easier and more maintainable.


## 📡 API Endpoints (Expected from Back-End)

- `GET /tasks` – List all tasks
- `POST /tasks` – Create a new task
- `PUT /tasks/:id` – Update a task
- `DELETE /tasks/:id` – Delete a task


## 📝 Notes

- Loader (spinner) is shown during all fetch operations to improve user experience, especially when using the slow public backend.
- All code is written in TypeScript.
- UI is fully responsive and matches the provided Figma design.
- Basic validation and error handling are implemented.


## 📜 License

Developed by Aida Carabot.

---


**See the back-end repository for API and database setup instructions.**
