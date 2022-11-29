import React from "react";


import './styles/App.scss';


import Navbar from './components/Navbar';
import Conversiontable from "./components/Conversiontable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Conversiontable />
    </div>
  )
}

export default App;
