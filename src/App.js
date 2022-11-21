import React from "react";

//css
import './styles/App.scss';

//components
import Navbar from './components/Navbar';
import Conversiontable from "./components/Conversiontable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Conversiontable choices={["Binary", "Hexidecimal", "Octal", "Decimal"]} />
    </div>
  )
}

export default App;
