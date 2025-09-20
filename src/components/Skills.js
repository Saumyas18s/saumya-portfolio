import React from 'react';
import './Skills.css';



const Skills = () => {
  // All unique skills in a single array
  const allSkills = [
  // 🚀 Programming Languages
  { name: "Java", logo: "https://img.icons8.com/?size=512&id=13679&format=png" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },

  // 🎨 Frontend Development
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },

  // ⚙️ Backend Development
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },

  // 🗄️ Databases
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  // ☁️ Cloud & ML/AI
  { name: "AWS", logo: "https://www.svgrepo.com/show/331300/aws.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
  { name: "LangChain", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.65.0/files/light/langchain-text.png" },

  // 🎨 Design Tools
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", logo: "https://cdn.brandfetch.io/id9mVQlyB1/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1725863485997" },
  { name: "Adobe Photoshop", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Adobe_Photoshop_CC_icon.svg" },

  // 🛠️ Version Control & Collaboration
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];


  const certifications = [
    {
      title: "UI/UX Design Specialization - Udemy",
      link: "https://www.udemy.com/certificate/UC-990a39d6-3774-42d8-9149-7161d17a2596/" 
    },
    {
      title: "TCS iON Career Edge – Young Professional",
      link: "https://drive.google.com/file/d/1w9tVIEntC7CAAa96w1wK2v-a5Xrg5JJ3/view?usp=sharing" 
    },
    {
      title: "Complete Web Development Course – Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6b6e9e9a-4aa3-469f-9338-72c2f8236a6a.pdf" 
    },
    {
      title: "The Complete Python Bootcamp – Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a9adc786-f888-4e2f-895a-723c3d8cc4f2.pdf" 
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      link: "https://drive.google.com/file/d/1fLNVWHlN7qp6C6MP4zpWg7Rb9i9N_70O/view?usp=sharing" 
    },
    {
      title: "AWS Cloud Technical Essentials – Coursera",
      link: "https://coursera.org/share/a738528f155d7fcdf85e107d42328be4"
    },
    {
      title: "HTML, CSS, JavaScript, BootCamp, Python – Infosys Springboard  ",
      link:"https://drive.google.com/drive/folders/1NTqVdezCbtIyGaoeBE2y--0uI68ptwDU"
    },
    {
      title: "HTML, CSS, JavaScript, BootCamp, Python – Infosys Springboard  ",
      link:"https://drive.google.com/drive/folders/1NTqVdezCbtIyGaoeBE2y--0uI68ptwDU"
    },
    {
      title: "HTML, CSS, JavaScript, BootCamp, Python – Infosys Springboard  ",
      link:"https://drive.google.com/drive/folders/1NTqVdezCbtIyGaoeBE2y--0uI68ptwDU"
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h1 className="section-title fade-in-up">Technical Skills</h1>
        
        <div className="skills-unified-grid">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill-item fade-in-up" style={{animationDelay:` ${index * 0.05}s`}}>
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="skill-icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="skill-label">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="certifications-title fade-in-up">Certifications & Achievements</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="cert-icon">🏆</div>
                <div className="cert-content">
                  <p>{cert.title}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-certificate-btn"
                  >
                    📄 View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;