import NavbarData from "../data/NavbarData";
import logo from "../assets/logo.svg";
import Button from "../ui/Button";
export default function Navbar() {
  return (
    <>

    <div className="flex mt-4 py-5 position-sticky top-0 bg-white  z-10">
    
      <div>
        <img src={logo} alt="logo"
        className = "ml-8 h-5" />
      </div>

    <div className="flex flex-wrap ">
      {NavbarData.map((item) => (
        <div 
        key={item.name}
        className="px-10">
          {item.name}
        </div>
      ))}
        </div>
      <div className="ml-40">
        <Button
        variant = "plain">Log In</Button>
        <Button
        variant = "blank">Request Demo</Button>
        <Button variant="filled">Create a free account</Button>
      </div>
      </div>
    </>
  )
}