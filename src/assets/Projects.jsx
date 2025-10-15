import React from 'react'
import digi from './images/digital clock.png'
import pro from './images/pro.png'

const Projects = () => {
    return (
        <div>
            <div className='main-section-projects'>
                <div className='project-1'>
                    <div className="card mb-3" style={{ width: "30vw", height: "80vh" }}>
                        <img src={digi} className="card-img-top" alt="..." width={"100px"} height={"300px"} />
                        <div className="card-body">
                            <h2 className="card-title">LIGIT DIGITAL CLOCK</h2>
                            <h3>OVERFLOW...</h3>


                            <p className="card-text">The Digital Clock Project is a simple yet powerful application built using HTML, CSS, and JavaScript (or optionally integrated with Node.js for advanced features).
                                It displays the current time dynamically in real-time, updating every second.
                                The project demonstrates the core concepts of JavaScript such as DOM manipulation, setInterval(), and Date object usage.</p>

                            <button style={{ backgroundColor: "#381409", padding: "10px" }}><a href="https://kumar-t-chavan.github.io/Light-Digital-Clock/">SEE PROJECT ➡️</a></button>

                        </div>
                    </div>
                </div>





                {/* project no 2 */}

                <div className='project-1'>
                    <div className="card mb-3" style={{ width: "30vw", height: "80vh" }}>
                        <img src={pro} className="card-img-top" alt="..." width={"100px"} height={"250px"} />
                        <div className="card-body">
                            <h2 className="card-title">PERSONAL PORTFILO</h2>
                            <h3>OVERFLOW...</h3>


                            <p className="card-text">A **modern, responsive, and clean portfolio website** built using **React JS**, **React Router**, and **Boostrap CSS**.  
                        This project showcases personal information, skills, projects, and contact details in a beautiful UI.
</p>

                            <button style={{ backgroundColor: "#381409", padding: "10px" }}><a href="">SEE PROJECT ➡️</a></button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects
