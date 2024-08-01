const soheyl = document.getElementById("soheyl");
const soheylDesc = document.getElementById("soheyl-desc");
const eduDesc = document.getElementById("edu-desc");
const eduTitle = document.getElementById("edu-title");
const skillsDesc = document.getElementById("skills-desc");
const otherSkillsDesc = document.getElementById("other-skills-desc");

const data = {
  soheyl: {
    description:
      "I'm passionate about creating beautiful and user-friendly web experiences. As a front-end developer, I enjoy turning ideas into interactive websites and applications. My journey started with HTML, CSS, and JavaScript, I continue learning and improving myself everyday to become a professional developer.",
  },
  education: {
    description:
      "I am really attracted computers and computer programming, So despite studing english language in university, I study a lot about computers and programming; I want to start my career in this path and continue growing.",
    titles: ["English Translation: since 1402"],
  },
  skills: {
    description:
      "I started Web development with HTML and CSS, Then I started learning javaScrip.",
  },
  otherSkills: {
    description:
      "I Learned SaSS and Git and some other useful tools; Currently i am learning 3rd-party frameworks like React and Tailwind.",
  },
};

soheylDesc.textContent = data.soheyl.description;
skillsDesc.textContent = data.skills.description;
otherSkillsDesc.textContent = data.otherSkills.description;
