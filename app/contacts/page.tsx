"use client";
import ColorChangingText from "@/components/colorChange";
const ContactPage = () => {
  const handleClick = () => {
    const emailSubject =
      "I have seen your portfolio and wish to connect with you !"; // Replace with your desired subject
    window.location.href = `mailto:utkarshpurbey@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}`;
  };
  return (
    <div className="flex items-center justify-center">
      <div className="text-left w-1/2">
        <div className="font-light md:text-[32px] pb-5">
          Have a project or job opportunities in mind ?
        </div>
        <div className="font-normal md:text-[42px] pb-5">
          Get in touch with me to discuss in detail about the opportunity.
        </div>
        <div className="font-normal md:leading-10 md:text-[22px] pb-5">
          Email me to contact me. Let’s work together to build something{" "}
          <ColorChangingText inputString={"Great."} />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-transparent border-[#6F6F6F] border-solid border-[1px]  text-white py-4 md:px-12 px-3 rounded-3xl max-w-fit opacity-90 hover:border-blue-500 hover:text-blue-500 "
            onClick={handleClick}
          >
            utkarshpurbey@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
