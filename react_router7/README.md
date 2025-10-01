# react_router7 — React + Vite demo (with React Router)

This folder is a small Vite + React demo app focused on client-side routing using react-router-dom.

What I changed in this project

- Replaced remote images with local assets and cleaned up unused images.
- Implemented a top navigation bar with Home / About / Contact, and Login / Get started buttons.
- Added an `Auth` component (login/signup demo) and a `User` component (dynamic route at `/user/:id`).
- Wired routes in `src/main.jsx` to use a `Layout` with nested routes for Home, About, Contact, Auth and User.

Files of interest

- `src/main.jsx` — router setup and route list
- `src/layout.jsx` — shared layout (Header / Footer / Outlet)
- `src/components/Header.jsx` — top navigation bar (uses `NavLink` for active link styling)
- `src/components/Auth.jsx` — demo login / signup form (navigates to `/user/:id` on submit)
- `src/components/User.jsx` — dynamic user page that reads route params and state
- `src/components/Home.jsx` — home page (uses local hero assets)
- `src/assets/` — images bundled locally

How to run

1. Install dependencies and start dev server:

  ```powershell
  cd react_router7
  npm install
  npm run dev
  ```

2. Open the Vite URL printed in the terminal (usually <http://localhost:5173>).

Routing basics — short guide and examples

This project uses `react-router-dom` v7. The main pieces are:

- createBrowserRouter and RouterProvider: create the route table and mount the router in your app.
- `<Route>` objects (in v6+ style) are expressed as route definitions passed to `createBrowserRouter`.
- `Outlet` in a layout component renders the active child route.
- `Link` and `NavLink` are used for client-side navigation (no full page reload).

Example router (see `src/main.jsx`):

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home'
import About from './components/About_us'
import Contact from './components/Contact_us'
import Auth from './components/Auth'
import User from './components/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'auth', element: <Auth /> },
      { path: 'user/:id', element: <User /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
```

Using `Link` and `NavLink`

- Use `Link to="/about"` for internal navigation. `Link` prevents a full-page reload and updates the router state.
- Use `NavLink` when you want to style the active link. NavLink's `className` prop receives an object with `isActive` that you can use to toggle styles.

Example `NavLink` usage (see `src/components/Header.jsx`):

```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-gray-700'}>
	About
</NavLink>
```

Passing state and query params

- You can navigate programmatically with `useNavigate()` and pass state: `navigate('/user/123', { state: { name: 'Alice' } })`.
- Read query params with `useLocation()` and `new URLSearchParams(location.search)`.

Example: the demo `Auth` component reads `?mode=signup` to toggle between login and signup, and navigates to `/user/:id` with state on success.

- Next improvements you might add

- Protect the `/user/:id` route and add real authentication (JWT or session).
- Add unit tests for components.
- Optimize images and add srcset for different resolutions.

If you want, I can run the dev server and preview the app for you or add authentication/persistence next.
