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
import CompilerArea1 from './Pages/CompilerArea1';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contest" element={<Contest />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Problem" element={<Problem />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/problem/:_id" element={<CompilerArea1 />} />
      </Routes>
    </Router>
  );
}

export default App;
