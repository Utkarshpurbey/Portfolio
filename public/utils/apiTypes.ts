import { StaticImageData } from "next/image";

export type ExperienceProps = {
  year: string | number;
  title: string;
  companyLink: string;
  company: string;
  desc: string | React.ReactNode;
};
export type NewExperienceProps = {
  companyName: string;
  tenure: string;
  role: string;
  desc: string;
  logo: StaticImageData;
  isLast?: boolean;
};
