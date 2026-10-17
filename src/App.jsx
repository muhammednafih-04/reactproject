import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    
    <> 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Portfolio</title>

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<body>
   
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div class="container">

    <a class="navbar-brand fw-bold" href="#">
        My Portfolio
    </a>

    <button class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>

        <!-- Theme Toggle -->
        <button id="themeToggle"
            class="btn btn-outline-light ms-lg-3">
            🌙
        </button>

    </div>
</div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero">

<div class="container">

    <h1>
        Hello, I'm
        <span class="highlight">Muhammed Nafih</span>
    </h1>

    <p class="lead">
        Frontend Developer | Web Designer
    </p>

    <div class="social-links my-4">
        <a href="#"><i class="bi bi-github"></i></a>
        <a href="#"><i class="bi bi-linkedin"></i></a>
        <a href="#"><i class="bi bi-envelope-fill"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
    </div>

    <a href="#projects"
        class="btn btn-primary btn-lg">
        View Projects
    </a>

    <a href="resume.pdf"
        download
        class="btn btn-warning btn-lg ms-2">
        Download Resume
    </a>

</div>
<div class="col-lg-6 text-center">
                <img src="profile.jpeg"
                     alt="Profile Picture"
                     class="profile-img">
            </div>
</section>

<!-- About -->
<section id="about" class="py-5">
<div class="container">

    <h2 class="text-left mb-4;">
        About Me
    </h2>

    <p class="text-left">
        I'm a passionate web developer who enjoys building
        responsive and modern websites using HTML, CSS,
        Bootstrap, and JavaScript. I love learning new
        technologies and creating beautiful user experiences.
    </p>
    <h2>Education</h2>
    <ul>
        <li>Bachelor of computer Application Year:2026</li>
        <li>12th passed out in Year:2023</li>
        <li>10th board passed out in year:2021</li>
    </ul>

</div>
</section>

<!-- Skills -->
<section id="skills" class="py-5 bg-light">
<div class="container">

    <h2 class="text-center mb-5">
        Skills
    </h2>

    <div class="row text-center">

        <div class="col-md-3 mb-3">
            <div class="skill-box">
                <p>HTML</p>
             <div class="progress">
             <div class="progress-bar" style="width:90%"></div>
             </div>
          </div>
        </div>

        <div class="col-md-3 mb-3">
            <div class="skill-box">
                <p>CSS</p>
             <div class="progress">
    <div class="progress-bar" style="width:85%"></div>
  </div>
</div>
</div>
       <div class="col-md-3 mb-3">
            <div class="skill-box">
                <p>Bootstrap</p>
             <div class="progress">
      <div class="progress-bar" style="width:70%"></div>
      </div>
      </div>
      </div>

           <div class="col-md-3 mb-3">
            <div class="skill-box">
                <p>JavaScript</p>
             <div class="progress">
        <div class="progress-bar" style="width: 80%"></div>
     </div>
     </div>

    </div>

</div>
</section>

<!-- Projects -->
<section id="projects" class="py-5">
<div class="container">

    <h2 class="text-center mb-5">
        Projects
    </h2>

    <div class="row">

        <div class="col-md-4 mb-4">
            <div class="card project-card h-100">
                <div class="card-body">
                    <h5 class="card-title">
                        Portfolio Website
                    </h5>
                    <p class="card-text">
                        Personal portfolio built using
                        HTML, CSS, Bootstrap and JavaScript.
                    </p><br><br><br><br>
                    <a href="#" class="btn btn-warning">Live demo</a>
                </div>
            </div>
        </div>


        <div class="col-md-4 mb-4">
            <div class="card project-card h-100">
                <div class="card-body">
                    <h5 class="card-title">
                        To-Do App
                    </h5>
                    <p class="card-text">
                        Task manager built using
                        JavaScript and localStorage.
                    </p><br><br><br><br>
                       <a href="#" class="btn btn-warning">Live demo</a>
                </div>
            </div>
        </div>

    </div>

</div>
</section>
 <!--form-->
     <div class="container">
  <h2>for Contact</h2>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
      <label for="comment">Ask anything:</label>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button><br><br>
  </form>
</div>

<!-- Contact -->
<section id="contact" class="py-5 bg-dark text-white">
<div class="container text-left">

    <h2>Contact Me</h2>

    <p><a href="#"><i class="bi bi-envelope-fill"></i></a>Email: nafihnisar05@gmail.com</p>

     <p><a href="#"><i class="bi bi-phone"></i></a>Phone: +91 9563131302</p>

    <button 
        class="btn btn-warning"
        onclick="showMessage()">
        Say Hello
    </button>

    <p id="message" class="mt-3"></p>

</div>
</section>
<!-- Footer -->
<footer class="bg-dark text-white text-center py-3">
    © 2026 Muhammed Nafih | All Rights Reserved
</footer>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script>
// Contact Button
function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for visiting my portfolio!";
}

// Dark / Light Mode
const toggleBtn =
document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = "☀️";
        localStorage.setItem("theme","dark");
    } else {
        toggleBtn.innerHTML = "🌙";
        localStorage.setItem("theme","light");
    }
});

// Remember Theme
window.onload = () => {

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerHTML = "☀️";
    }
};
</script>

</body>
</html>
</>
)
}
export default App