import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import AuthProvider from './providers/AuthProvider.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ([
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signin',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Register></Register>,
      },
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
