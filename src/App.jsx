
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 70 },
    { name: "JavaScript", level: 80 },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using HTML, CSS, Bootstrap and JavaScript.",
      demo: "#",
    },
   
    {
      title: "Gym Fitness App",
      description:
        "A gym management project built using Python, Django and Django REST Framework.",
      demo: "#",
    },
    {
      title: "HireSphere",
      description:
        "A job portal project built using Django REST Framework and React.",
      demo: "#",
    },
  ];

  function handleContactSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !question.trim()) {
      setMessage("Please enter your email and message.");
      return;
    }

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `From: ${email}\n\nMessage: ${question}`
    );

    window.location.href =
      `mailto:nafihnisar05@gmail.com?subject=${subject}&body=${body}`;

    setMessage("Your email application is opening.");
  }

  return (
    <div className={darkMode ? "portfolio dark-mode" : "portfolio"}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            My Portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li className="nav-item" key={item}>
                    <a
                      className="nav-link"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            <button
              className="btn btn-outline-light ms-lg-3"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1>
                Hello, I'm{" "}
                <span className="highlight">Muhammed Nafih</span>
              </h1>

              <p className="lead">
                Python Full Stack Developer | Web Designer
              </p>

              <div className="social-links my-4">
                <a
                  href="https://github.com/muhammednafih-04"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammed-nafih-b82b5a3b1/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:nafihnisar05@gmail.com"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>

              <a href="#projects" className="btn btn-primary btn-lg">
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn btn-warning btn-lg ms-2"
              >
                Download Resume
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/profile.jpeg"
                alt="Muhammed Nafih"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <p>
            I'm a passionate web developer who enjoys building
            responsive and modern websites using HTML, CSS,
            Bootstrap, JavaScript, Python and Django. I love
            learning new technologies and creating useful web
            applications.
          </p>

          <h3 className="mt-4">Education</h3>

          <ul className="education-list">
            <li>Bachelor of Computer Applications (BCA) — 2026</li>
            <li>Higher Secondary Education — 2023</li>
            <li>10th Standard — 2021</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding skills-section">
        <div className="container">
          <h2 className="section-title text-center">Skills</h2>

          <div className="row">
            {skills.map((skill) => (
              <div className="col-sm-6 col-lg-3 mb-4" key={skill.name}>
                <div className="skill-box">
                  <p>{skill.name}</p>

                  <div
                    className="progress"
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding">
        <div className="container">
          <h2 className="section-title text-center">Projects</h2>

          <div className="row">
            {projects.map((project) => (
              <div
                className="col-md-6 col-lg-3 mb-4"
                key={project.title}
              >
                <div className="card project-card h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>

                    <p className="card-text">
                      {project.description}
                    </p>

                    <a
                      href={project.demo}
                      className="btn btn-warning mt-auto align-self-start"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>

          <form onSubmit={handleContactSubmit} className="contact-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="question" className="form-label">
                Ask anything
              </label>

              <textarea
                id="question"
                className="form-control"
                rows="5"
                placeholder="Write your message"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {message && <p className="mt-3">{message}</p>}
          </form>

          <div className="mt-5">
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:nafihnisar05@gmail.com">
                nafihnisar05@gmail.com
              </a>
            </p>

            <p>
              <i className="bi bi-phone me-2"></i>
              <a href="tel:+919563131302">+91 9563131302</a>
            </p>

            <button
              className="btn btn-warning"
              onClick={() =>
                setMessage("Thank you for visiting my portfolio!")
              }
            >
              Say Hello
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-3">
        © 2026 Muhammed Nafih | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
