import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `Passionate and skilled React.js and Node.js developer with hands-on experience in building dynamic web applications. Adept at crafting responsive user interfaces with React.js and developing scalable backend solutions with Node.js. Proficient in debugging, troubleshooting, and optimizing performance to deliver seamless user experiences. A collaborative problem-solver with a strong foundation in full-stack development, API integration, and database management. Always eager to learn and innovate in the ever-evolving tech landscape.`;

export const ABOUT_TEXT = `Worked as a React.js and Node.js intern, contributing to the development of dynamic web applications. Assisted in building interactive user interfaces with React.js and developing robust backend services with Node.js. Debugged and troubleshot issues to enhance performance and ensure a seamless user experience. Collaborated with the team to implement new features, optimize APIs, and maintain code efficiency. Gained hands-on experience in full-stack development, database management, and performance optimization.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Software Developer",
    company: "Maxgen Technologies Pvt. Ltd.",
    description:
      "Developed dynamic web applications with Node.js, assisted in identifying and fixing bugs to optimize performance and improve user experience. Collaborated with the development team to implement new features, enhance functionality, and maintain code efficiency. Gained hands-on experience in backend development, API integration, and performance optimization.",
    technologies: ["Nodejs", "Mongodb", "JavaScript", "Css" ,"Html"],
  },
  {
    year: "2023 - 2024",
    role: "Intern",
    company: "Desire Infotech",
    description:
      "Contributed to dynamic web applications using React.js. Assisted with debugging and troubleshooting to ensure optimal performance and seamless user experiences.",
    technologies: ["React.js", "JavaScript", "Css", "Html5"],
  }, 
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project1,
    description:
      " A responsive portfolio built with React.js, styled using Tailwind CSS, and enhanced with smooth and interactive animations using the Framer Motion library. Designed to showcase projects and skills effectively across all devices.",
    technologies: ["React.js", "Tailwind Css", "Framer Motion"],
  },
  {
    title: "Weather-site",
    image: project2,
    description:
      "Developed a Weather Forecasting App using React.js that fetches real-time weather data from the OpenWeatherMap API.The application allows users to search for weather conditions in any city and displays temperature, weather status, and icons dynamically based on the fetched data",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "OpenWeather Api",
      "React-icons",
    ],
  },
  {
    title: "TechStar",
    image: project3,
    description:
      " Developed a responsive website using React.js and ReactRouterDOM for seamless navigation. The application includes multiple sections such as Home, Services, and Contact, ensuring a structured user experience with reusable components",
    technologies: ["React.js", "Scss"],
  },
];

export const CONTACT = {
  address: "Sola Ahmedabad, Gujarat",
  phoneNo: "+91 9313423713",
  email: "satyambarot2002@gmail.com",
};
