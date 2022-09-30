import React, {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import projectIcon1 from '../assets/img/projectIcon1.png';
import projectIcon2 from '../assets/img/projectIcon2.png';
import projectIcon3 from '../assets/img/projectIcon3.png';
import projectIcon4 from '../assets/img/projectIcon4.png';


export default function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div id="projects">
    <div className='projectView' id='id'>
    <h1 className='ViewHeading'>My Projects </h1>
    {/* Cards */}
    <div className='ProjectCards'>
      <div className='Column'>
        <a
          href={'https://github.com/Vipashu/Blog-app'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="zoom-in">
            <p>Blog App</p>
            <img src={projectIcon1} alt="BlogApp"></img>
          </div>
        </a>
        <a
          href={'https://github.com/Vipashu/Chat-room-app'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="zoom-in">
            <p>Chat Room App</p>
            <img src={projectIcon2} alt="ChatRoom"></img>
          </div>
        </a>
      </div>
      <div className='Column'>
        <a
          href={'https://github.com/Vipashu/weather-app'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="zoom-in">
            <p>Weather App</p>
            <img src={projectIcon3} alt="WeatherApp"></img>
          </div>
        </a>
        <a
          href={'https://github.com/Vipashu/Joke-Teller'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="zoom-in">
            <p>Joke Teller</p>
            <img src={projectIcon4} alt="Joketeller"></img>
          </div>
        </a>
      </div>
    </div>
  </div>
  </div>
  );
}
