import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p><a href="mailto:aaishwarya388@gmail.com" data-cursor="disable">Email — aaishwarya388@gmail.com</a></p>
            <p><a href="tel:+919177765219" data-cursor="disable">Phone — +91 917-776-5219</a></p>
            <h4>Education</h4>
            <p>B.Tech Computer Science Engineering, Malla Reddy Engineering College — 2016–2020 · CGPA 8.03</p>
          </div>
          <div className="contact-box">
            <h4>Certifications</h4>
            <a href="#" data-cursor="disable" className="contact-social">Agile Explorer <MdArrowOutward /></a>
            <a href="#" data-cursor="disable" className="contact-social">ITIL Foundation <MdArrowOutward /></a>
            <a href="#" data-cursor="disable" className="contact-social">ITIL Foundation <MdArrowOutward /></a>
            <a href="#" data-cursor="disable" className="contact-social">Principles of Major Incident Management 2024 <MdArrowOutward /></a>
            <a href="#" data-cursor="disable" className="contact-social">Principles of Problem Management 2024 <MdArrowOutward /></a>
          </div>
          <div className="contact-box">
            <h2>IT Specialist <br /> at <span>Kyndryl</span></h2>
            <h5>Hyderabad, India &nbsp; <MdCopyright /> 2025</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
