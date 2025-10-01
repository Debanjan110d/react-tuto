// ...existing code...
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/Home'
import About from './components/About_us'
import Contact from './components/Contact_us'
import Auth from './components/Auth'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// ...existing code...

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
  { index: true, element: < Home/> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
  { path: 'auth', element: <Auth /> },
  { path: 'user/:id', element: <User /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
// ...existing code...