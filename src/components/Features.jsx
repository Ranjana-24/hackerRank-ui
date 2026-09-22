import {Link} from "react-router-dom"
//import TransitionButton from "../ui/TransitionButton"
import Button from "../ui/Button"
import { FaArrowRight } from "react-icons/fa";

export default function Features({feature}) {
    //const ButtonData = ["HACKERRANK COMMUNITy", "HACKERRANK ENGAGE", "HACKERRANK SCREEN", "HACKERRANK INTERVIEW", "HACKERRANK SKILLUP"]
  return (
    <>
      <div className= {`flex flex-col items-center px-15 m-20 gap-30  sm:gap-40 md:gap-50 lg:gap-60
      ${feature.reverse ? "lg:flex-row-reverse" : "flex-row"}`}>

        <div className="w-1/2">
   
        <Button variant="filled" className="mb-3">{feature.button}</Button>
         <h2 className="text-2xl font-sans mt-5">{feature.title}</h2>
        <p  className="text-1xl mt-2 mb-5 font-sans text-gray-700 sm:text-1xl md:text-2xl lg:text-2xl"> 
          {feature.content}</p>
          <Link to="/" className="hover:text-green-600 text-1xl sm:text-1xl md:text-2xl lg:text-2xl ">Learn More <FaArrowRight className = "inline-block"/></Link>
          </div>
        
<div className="w-full lg:w-1/2 mb-15 mt-10">
  <video
    autoPlay loop muted playsInline
    className="w-full h-auto
    rounded hover:shadow-lg hover:shadow-green-200 md:w-full"
  >
    <source src={feature.post} type="video/mp4" />
  </video>
</div>
</div>
    </>
  )}