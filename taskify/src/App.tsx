import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number,string];

type Person={
  name: string;
  age?: number;
}
let person:Person = {
  name: "Aditya",
  // age:23
}




function App() {
  return (
    <div className="App">
     hello world
    </div>
  );
}

export default App;
