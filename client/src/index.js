import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutRoute from './routes/about';
import PortfolioRoute from './routes/portfolio';
import ContactRoute from './routes/contact';
import ResumeRoute from './routes/resume';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="about" element={<AboutRoute />} />
        <Route path="portfolio" element={<PortfolioRoute />} />
        <Route path="contact" element={<ContactRoute />} />
        <Route path="resume" element={<ResumeRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
