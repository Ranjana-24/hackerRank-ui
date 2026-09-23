import { useState } from "react";
import NavbarData from "../data/NavbarData";
import logo from "../assets/logo.svg";
import Button from "../ui/Button";
import { FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>

    <div className="flex mt-4 py-5 sticky top-0 bg-white z-10 items-center  ">
      <div>
        <img src={logo} alt="logo"
        className = "ml-8 h-5" />
      </div>

    <div className="hidden md:flex flex-wrap ">
      {NavbarData.map((item) => (
        <div 
        key={item.name}
        className="px-10">
          {item.name}
        </div>
      ))}
        </div>
      <div className=" hidden md:flex ml-40 px-3">
        <Button
        variant = "plain">Log In
        </Button>
        <Button
        variant = "blank">Request Demo
        </Button>
        <Button variant="filled">Create a free account</Button>
      </div>
         {/* menu button */}
    <button onClick = {() => setMenu(!menu)}
      className = "md:hidden text-black mr-6 text-2xl">
        {menu ? <FiX className="ml-50" /> : <FiMenu className="ml-50" />}
      </button>
    </div>
  

   {/* mobile menu */}
{menu && (
  <div className="md:hidden">
    
    {/* Mobile menu links */}
    <div className="flex flex-col text-center gap-5 mt-3 ">
      {NavbarData.map((data) => (
        <div key={data.name}>
          {data.name}
        </div>
      ))}
    </div>

    {/* Mobile buttons */}
    <div className="flex flex-col gap-3 mt-5 ml-3 mr-3">
      <Button variant= "plain">Log In
      </Button>

      <Button variant= "blank"> Request Demo
      </Button>

      <Button variant= "filled">
 Create a free account 
      </Button>
    </div>

  </div>
)}

  
    </>
  )
}