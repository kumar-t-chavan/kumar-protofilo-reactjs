import React from 'react'
import digi from './images/digital clock.png'
import pro from './images/pro.png'
import pay from './images/phonepay.png'
import calc from './images/CALC.png'
const Projects = () => {
    return (
        <div>
            <div className='main-section-projects'>
                <div className='project-1'>
                    <div className="card mb-3 main-card" style={{ width: "30vw", height: "80vh" }}>
                        <img src={digi} className="card-img-top" alt="..." width={"100px"} height={"250px"} />
                        <div className="card-body">
                            <h2 className="card-title">LIGIT DIGITAL CLOCK</h2>
                            <h3>OVERFLOW...</h3>


                            <p className="card-text">The Digital Clock Project is a simple yet powerful application built using HTML, CSS, and JavaScript (or optionally integrated with Node.js for advanced features).
                                It displays the current time dynamically in real-time, updating every second.
                                </p>

                            <button style={{ backgroundColor: "#381409", padding: "10px" }}><a href="https://kumar-t-chavan.github.io/Light-Digital-Clock/">SEE PROJECT ➡️</a></button>

                        </div>
                    </div>


                       {/* project no 2 */}

             
                    <div className="card mb-3" style={{ width: "30vw", height: "80vh" }}>
                        <img src={pro} className="card-img-top" alt="..." width={"100px"} height={"250px"} />
                        <div className="card-body">
                            <h2 className="card-title">PERSONAL PORTFILO</h2>
                            <h3>OVERFLOW...</h3>


                            <p className="card-text">A **modern, responsive, and clean portfolio website** built using **React JS**, **React Router**, and **Boostrap CSS**.
                                This project showcases personal information, skills, projects, and contact details in a beautiful UI.
                            </p>

                            <button style={{ backgroundColor: "#381409", padding: "10px" }}><a href="https://68ef2bc5b1ebe8365c49eb83--chic-swan-fd9651.netlify.app/">SEE PROJECT ➡️</a></button>

                        </div>
                    </div>
               
                </div>





                {/* project no 2 */}

                <div className='project-2'>
                    <div className="card mb-3" style={{ width: "30vw", height: "80vh" }}>
                        <img src={pay} className="card-img-top" alt="..." width={"100px"} height={"250px"} />
                        <div className="card-body">
                            <h2 className="card-title">PHONEPAY 💰</h2>
                            <h3>OVERFLOW...</h3>


                            <p className="card-text">This is a simple project created using HTML, CSS, and JavaScript to demonstrate how the if-else condition works in JavaScript.
It checks a user’s input and displays a message based on the condition.
Example: Checking whether a user is eligible to vote based on their age.
                            </p>

                            <button style={{ backgroundColor: "#381409", padding: "10px" }}><a href="https://68d5429011ad2100a28b7377--phonepay-a.netlify.app/">SEE PROJECT ➡️</a></button>

                        </div>
                    </div>


                    <div className="card mb-3" style={{ width: "30vw", height: "80vh" }}>
                        <img src={calc} className="card-img-top" alt="..." width={"100px"} height={"250px"} />
                        <div className="card-body">
                            <h2 className="card-title">CALCULATOR </h2>
                            <h3>OVERFLOW...</h3>


                            <p className="card-text">This is a static calculator layout created entirely using HTML and CSS.
It demonstrates the visual design of a calculator with buttons, display screen, and a responsive layout.
This project focuses on UI design and CSS styling without using any JavaScript functionality.
                            </p>

                            <button style={{ backgroundColor: "#381409", padding: "10px" }}><a href="https://calculatorblack.netlify.app/">SEE PROJECT ➡️</a></button>

                        </div>
                    </div>
                
                </div>






              


            </div>
        </div>
    )
}

export default Projects
