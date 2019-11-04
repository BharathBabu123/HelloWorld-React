import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Hello } from './components/hello';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Greet name = "bharath" college = "jntuA">
        <p>this is children props</p></Greet>
      <Greet name = "anudeep" college =  "cbit">
        <button>click here</button></Greet>
      <Greet name = "umer" college = "svuniversity"/>
      
      <Welcome/>

      <Hello/>
    </div>
  );
}

export default App;
