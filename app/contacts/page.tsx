import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import ContactForm from "@/components/ContactForm";
const ContactPage = () => {
  return (
    <div className="md:p-16 p-8">
      <div className="bg-[#7d12ff] p-4">
        <div className="flex justify-between">
          {" "}
          <div className="left-container flex-col justify-between w-1/2">
            <div>
              <div className="text-white text-3xl font-bold">
                Let&apos;get in touch ..
              </div>
              <div className="text-white text-xl">Drop me a message</div>
            </div>
            <div className="text-sm relative bottom-0 w-auto">
              <ul>
                <li className="flex mb-2">
                  <span className="mr-2">
                    <BsFillTelephoneOutboundFill />
                  </span>
                  <a href="tel:+1234567890">123-456-7890</a>
                </li>
                <li className=" flex mb-2">
                  <span className="mr-2">
                    <FaEnvelope />
                  </span>
                  <a href="mailto:youremail@example.com">
                    youremail@example.com
                  </a>
                </li>
                <li className="flex">
                  <span className="mr-2">
                    <FaMapMarkerAlt />
                  </span>
                  123 Main Street, Your City, Your Country
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>

      
      </div>
    </div>
  );
};
export default ContactPage;
