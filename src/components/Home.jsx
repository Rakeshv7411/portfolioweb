import React, { useEffect, useRef } from 'react';
import '../css/style.css'; // Import your CSS styles
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
function Home() {
    /*==================== toggle icon navbar ====================*/
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    const options = {
        strings: [" Frontend Developer", "Java Developer", "Problem Solver "],
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    };

    const typedRef = useRef(null);

    useEffect(() => {
        // Initialize Typed.js when the component mounts
        typedRef.current = new Typed(".multiple-text", options);

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
        ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
        ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

        return () => {
            // Clean up Typed.js when the component unmounts
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, []);


    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Rakesh Verma</h1>
                    <h3>
                        And I'm a -
                        <span className=" multiple-text"></span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia maiores fugiat ipsa voluptates, iure error
                        doloremque consequatur?
                    </p>
                    <div className="social-media">
                        <a href="https://www.facebook.com/" target='blank'><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                        <a href="#"><i className="bx bxl-instagram-alt"></i></a>
                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                    </div>
                    <a href="#" className="btn">Download CV</a>
                </div>

                <div className="home-img">
                    <img src='home.png' alt="Home Image" />
                </div>
            </section>
        </div>
    )
}

export default Home
