import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className='flex'>
        {/* Contact */}
        <div className='mail'>
          <h4>Feel free to contact me!!</h4>
          <div>
            <p>
              <a href="mailto:vipashusharma21@gmail.com">vipashusharma21@gmail.com</a>
              <br></br>
              Chandigarh, India
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className='Social'>
          <h4>Links</h4>
          <div className='SocialBtn'>
            <a
              href={"https://github.com/Vipashu"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='github'></div>
            </a>
            <a
              href={"https://linkedin.com/in/vipashu-lakhera"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='linkedin'></div>
            </a>
            <a
              href={"https://instagram.com/vipashulakhera"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='instagram'></div>
            </a>
            <a
              href={"https://twitter.com/vipashu21"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='twitter'></div>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <hr></hr>
      <p>© Made with ❤️ by Vipashu</p>
    </div>
  );
}
