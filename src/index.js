import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterProvider, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lodging from './pages/Lodging';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>
)

