import './App.css';
import Allpets from "./Allpets/Allpets"
import Application from "./Application/Application"
import NotFound from "./NotFound/NotFound"
import Shelter from "./Shelter/Shelter"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';
import Allshelters from './Allshelters/Allshelters';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>         
          <Route path='/Shelter' element = {<Shelter/>}/>
          <Route path='*' element = {<NotFound/>}/>
          <Route path="/Application" element={<Application/>} />
          <Route path='/Allpets' element = {<Allpets/>}/>
          <Route path='/Allshelters' element = {<Allshelters/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
