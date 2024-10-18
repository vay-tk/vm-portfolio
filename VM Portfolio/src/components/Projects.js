import React from 'react';

function Projects() {
  return (
    <section id="project">
      <h2>PROJECTS</h2>
      <h6 style={{textAlign: "center", fontSize: "3vw", paddingBottom: "1vh"}}>
        <span style={{color: "burlywood"}}>HTML</span>
        <span style={{color: "#2edeff"}}>CSS</span>
        <span style={{color: "greenyellow"}}>JS</span>
      </h6>
      <div className="container">
        <div className="project_container">
          <ProjectCard 
            image="images/project1.png"
            title="Tribute Website"
            link="https://vm-html-css-js-project.vercel.app/Project%201/index.html"
          />
          <ProjectCard 
            image="images/Project2.png"
            title="Job Application"
            link="https://vm-html-css-js-project.vercel.app/Project%202/index.html"
          />
          <ProjectCard 
            image="images/project image/parallax website.png"
            title="Parallax Website"
            link="https://vm-html-css-js-project.vercel.app/Project%203/index.html"
          />
          <ProjectCard 
            image="images/project image/Screenshot 2024-10-06 145xdc300.png"
            title="Calculator"
            link="https://vm-calculator-omega.vercel.app/"
          />
        </div>
        <div id="more">
          <a href="https://vaibhavr21.github.io/Projects--HTML-CSS-JavaScript/">
            <h1 style={{color: "rgb(191, 238, 53)"}}>
              Explore <br />
              <span style={{color: "cyan"}}>More Projects</span>
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ image, title, link }) {
  return (
    <div className="grid_item">
      <div className="card">
        <img loading="lazy" src={image} alt={title} />
        <a href={link}>
          <div className="card_content">
            <h3>{title}</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;