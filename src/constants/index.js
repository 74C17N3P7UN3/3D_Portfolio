import {
   // Experiences
   // Projects
   crowdfunding,
   metaversus,
   hoobank,
   // Services
   backend,
   mobile,
   program,
   web,
   // Technologies
   cpp,
   css,
   expo,
   git,
   html,
   java,
   javascript,
   php,
   python,
   nodejs,
   reactjs,
   tailwind,
   threejs,
} from '../assets'

const experiences = [
   {
      title: "C/C++ Developer",
      company_name: "@school",
      icon: cpp,
      iconBg: "#383E56",
      date: "Oct 2020 - Jun 2022",
      points: [
         "Learning the vary basics of low-level programming in C/C++.",
         "Collaborating with schoolmates on two real-life projects.",
         "Using my knowledge to write clean and understandable code.",
         "Participating in coding contests and tutoring.",
      ],
   },
   {
      title: "Web Developer",
      company_name: "@school",
      icon: html,
      iconBg: "#383E56",
      date: "Sep 2021 - Dec 2022",
      points: [
         "Learning the very basics of web development with HTML, CSS and later JS.",
         "Creating simple projects to solve real-life problems.",
         "Learning server-side requests handling with PHP and MySQL async calls.",
         "Shipping a mailing website built by myself as a personal project.",
      ],
   },
   {
      title: "React.js Developer",
      company_name: "@home",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
         "Self-learning to develop web applications using React.js and related technologies.",
         "Learning to divide into simple step a complex design and trying to recreate it.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
   },
   {
      title: "React Native Developer",
      company_name: "@home",
      icon: expo,
      iconBg: "#383E56",
      date: "Mar 2023 - Present",
      points: [
         "My latest entry. As I got passionate about React.js, I also started learning React Native.",
         "I want to achieve a good understanding of mobile devices native components and learn how to ship fast and responsive applications.",
         "Using modern technologies like Expo® to build projects that run natively on every device.",
      ],
   },
]

export const navLinks = [
   {
      id: "about",
      title: "About",
   },
   {
      id: "work",
      title: "Work",
   },
   {
      id: "contact",
      title: "Contact",
   },
]

const projects = [
   {
      name: "Crowdfunding",
      description:
         "Web3 platform that allows users to create and fund various user-created campaigns, providing a simple and intuitive UI for users to link their crypto-wallet.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "solidity",
            color: "green-text-gradient",
         },
         {
            name: "tailwind",
            color: "pink-text-gradient",
         },
      ],
      image: crowdfunding,
      deploy: "https://crowdfunding-tacitneptune.netlify.app/",
      source: "https://github.com/74C17N3P7UN3/CrowdFunding/",
   },
   {
      name: "Metaversus",
      description:
         "Web application that introduces the users to Metaversus' offers about the metaverse. Slowly animates on scroll and makes up for an engaging user-experience.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "nextjs",
            color: "green-text-gradient",
         },
         {
            name: "tailwind",
            color: "pink-text-gradient",
         },
      ],
      image: metaversus,
      deploy: "https://metaversus-tacitneptune.netlify.app/",
      source: "https://github.com/74C17N3P7UN3/Metaversus/",
   },
   {
      name: "HooBank",
      description:
         "A modern looking website to showcase the products HooBank has to offer. This website is inspired by a figma design published on OneWeekWonders.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "figma",
            color: "green-text-gradient",
         },
         {
            name: "tailwind",
            color: "pink-text-gradient",
         },
      ],
      image: hoobank,
      deploy: "https://modern-bank-tacitneptune.netlify.app/",
      source: "https://github.com/74C17N3P7UN3/ModernBank/",
   },
]

const services = [
   {
      title: "Web Developer",
      icon: web,
   },
   {
      title: "React Native Developer",
      icon: mobile,
   },
   {
      title: "Backend Developer",
      icon: backend,
   },
   {
      title: "App Developer",
      icon: program,
   },
]

const technologies = [
   {
      name: "HTML 5",
      icon: html,
   },
   {
      name: "CSS 3",
      icon: css,
   },
   {
      name: "JavaScript",
      icon: javascript,
   },
   {
      name: "PHP",
      icon: php,
   },
   {
      name: "React JS",
      icon: reactjs,
   },
   {
      name: "Expo",
      icon: expo,
   },
   {
      name: "Tailwind CSS",
      icon: tailwind,
   },
   {
      name: "Node JS",
      icon: nodejs,
   },
   {
      name: "Three JS",
      icon: threejs,
   },
   {
      name: "C++",
      icon: cpp,
   },
   {
      name: "Python",
      icon: python,
   },
   {
      name: "Java",
      icon: java,
   },
   {
      name: "Git",
      icon: git,
   },
]

const testimonials = []

export {
   experiences,
   projects,
   services,
   technologies,
   testimonials,
}
