
# React Todo App with Context & Local Storage

This is a modern Todo application built with React, Vite, and Tailwind CSS. It uses React Context for state management and persists todos in local storage.

## Features

- Add, edit, complete, and delete todos
- Edit prevention for completed todos
- All todos are saved in your browser (local storage)
- Responsive and clean UI with Tailwind CSS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

- `src/contexts/` – Context and provider for todos
- `src/components/` – TodoForm, TodoItem, and index exports
- `src/App.jsx` – Main app logic and provider
- `src/App.css` – Custom styles for the app container

## Usage

1. Type a todo in the input and click **Add**
2. Click the checkbox to mark as complete/incomplete
3. Click the ✏️ (edit) icon to edit, then 💾 (save) to save changes
4. Click × to delete a todo

> **Note:** Completed todos cannot be edited.

## Customization

- You can further style the app by editing `App.css` or Tailwind classes in the components.
- Logic comments are included in the code for learning and debugging.

---

Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).
