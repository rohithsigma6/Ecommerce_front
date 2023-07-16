import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import './App.css';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import CheckOut from './pages/CheckOut';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>
    ),
  },
  {
    path: "/login",
    element: (<Login></Login>),
  },
  {
    path: "/register",
    element: (<Register></Register>),
  },
  {
    path:"/cart",
    element:(<Cart></Cart>)
  },
 
  {
    path:"/checkout",
    element:(<CheckOut></CheckOut>)
  },
  
]);

function App() {
  return (
   <div>
     <RouterProvider router={router} />
    {/* <Home></Home> */}
    {/* <Login></Login> */}
    {/* <Register></Register> */}
    </div>
  );
}

export default App;
