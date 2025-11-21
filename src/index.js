import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { approuter } from './App';
import reportWebVitals from './reportWebVitals';
import { MenuProvider } from './Components/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Router FIRST */}
    <RouterProvider router={approuter}>
      {/* MenuProvider INSIDE Router */}
      <MenuProvider />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
