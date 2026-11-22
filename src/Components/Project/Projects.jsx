import CardComp from "../Card/CardsComp";
import "./Project.css";
import PortfolioImage from "../../Utilities/Portfolio.jpg";
import virtaulAssistance from "../../Utilities/va.png";
import CurrencyConvertor from "../../Utilities/currency.jpg";
import machinLeraning from "../../Utilities/machinelearning.png";
import Bank from "../../Utilities/Bank.jpg";
import Posts from "../../Utilities/cards.jpg";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
       
        start: "top 80%",
        end:"top 30%"
      }
    })
      gsap.from(".slider", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".slider",
          scroll: "body",
          scrub: 2,
         
          start: "top 80%",
          end: "top 30%",
        },
      });
  })
  return (
    <>
      <div id="Project">
        <h2 id="para">Learning through building, growing through debugging.</h2>
        <div className="silder">
          <CardComp
            title={"Personal Assistant Chatbot Chatbot"}
            image={virtaulAssistance}
          />
          <CardComp
            title={"Personal Portfolio Website-Deployed (React)"}
            image={PortfolioImage}
          />
          <CardComp title={"Currency Converter – Currency API Integration"} />
          <CardComp
            title={
              "Media Search Application – React, Redux Toolkit, Unsplash, Coverr, Giphy"
            }
            image={CurrencyConvertor}
          />
          <CardComp
            title={
              "Posts Management System – MERN Stack, CRUD Operations, ImageKit"
            }
            image={Posts}
          />
          <CardComp
            title={
              "Fake News Detection System – Machine Learning, Python, Flask, TF-IDF"
            }
            image={machinLeraning}
          />
          <CardComp
            title={"Banking System – JavaScript/Node.js backend and MongoDB"}
            image={Bank}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
