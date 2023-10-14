import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';

// const router =createBrowserRouter([
//   {
//   path:"/",
//   element: <App></App>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path: "about",
        element:<About></About>
      },
      {
        path: "contact",
        element:<Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
