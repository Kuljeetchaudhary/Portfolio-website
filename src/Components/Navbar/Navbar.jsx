import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useGSAP} from "@gsap/react"
import gsap from "gsap";
function Navbar() {
    let menu = useRef()
  let mobile = useRef()
  useGSAP(() => {
    let tl =gsap.timeline()
    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity:0
    })
    tl.from("nav ul li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger:1
    });
    
  })
    
    return (
      
        // navbar
      <nav>
          
        {/* desktop view navbar */}
      <h1>PORTFOLIO</h1>
        <ul className="desktop-menu">
          <Link to="Home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
          <Link to="About" activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
          <Link to="Project" activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li> </Link>
          <Link to="Contact" activeClass="active" spy={true} smooth={true} duration={500}> <li>Contact Me</li></Link>
        </ul>

          {/* Hamburger  */}
            <div className="hamburger" ref={menu} onClick={() => {
                mobile.current.classList.toggle("activemoble")
                menu.current.classList.toggle("active-ham")
            }}>
              <div className="ham"></div>
              <div className="ham"></div>
              <div className="ham"></div>
            </div>
            
        {/* mobile view navbar */}
        <ul className="mobile-menu" ref={mobile}>
          <Link to="Home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
          <Link to="About" activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
          <Link to="Project" activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li> </Link>
          <Link to="Contact" activeClass="active" spy={true} smooth={true} duration={500}> <li>Contact Me</li></Link>
        </ul>
    </nav>
  );
}

export default Navbar;
