import React from 'react'

const About = () => {
  return (
    <div>
      <div className='About-main-section'>
        <div className='hero-about'>
          <div className='information'>
            <h3>NAME : KUMAR CHAVAN</h3>
            <h3>AGE : 18</h3>
            <h3>PROFESSION : FRONTEND DEVELOPER</h3>
            <h3>EMAIL : kumartchavan1552@gmail.com 📩</h3>
            <h3>LOCATION : OMERGA DHARASHIV 📍</h3>
            <h3>EDUCATION : BSC IT</h3>
            <h3>CURRENTLY LEARNING : NODE.JS</h3>
          </div>

          <div className='summary'>
             <p>
            Hi, I’m <strong>Kumar Chavan</strong>, a passionate Frontend Developer. <br />
            I have a strong foundation in <strong>HTML, CSS, and React</strong> <br /> and I enjoy creating responsive, user-friendly web interfaces. <br />
            I’m familiar with modern tools like <strong>React and Git</strong> and I’m <br /> always eager to learn new technologies.
            I’m  looking for <br /> opportunities to grow and contribute to real-world projects.
          </p>

          <div className='cv'>
            <button>
              <a href="" download>Download CV</a>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
