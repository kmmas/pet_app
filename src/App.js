import './App.css';
import MainPage from "./MainPage/MainPage"
import Application from "./Application/Application"
import NotFound from "./NotFound/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>         
          <Route path='*' element = {<NotFound/>}/>
          <Route path="/Application" element={<Application/>} />
          <Route path='/' element = {<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
