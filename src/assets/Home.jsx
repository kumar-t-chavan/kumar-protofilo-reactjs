import React from 'react'
import photo from './images/photo.png'
import {Link} from 'react-router-dom'
import github from './images/github.png'
import instagram from './images/instagram.png'
import youtube from './images/youtube.png'
import linkedin from './images/linkedin.png'
import CV from './KUMAR CV.pdf'
const Home = () => {
  return (
    <div>
      <div className='Main-Container-Home'>
        {/* <div className='Navbar'>
          <nav>
            <span className='logo'>
              <h1>ProtoFolio</h1>
            </span>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Skills</Link></li>
              <li><Link to="/">Participate</Link></li>
              <li><Link to="/">Achievement</Link></li>
              <li className='contact'><Link to="/">Contact</Link></li>
            </ul>
          </nav>
        </div> */}


        {/* section hero */}

        <div className='section-hero'>
          <div className='reading-profile'>
        <h2 className='h2'> Hey I'm KUMAR</h2>
        <h1 className='h1'> I'm a <samp></samp></h1>
        <p className='para'>"I am a passionate frontend developer with a strong foundation <br /> in HTML CSS and React I enjoy creating responsive and user-friendly <br /> web interface I'm familliar  with modern tools like REact and Git <br /> and I'm  always eager to learn new Tecnologies I'm looking for <br /> opportunities to grow and contribute to real-world projects".</p>

        <div className='icon-services'>
         <div className='look'> <a href="https://github.com/kumar-t-chavan"><img src={github} alt="" height={"40px"} /></a></div>
        <div className='look'>  <a href="https://www.linkedin.com/in/kumar-chavan1552/" ><img src={linkedin} alt="" height={"40px"} /></a></div>
          <div className='look'><a href="https://www.instagram.com/kumar_chavan__01/" ><img src={instagram} alt="" height={"40px"}/></a></div>
        <div className='look'>  <a href="https://www.youtube.com/" ><img src={youtube} alt="" height={"40px"}/></a></div>
        </div>


        <div className='down'>
              <button className='btn-512'>
                        <a href={CV} download>Download CV</a>
                      </button>
        </div>
          </div>

          <div className='photo'>

    
      <img src={photo} className='img' alt="photo" />
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
