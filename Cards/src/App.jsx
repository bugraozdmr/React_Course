import { useState } from 'react';
import './App.css';
import { Course } from './Course';

import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";


function App() {
  

  return (
    <>
      <Course 
      image = {Angular}
      title="Angular"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequuntur."/>

      <Course 
      image = {Bootstrap}
      title="MVC"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequuntur."/>
      
      <Course 
      image = {Csharp}
      title="Python"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequuntur."/>
    </>
  )
}

export default App
