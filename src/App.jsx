import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    
    <> 
<html>
  <body>
    <head>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    </head>
    <header>
        <nav>
            <h2 class="logo">My Portfolio</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <section id="home" class="hero">
            <div class="hero-text">
                <h1>Hello, I'm <span>Muhammed Nafih</span></h1>
                <p>Frontend Developer | Web Designer | Student</p>
                <i class="fas-fa-cloud"></i>
                <a href="#projects" class="btn">View My Work</a>
            </div>
            <div class="profile">
              <img src="profile.jpeg" alt="profile" height="450" width="450"></img>
            </div>
        </section>
    </header>
  

    <section id="about" class="about">
        <h2>About Me</h2>
        <p>
            I am a passionate web developer who loves creating beautiful and
            responsive websites using HTML, CSS, and JavaScript.
        </p>
    </section>

    <section id="skills" class="skills">
        <h2>Skills</h2>
        <div class="skill-box">
            <div><a href="#home">HTML</a></div>
            <div><a href="#home">CSS</a></div>
            <div><a href="#home">JavaScript</a></div>
            <div><a href="#home">Bootstrap</a></div>
            <div><a href="#home">React</a></div>
        
    </div>
    </section>

    <section id="projects" class="projects">
        <h2>Projects</h2>

        <div class="project-container">

            <div class="card">
                <h3>Portfolio Website</h3>
                <p>A personal portfolio made using HTML and CSS.</p>
            </div>

            <div class="card">
                <h3>Weather App</h3>
                <p>Displays live weather using an API.</p>
            </div>

            <div class="card">
                <h3>Calculator</h3>
                <p>A responsive calculator built with JavaScript.</p>
            </div>

        </div>
    </section>
     <section id="contact" class="contact">
        <h2>Contact Me</h2><br></br>
        <b><p>phone:9563131302</p></b>
        <b><p>Email:nafihnisar05@gmail.com</p></b>
        
    </section>

    <footer>
        <p>© 2026 Muhammed Nafih | All Rights Reserved</p>
    </footer>
    </body>
   </html>
   </>
  )
  }
     
export default App
