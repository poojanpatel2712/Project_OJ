import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from './Pages/Blogs';
import Topics from './Pages/Topics';
import Contest from './Pages/Contest';
import Problem from './Pages/Problem';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contest" element={<Contest />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Problem" element={<Problem />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
