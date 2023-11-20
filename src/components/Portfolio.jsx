import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function Portfolio() {

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
       <section className="portfolio" id="portfolio">
            <h2 className="heading">My <span>Projects</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src="portfolio1.jpg" alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit, est?
                        </p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src="portfolio2.jpg" alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit, est?
                        </p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src="portfolio3.jpg" alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit, est?
                        </p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src="portfolio4.jpg" alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit, est?
                        </p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src="portfolio5.jpg" alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit, est?
                        </p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src="portfolio6.jpg" alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit, est?
                        </p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Portfolio
