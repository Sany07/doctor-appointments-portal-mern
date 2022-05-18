import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import  NavBar  from './Components/NavBar'
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
