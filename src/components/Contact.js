import React, { useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";
import emailjs  from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  
    const form =useRef();
     const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_38hagqg', 'template_bn79dbr', form.current, 'R7_WrB5-XQOu3sXfz')
        e.target.reset();
      };
    

  return (
    <div>
      <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt="" />
                </Col>
                <Col md={6}>
                  <h2>Get In Touch</h2>
                  <form  ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className='px-1'>
                        <input className='logo' type="text" name='firstName' placeholder='First Name'/>
                      </Col>
                      <Col sm={6} className='px-1'>
                        <input type="text" name='lastName' placeholder='Last Name'/>
                      </Col>
                      <Col sm={6} className='px-1'>
                        <input type="email" name='email' placeholder='Email Address'/>
                      </Col>
                      <Col sm={6} className='px-1'>
                        <input type="tel" name='phone' placeholder='Phone No.'/>
                      </Col>
                      <Col>
                      <textarea rows="6" name='message' placeholder="Message"></textarea>
                      <button type='submit'><span>Send</span></button>
                      </Col>
                    </Row>
                  </form>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
