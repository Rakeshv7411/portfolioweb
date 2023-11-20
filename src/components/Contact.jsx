import React from 'react'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Contact() {
  
  useEffect(() => {
      
    // Initialize ScrollReveal
    ScrollReveal({
        // reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
        ".home-img, .services-container, .portfolio-box, .contact form",
        { origin: "bottom" }
    );

}, []);
  return (
    <div>
      <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>

            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div className="input-box">
                    <input type="tel" placeholder="Mobile Number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                ></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    </div>
  )
}

export default Contact
