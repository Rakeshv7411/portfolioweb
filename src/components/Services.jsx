import React from 'react'

function Services() {
  return (
    <div>
       <section className="service" id="service">
            <h2 className="heading">Our <span>Services</span></h2>
            <br />
            <div className="services-container">
                <div className="services-box">
                    <i className="bx bx-code-alt"></i>
                    <h3>Web Development</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae iste voluptatum consectetur incidunt dolores
                        possimus facere qui vitae mollitia quibusdam?
                    </p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="bx bxs-paint"></i>
                    <h3>Graphic Design</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae iste voluptatum consectetur incidunt dolores
                        possimus facere qui vitae mollitia quibusdam?
                    </p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="bx bx-bar-chart-alt"></i>
                    <h3>Digital Marketing</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae iste voluptatum consectetur incidunt dolores
                        possimus facere qui vitae mollitia quibusdam?
                    </p>
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services
