import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Project/Projects";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
