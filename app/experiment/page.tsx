import { newExpList } from "@/public/utils/constants";
import NewExpericenceCard from "@/components/NewExperienceCard";
import { NewExperienceProps } from "@/public/utils/apiTypes";
const ExperimentPage = () => {
  return (
    <div>
      <div className="flex justify-between px-[15%]">
        <div className="w-full">
        {newExpList.map((exp: NewExperienceProps, idx) => (
          <>
            <NewExpericenceCard key={idx} {...exp} />
          </>
        ))}
        </div>
      </div>
    </div>
  );
};
export default ExperimentPage;



