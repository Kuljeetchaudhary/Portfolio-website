import ConstactImage from "../../Utilities/contact.png";
import "./Contact.css";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function Contact() {
  useGSAP(() => {
    gsap.from(".contact-Left-side img ", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".contact-Left-side img",
        scroll: "body",
        scrub: 2,
       
        start: "top 80%",
        end: "top 30%"
      }
    })
     gsap.from("form", {
       x:500,
       duration: 1,
       opacity: 0,
       stagger: 1,
       scrollTrigger: {
         trigger: " form",
         scroll: "body",
         scrub: 2,

         start: "top 80%",
         end: "top 30%",
       },
     });
  })
  return (
    <>
      <div className="Contact">
        <div className="contact-Left-side">
          <img src={ConstactImage} alt="some_image"></img>
        </div>

        <div className="contact-Rigth-side">
          <form
            id="form"
            action="https://formspree.io/f/xvkkljrl"
            method="POST"
            onSubmit={(e) => e.target.reset()}
          >
            <label for="username">Name</label>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            ></input>
            <label for="Email">Email</label>
            <input
              id="Email"
              type="email"
              name="email"
              required
              placeholder="Enter your email here"
            ></input>
            <label for="textarea">Message</label>
            <textarea
              required
              id="textarea"
              name="Write Your message here"
            ></textarea>
            <div class="input-group">
              <label for="rating">Rate Your Experience</label>
              <select id="rating" name="rating" required>
                <option value="" disabled selected>
                  Select rating
                </option>
                <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                <option value="4">⭐⭐⭐⭐ - Very Good</option>
                <option value="3">⭐⭐⭐ - Good</option>
                <option value="2">⭐⭐ - Average</option>
                <option value="1">⭐ - Poor</option>
              </select>
            </div>
            <button id="button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
