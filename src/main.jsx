import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Checkout from './components/checkout/Checkout.jsx'
import BookService from './components/bookservice/BookService.jsx'
import Bookings from './components/booking/Bookings.jsx'
import PrivetRoute from './privet/PrivetRoute.jsx'



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
      {
        path: '/bookservice/:id',
        element: <PrivetRoute><BookService></BookService></PrivetRoute>,
        // element: <BookService></BookService>,
        loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/booking',
        element: <PrivetRoute><Bookings></Bookings></PrivetRoute>,
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
