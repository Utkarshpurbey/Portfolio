import { IoConstructOutline } from "react-icons/io5";

const UnderConstructionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-max">
      <div className="text-9xl">
        <IoConstructOutline />
      </div>
      <div className="text-lg">This Page is Under Construction</div>
    </div>
  );
};

export default UnderConstructionComponent;
