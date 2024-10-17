import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ScrollToTop from "../ScrollToTop";

const Footer = () => {
  const hours = [
    { id: 1, day: 'Monday', time: '8:00 AM - 11:00 PM' },
    { id: 2, day: 'Tuesday', time: '8:00 AM - 11:00 PM' },
    { id: 3, day: 'Wednesday', time: '8:00 AM - 11:00 PM' },
    { id: 4, day: 'Thursday', time: '8:00 AM - 11:00 PM' },
    { id: 5, day: 'Friday', time: '8:00 AM - 11:00 PM' },
    { id: 6, day: 'Saturday', time: '8:00 AM - 11:00 PM' },
    { id: 7, day: 'Sunday', time: '9:00 AM - 00:00 PM' },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ScrollToTop/>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>+212696659663</span>
            </div>
            <div>
              <MdEmail />
              <span>hichamessaket17@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Morocco, Safi</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
