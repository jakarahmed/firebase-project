import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './Root';
import Home from './Home';

import Ragister from './Ragister';
import Login from './Login';
import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
      {
        path:"/",
        element:<Home></Home>
      },
     
      {
        path:"/ragister",
        element:<Ragister></Ragister>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/app",
        element:<App></App>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
