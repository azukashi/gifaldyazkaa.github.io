// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Gifaldy Azka",
  title: "Hi, I'm Gifaldy!",
  subTitle: emoji(
    "A passionate Front-end Website Developer. Having an experience of building Web  with JavaScript,  Svelte, Node.js, and some other cool libraries and frameworks."
  ),
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gifaldyazkaa",
  gmail: "gifaldyazka@yahoo.com",
  gitlab: "https://gitlab.com/gifaldyazkaa",
  facebook: "https://www.facebook.com/falcxx",
  instagram: "https://instagram.com/falcxxdev",
  twitter: "https://twitter.com/gifaldyazkaa",
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I'm doing",
  subTitle: "Just a Front-end developer which want to learn every tech stack",
  skills: [
    emoji("⚡ Developing interactive Front end / User Interfaces for websites"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "discord-js",
      fontAwesomeClassname: "fab fa-discord",
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fas fa-terminal",
    },
  ],
  display: true,
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Front-end",
      progressPercentage: "70%",
    },
    {
      Stack: "Back-end",
      progressPercentage: "30%",
    },
    {
      Stack: "Discord Bots",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Front-end Developer",
      company: "Front-end Developer",
      companylogo: require("./assets/images/svelte.png"),
      date: "December 19, 2020 - Present",
      desc: "Being a Front-end Developer. First-time learned HTML and CSS. Now currently learning React, Vue, and Svelte.",
    },
    {
      role: "Discord Bot Development",
      company: "Discord Bot Development",
      companylogo: require("./assets/images/discord.png"),
      date: "January 14, 2021 - Present",
      desc: "Started Developing a Discord Bots with Javascript and Discord.js Library. Experienced with Multipurpose Discord Bots",
    },
  ],
};

const openSource = {
  showGithubProfile: "true",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's get a touch with me! Wanna say hi? Feel free to reach me.",
  number: "+62 859-5072-4294",
  email_address: "gifaldyazka@yahoo.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
};
