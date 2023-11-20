import React from 'react'
function About() {
  return (
    <div>
      
      <section className="about" id="about">
            <div className="about-img">
                <img src='about.png' alt="About Image" />
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae, animi dolore. Fugit possimus mollitia sint dolorum a
                    atque eveniet cum quisquam cupiditate, totam et quam
                    explicabo nostrum beatae optio dicta fuga magni? Possimus
                    numquam quos iusto ut, sapiente cumque nobis. Non eaque
                    voluptas mollitia voluptates labore?
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
        </section>
    </div>
  )
}

export default About
