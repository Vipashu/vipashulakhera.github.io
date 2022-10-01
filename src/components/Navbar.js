import { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "react-scroll/modules/components/Link";
import logo from "../assets/img/logo.png";


export default function Navbar() {
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("header").style.backgroundColor = "#00101b";
        document.getElementById("header").style.paddingTop = "0";
        document.getElementById("header").style.opacity = "0.9";
        document.getElementById("header").style.borderRadius = "50px";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.paddingTop = "20px";
        document.getElementById("header").style.opacity = "1";
      }
    };
  }, []);

  return (
    <div className='Header' id="header">
      <a href="https://vipashulakhera.vercel.app">
        <img src={logo} alt={"logo"} className="logo" id="logo" />
      </a>
      {/* Nav Bar */}
      <nav className='NavBar'>
        <Link
          id="projects"
          to="projectView"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <button type="button" className="btn btn-outline-light ">
            Projects
          </button>
        </Link>
        <Link
          id="skills"
          to="skillView"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <button type="button" className=" btn btn-outline-light ">
            Skills
          </button>
        </Link>
        <Link id="connect" to="contact" smooth={true} duration={500}>
          <button type="button" className="btn btn-outline-light ">
            Let's Connect
          </button>
        </Link>
      </nav>
      {/* <Dropdown>*/}
      <nav className='NavBarMob'>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu variant="light" className='Dropdown'>
            <Link to="projectView" smooth={true} offset={-60} duration={500}>
              Projects
            </Link>
            <Link to="skillView" smooth={true} offset={-80} duration={500}>
              Skills
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Let's Connect
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
