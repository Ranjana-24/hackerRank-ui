import logo2 from "../assets/logo2.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import X from "../assets/X.svg";
import { TbCopyright } from "react-icons/tb";

export default function SocialMedia() {
  return (
    <>
      <div className="bg-black p-4">
        {/* left section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
          <div className="w-full md:w-1/2">
            <img src={logo2} alt="Logo" className="w-12" />
            <p className="text-gray-400 flex items-center gap-1 mt-2">
              <TbCopyright /> 2026 HackerRank All Rights Reserved
            </p>
          </div>

          {/* right section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-5 p-4">
            <div className="flex gap-5">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              <img src={X} alt="X" className="w-6 h-6" />
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}