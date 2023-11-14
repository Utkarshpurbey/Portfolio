"use client";
import { experienceInfo, newExpList } from "@/public/utils/constants";
import { ExperienceProps, NewExperienceProps } from "@/public/utils/apiTypes";
import ExperienceCard from "@/components/ExperienceCard";
import { useEffect, useState } from "react";
import NewExpericenceCard from "@/components/NewExperienceCard";
const ExperiencePage = () => {
  const [isDesktop, setDesktop] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 768);
      window.addEventListener("resize", updateMedia);

      return () => {
        window.removeEventListener("resize", updateMedia);
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      {isDesktop ? (
        <div className="w-full">
          {newExpList.map((exp: NewExperienceProps, idx) => (
            <>
              <NewExpericenceCard key={idx} {...exp} />
            </>
          ))}
        </div>
      ) : (
        <div className="md:w-1/2 w-10/3">
          {experienceInfo.map((exp: ExperienceProps, idx) => (
            <>
              <ExperienceCard key={idx} {...exp} />
              {idx === experienceInfo.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-[#7d12ff] rounded-full relative z-10">
                    <div className="w-4 h-4 bg-[#7d12ff] rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default ExperiencePage;

// {userData.experience.map((exp, idx) => (
//     <>
//       <ExperienceCard
//         key={idx}
//         title={exp.title}
//         desc={exp.desc}
//         year={exp.year}
//         company={exp.company}
//         companyLink={exp.companyLink}
//       />
//       {idx === userData.experience.length - 1 ? null : (
//         <div className="divider-container flex flex-col items-center -mt-2">
//           <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
//             <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
//           </div>
//           <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
//         </div>
//       )}
//     </>
//   ))}
