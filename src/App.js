import './App.css';
import Application from "./Application/Application"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { CookiesProvider, useCookies } from "react-cookie";
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>         
          <Route path="/Application" element={<Application/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
