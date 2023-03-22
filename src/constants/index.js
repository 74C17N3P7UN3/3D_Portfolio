import {
   // Experiences
   // Projects
   carrent,
   jobit,
   tripguide,
   // Services
   backend,
   mobile,
   program,
   web,
   // Technologies
   cpp,
   css,
   docker,
   expo,
   figma,
   git,
   html,
   javascript,
   mongodb,
   nodejs,
   reactjs,
   redux,
   tailwind,
   threejs,
   typescript
} from '../assets'

const experiences = [
   {
      title: "C/C++ Developer",
      company_name: "@school",
      icon: cpp,
      iconBg: "#383E56",
      date: "October 2020 - June 2022",
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
      date: "March 2023 - Present",
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
      name: "Car Rent",
      description:
         "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "mongodb",
            color: "green-text-gradient",
         },
         {
            name: "tailwind",
            color: "pink-text-gradient",
         },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
   },
   {
      name: "Job IT",
      description:
         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "restapi",
            color: "green-text-gradient",
         },
         {
            name: "scss",
            color: "pink-text-gradient",
         },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
   },
   {
      name: "Trip Guide",
      description:
         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
         {
            name: "nextjs",
            color: "blue-text-gradient",
         },
         {
            name: "supabase",
            color: "green-text-gradient",
         },
         {
            name: "css",
            color: "pink-text-gradient",
         },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
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
      name: "TypeScript",
      icon: typescript,
   },
   {
      name: "React JS",
      icon: reactjs,
   },
   {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
   },
   {
      name: "Three JS",
      icon: threejs,
   },
   {
      name: "git",
      icon: git,
   },
   {
      name: "figma",
      icon: figma,
   },
   {
      name: "docker",
      icon: docker,
   },
]

const testimonials = [
   {
      testimonial:
         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
   },
   {
      testimonial:
         "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
   },
   {
      testimonial:
         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
   },
]

export {
   experiences,
   projects,
   services,
   technologies,
   testimonials
}
