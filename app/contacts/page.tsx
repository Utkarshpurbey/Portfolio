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
    <div className="flex items-center justify-center font-sans">
      <div className="text-center w-1/2">
        <div className="font-light md:text-lg pb-5">
          Have a project or job opportunities in mind ?
        </div>
        <div className="font-semibold md:text-[2.625rem] pb-5">
          Get in touch with me to discuss in detail about the opportunity.
        </div>
        <div className="md:leading-10 md:text-xl font-light pb-5">
         You can <u onClick={() => handleClick()}>mail</u> me to contact me. You can also reach out to me over Linkedin. Thanks for being with me till here . Let’s work together to build something{" "}
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
