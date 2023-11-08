import { ROUTE_NAMES } from "./routes";
import { ExperienceProps, NewExperienceProps } from "./apiTypes";
import ncLogo from '../../public/assets/image/ncLogo.png'
import tenLogo from '../../public/assets/image/tenLogo.jpeg'

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
  GITHUB: "https://github.com/Utkarshpurbey",
  LINKEDIN: "https://www.linkedin.com/in/utkarshpurbey/",
  TWITTER: "https://twitter.com/purbey_utkarsh",
  INSTAGRAM: "https://www.instagram.com/the_purbey/",
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
    desc: "  Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum?",
    logo : ncLogo
  },
  {
    companyName: "Ninjacart",
    tenure: "Jan 23 - Jun 23",
    role: "Software Development Intern",
    desc: "  Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum?",
    logo : ncLogo
  },{
    companyName: "The Entrepreneurship Network",
    tenure: "Jun 21 - Jul 21",
    role: "Scrum Master Intern",
    desc: "  Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum? Quidem voluptatem possimus vel earum?",
    logo: tenLogo,
    isLast:true
  }
];
