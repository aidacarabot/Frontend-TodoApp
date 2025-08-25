# Todo List App – Front-End

This repository contains the **Front-End** for the Fullstack Take-Home Test: Todo List App, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- View a list of tasks with:
  - Title
  - Completion toggle (checkbox)
  - Delete button (with confirmation)
- Create new tasks (with title and color)
- Edit existing tasks (title and color)
- Mark tasks as completed/not completed directly from the home view
- Responsive, clean UI following the [Figma Design](https://www.figma.com/design/yibPNbHsKQBYWfUL58C2Su/Todo-App-Test-Task--Copy-?node-id=0-1&t=ioy3Dkz5LNSBDb5t-1)
- Task summary: "Tasks: X" and "Completed: Y of X"
- Modular, reusable React components

## Tech Stack

- [Next.js (App Router)](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- The [Back-End API](https://github.com/your-backend-repo) running locally (see back-end repo for setup)

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-frontend-repo.git
   cd Frontend-TodoApp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure API URL:**

   - If needed, update the API base URL in `src/utils/api/tasksApi.ts` to match your back-end server address.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/` – Main app entry, layout, and pages
- `src/components/` – Reusable UI components (TaskBox, TaskForm, TaskList, etc.)
- `src/utils/api/` – API client for tasks
- `globals.css` – Global styles (Tailwind CSS)

## API Endpoints (Expected from Back-End)

- `GET /tasks` – List all tasks
- `POST /tasks` – Create a new task
- `PUT /tasks/:id` – Update a task
- `DELETE /tasks/:id` – Delete a task

## Notes

- All code is written in TypeScript.
- UI is fully responsive and matches the provided Figma design.
- Basic validation and error handling are implemented.

## License

This project is for evaluation purposes only.

---

**See the back-end repository for API and database setup instructions.**
