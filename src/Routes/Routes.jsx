import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDitails from '../Pages/BookDitails/BookDitails';
import ReadPage from '../Pages/ReadPage/ReadPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/booksData.json'),
            Component:Home
        },
        {
            path:'/about',
            loader:()=>fetch('/booksData.json'),
            Component:About
        },
        {
            path:"/bookditails/:id",
            loader:()=>fetch('/booksData.json'),
            Component:BookDitails
        },
        {
          path:"/readpage",
          Component:ReadPage
        }



    ]



  },
]);