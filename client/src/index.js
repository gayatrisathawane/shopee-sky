import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from './views/Signup/Signup'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
import './index.css';
import MyOrders from './views/MyOrders/MyOrders';
import BuyDetails from './views/BuyDetails/BuyDetails';


const routes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },

  {
    path:'/signup',
    element:<Signup/>
  },

  {
    path:'/login',
    element:<Login/>
  },

  {
    path:'/myorders',
    element:<MyOrders/>
  },
  {
    path:'/buy/:_id',
    element:<BuyDetails/>
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}/>

 
 
);


