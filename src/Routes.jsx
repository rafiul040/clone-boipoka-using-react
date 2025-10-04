import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from './Pages/Root/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';



export const router = createBrowserRouter([
  {
    path: '/',
    // element: <div>Hello World</div>,
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
  }
])

