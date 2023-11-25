import { ROUTE_NAMES } from "./routes";
import { ExperienceProps, NewExperienceProps } from "./apiTypes";
import ncLogo from "../../public/assets/image/ncLogo.png";
import tenLogo from "../../public/assets/image/tenLogo.jpeg";

export const headerInfo = [
  {
    title: "Home",
    routeTo: ROUTE_NAMES.HOME,
  },
  {
    title: "About",
    routeTo: ROUTE_NAMES.ABOUT,
  },
  {
    title: "Projects",
    routeTo: ROUTE_NAMES.PROJECTS,
  },
  {
    title: "Experience",
    routeTo: ROUTE_NAMES.EXPERIENCE,
  },
  {
    title: "Resume",
    routeTo: ROUTE_NAMES.RESUME,
  },
  {
    title: "Contact",
    routeTo: ROUTE_NAMES.CONTACTS,
  },
];

export const socialLinks = {
  GitHub: "https://github.com/Utkarshpurbey",
  LinkedIn: "https://www.linkedin.com/in/utkarshpurbey/",
  Twitter: "https://twitter.com/purbey_utkarsh",
  Instagram: "https://www.instagram.com/the_purbey/",
};
export const experienceInfo: ExperienceProps[] = [
  {
    year: "2023",
    title: "Software Development Engineer",
    companyLink: "https://www.ninjacart.com/",
    company: "Ninjacart",
    desc: "Full time",
  },
  {
    year: "2023",
    title: "Software Development Intern",
    companyLink: "https://www.ninjacart.com/",
    company: "Ninjacart",
    desc: "Full time",
  },
  {
    year: "2021",
    title: "Scrum Master Associate",
    companyLink: "https://www.entrepreneurshipnetwork.net/",
    company: "THE ENTREPRENEURSHIP NETWORK",
    desc: "Full time",
  },
];

export const newExpList: NewExperienceProps[] = [
  {
    companyName: "Ninjacart",
    tenure: "Jul 23 - Present",
    role: "Software Development Engineer",
    desc: "  Implemented UI enhancements and API integrations to streamline onboarding for 5,000+ retailers, enhancing user experience. Designed Buyer Subscription models from scratch, had adoption rate of more than 75%. Successfully launched a Refer-and-Earn program, driving mutual benefits for referrers, referees, and overall company growth.",
    logo: ncLogo,
  },
  {
    companyName: "Ninjacart",
    tenure: "Jan 23 - Jun 23",
    role: "Software Development Intern",
    desc: "  Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum?",
    logo: ncLogo,
  },
  {
    companyName: "The Entrepreneurship Network",
    tenure: "Jun 21 - Jul 21",
    role: "Scrum Master Intern",
    desc: "  Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum?",
    logo: tenLogo,
    isLast: true,
  },
];

export const aboutMePara = [
  "Hello, I'm Utkarsh Purbey, and my journey into the world of coding began when I chose Computer Science for my 11th and 12th grades. The desire to become a software developer had already taken root in my mind, and I vividly recall a childhood incident when my uncle asked about my aspirations. Without hesitation, I declared, 'I want to become a Software Developer.'  ",
  "However, as I delved into coding during my 11th and 12th years, I encountered the challenge of understanding how the code I wrote internally worked. Although I grasped the basics, the desire to delve deeper into the intricacies of coding lingered. This drove me to pursue higher studies in the field, leading me to SASTRA University, where I enrolled in Computer Science and Business Systems.",
  "The turning point came during the lockdown in my second year of university. Struggling to fully comprehend coding, I made a conscious decision to take matters into my own hands. From that moment onward, I embarked on a journey of self-improvement, investing time and effort to enhance my coding skills. The result? The continuous evolution of my abilities and the person I am today.",
  "This journey reflects not only my dedication to the craft but also the resilience to overcome challenges and the commitment to continuous learning. I'm excited about the future chapters in my coding odyssey, driven by the passion that started with a childhood dream.",
];

export const techStackArray = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
];
