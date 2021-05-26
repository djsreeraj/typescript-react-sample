import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponentA from './components/MyComponentA';
import myModelA from './models/myModelA';

function App() {

  let myModelX: myModelA = {name: "Sreeraj", age: 26};

  return (
    <div className="App">
      <header className="App-header">

        <MyComponentA  {...myModelX}/>

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
