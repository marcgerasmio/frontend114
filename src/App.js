import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Login.js'
import Home from './Home.js'
import AboutUs from './AboutUs.js';
import Summary from './Summary.js';
import SummaryResult from './Summary_Result.js';
import Quiz from './Quiz.js';
import QuizResult from './Quiz_Result.js';
import Register from './Register.js'
import Logout from './Logout.js'

function App(){
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path = "/logout" element = {<Logout/>}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/summary" element={<Summary />} />
        <Route path = "/summaryresult" element = {<SummaryResult/>}/>
        <Route path="/quiz" element={<Quiz />} />
        <Route path = "/quizresult" element = {<QuizResult/>}/>
        <Route path = "/signup" element = {<Register/>}/>


      </Routes>
    </div>
  );
}

export default App;
