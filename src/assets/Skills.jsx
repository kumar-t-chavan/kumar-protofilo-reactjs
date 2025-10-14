import React, { useState } from 'react'
import html from './images/html.png'
import css from './images/css-3.png'
import javascript from './images/js.png'
import atom from './images/atom.png'
import boost from './images/bootstrap.png'
import bash from './images/git.png'
import hub from './images/github-sign.png'
import nod from './images/node-js.png'
import mysql from './images/mysql.png'
import cp from './images/c.png'
import cm from './images/letter-c.png'
import op from './images/operating.png'




const Skills = () => {

    const [html5,sethtml] = useState(70);
    const [css3,setcss] = useState(80);
    const [java,setjava] = useState(50)
    const [react,setreact] = useState(65)
    const [boostrap,setboostrap] = useState(35)
    const [git,setgit] = useState(90)
    const [github,setgithub] = useState(85)
    const [node,setnode]= useState(10)
    const [sql,setsql] = useState(95)
    const [cpp,setcpp]= useState(31)
    const [c,setc] = useState(65)
    const [operating,setoperating] = useState(18)


  return (
    <div>
      <div className='main-skill-section'>

        <div className='box-1'>
            <div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={html} className="card-img-top p-4" alt="..." height={"227px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">HTML : {html5} %</h5>
    <progress value={html5} max={100}></progress>
    <p className="card-text">Here are some of my technical skills that I have learned and practiced so far</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

     <div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={css} className="card-img-top p-4" alt="..." height={"200px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">CSS : {css3}%</h5>
    <progress value={css3} max={100}></progress>
    <p className="card-text">CSS is used to design and style web pages. It makes websites look attractive and responsive on all devices.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


     <div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={javascript} className="card-img-top p-4" alt="..." height={"200px"} width={"10px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">JAVASCRIPT : {java}%</h5>
    <progress value={java} max={100}></progress>
    <p className="card-text">JavaScript makes web pages interactive and dynamic. It helps add animations, validations, and smart features to websites.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


  <div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={atom} className="card-img-top p-4" alt="..." height={"222px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">REACT JS : {react} %</h5>
    <progress value={react} max={100}></progress>
    <p className="card-text">React JS is a JavaScript library for building fast, dynamic, and reusable user interfaces for web applications.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>
        <div className='box-2'>
            <div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={boost} className="card-img-top p-4" alt="..." height={"210px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">BOOSTRAP : {boostrap} %</h5>
    <progress value={boostrap} max={100}></progress>
    <p className="card-text">Bootstrap is a front-end framework that helps create responsivewebsites easily using pre-built CSS and JS components.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={bash} className="card-img-top p-4" alt="..." height={"210px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">GIT : {git}%</h5>
    <progress value={git} max={100}></progress>
    <p className="card-text">Git is a version control system that helps track code changes and collaborate with other developers efficiently.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={hub} className="card-img-top p-4" alt="..." height={"230px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">GITHUB : {github}%</h5>
    <progress value={github} max={100}></progress>
    <p className="card-text">GitHub is an online platform to store, share, and collaborate on coding projects using Git.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>



<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={nod} className="card-img-top p-4" alt="..." height={"228px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">NODE JS : {node}%</h5>
    <progress value={node} max={100}></progress>
    <p className="card-text">Node.js allows JavaScript to run on the server side to build fast and scalable web applications.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className='box-3'>
<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={mysql} className="card-img-top p-4" alt="..." height={"227px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">MYSQL : {sql}%</h5>
    <progress value={sql} max={100}></progress>
    <p className="card-text">MySQL is a database system used to store, organize, and manage data using SQL queries..</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>




<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={cp} className="card-img-top p-4" alt="..." height={"227px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">C++ : {cpp}%</h5>
    <progress value={cpp} max={100}></progress>
    <p className="card-text">C++ is a programming language used to build high-performance applications</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>



<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={cm} className="card-img-top p-4" alt="..." height={"231px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">C : {c}%</h5>
    <progress value={c} max={100}></progress>
    <p className="card-text">C is a programming language used for system-level programming and building efficient applications.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card" style={{width: "18rem", height: "30rem"}}>
  <img src={op} className="card-img-top p-4" alt="..." height={"255px"} width={"20px"} style={{marginTop:"20px"}}/>
  <div className="card-body">
    <h5 className="card-title">OPERATING SYSTEM : {operating}%</h5>
    <progress value={operating} max={100}></progress>
    <p className="card-text">An Operating System manages hardware and software.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            
        </div>
      </div>
    </div>
  )
}

export default Skills
