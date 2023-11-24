import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Login.js'
import Home from './Home.js'
import AboutUs from './AboutUs.js';

function App(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
