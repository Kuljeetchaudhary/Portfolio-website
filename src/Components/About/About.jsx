import "./About.css";
import CardComp from "../Card/CardsComp";
import mernImage from "../../Utilities/mern.png";
import JavaImage from "../../Utilities/java.png"
import DSAimage from "../../Utilities/dsa.png"
import DataSciece from "../../Utilities/datascience.jpg"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x:80,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger: {
        trigger: ".circle",
        scroller: "body",
        scrub: 2,
        
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x:40,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger: {
        trigger: ".line",
        scroller: "body",
        scrub: 2,
       
        start: "top 60%",
        end: "top 30%",
      },
    })
     gsap.from(".about-details h1", {
       x: 80,
       opacity: 0,
       duration: 1,
       stagger: 1,
       scrollTrigger: {
         trigger: ".about-details h1",
         scroller: "body",
         scrub: 2,

         start: "top 60%",
         end: "top 30%",
       },
     });
     gsap.from(".about-details ul", {
       y: 100,
       opacity: 0,
       duration: 1,
       stagger: 1,
       scrollTrigger: {
         trigger: ".about-details ul ",
         scroller: "body",
         scrub: 2,

         start: "top 60%",
         end: "top 30%",
       },
     });
     gsap.from(".Right-side-about", {
       x: 80,
       opacity: 0,
       duration: 1,
       stagger: 1,
       scrollTrigger: {
         trigger: ".Right-side-about",
         scroller: "body",
         scrub: 2,

         start: "top 60%",
         end: "top 30%",
       },
     });
    })
  return (
    <div className="About">
      <div className="Left-side-about">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="about-details">
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span>kuljeet
              </li>
              <li>
                <span>AGE</span>22 YEARS
              </li>
              <li>
                <span>GENDER</span>MALE
              </li>
              <li>
                <span>LANGUAGES KNOWN</span>HINDI,ENGLISH
              </li>
            </ul>
          </div>
          <div className="education-info">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span>BTECH
              </li>
              <li>
                <span>BRANCH</span>COMPUTER SCIENCE AND ENGINEERING
              </li>
              <li>
                <span>CGPA</span>7.5
              </li>
            </ul>
          </div>
          <div className="skills-info">
            <h1>skills</h1>
            <ul>
              <li>MERN FULL STACK WEB DEVELOOPMENT</li>
              <li>JAVA PROGRAMMING</li>
               <li>DATA SCIENCE</li>
              <li>DSA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Right-side-about">
        <CardComp title={"MERN STACK DEVELOPER"} image={mernImage} />
        <CardComp title={"JAVA"} image={JavaImage} />
        <CardComp title={"DSA"} image={DSAimage} />
        <CardComp title={"DATA SCIENCE"} image={DataSciece} />
      </div>
    </div>
  );
}

export default About;
