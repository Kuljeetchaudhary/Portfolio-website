import "./Home.css";
import person from "../../Utilities/man.png";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line-one", {
      y:100,
      duration: 1,
      opacity:0
    })
     tl1.from(".line-two", {
       y: 80,
       duration: 1,
       opacity: 0,
     })
     tl1.from(".line-three", {
       y:80,
       duration: 1,
       opacity: 0,
     })
    gsap.from(".Right-home img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
    
  })
  return (
    <div id="Home">
      <div className="left-home">
        <div className="home-details">
          <div className="line-one">Hey , I'm</div>
          <div className="line-two">Kuljeet</div>
          <div className="line-three">
            <TypeAnimation
              sequence={[
                "MERN STACK DEVELOPER",
                1000,
                "REACT DEVELOPER",
                1000,
                "SOFTWARE ENGINEER",
                1000,
              ]}
              speed={400}
              repeat={Infinity}
              cursor={true}
              style={{ color: "#ccf3ef" }}
            />
          </div>
          <button id="hire-button">Hire Me</button>
        </div>
      </div>
      <div className="Right-home">
        <img src={person} alt="Roboto_man_image"></img>
      </div>
    </div>
  );
}

export default Home;
