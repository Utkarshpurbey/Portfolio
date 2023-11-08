import Image from "next/image";
import ncLogo from "../../public/assets/image/ncLogo.png";
import { NewExperienceProps } from "@/public/utils/apiTypes";

const NewExpericenceCard = (props: NewExperienceProps) => {
  return (
    <div>
      <div className="flex justify-normal">
        <div className="w-[30%]">
          <div className="font-medium text-xl">{props.companyName}</div>
          <div className="text-xs">{props.tenure}</div>
        </div>
        <div className="flex justify-end">
          <div>
            <div className="h-10 w-10 rounded-full border-[1px] border-dashed border-gray-500 flex items-center justify-center">
              <div className="h-[25px] w-[25px] rounded-full ">
                <Image
                  src={props.logo}
                  alt="nclogo"
                  height={25}
                  width={25}
                  className="rounded-full"
                />
              </div>
            </div>
            {!props.isLast ? (
              <div className="flex items-center justify-center">
                <div className="h-36 border-[1px] border-dashed border-gray-500"></div>
              </div>
            ) : null}
          </div>

          <div className="w-[50%] pl-5">
            <div className="font-medium text-xl pb-2">{props.role}</div>
            <div className="text-xs">{props.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewExpericenceCard;
