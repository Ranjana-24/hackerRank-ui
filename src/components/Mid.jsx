import { useState, useEffect } from "react";
import Button from "../ui/Button"
export default function Mid(){
  const words = ["Hire", "Become", "UpSkill"] ;
  const [wordindex, setwordIndex] = useState(0);
  const[text, setText] = useState("");
  useEffect(() => {
    const word = words[wordindex];
   
    // checking all words are typed or not
    if (text.length < word.length) {
      const timer = setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, 300);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setText("");
      setwordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text, wordindex]);

    return(
        <>
        <div className = "mt-18 px-6 sm:px-6 md:px-10">
        
          <div className=" text-center text-7xl font-sans font-[100px] ">
            <h2 className = "px-4 mt-3 text-4xl sm:text-6xl md:text-7xl font-light">
               <span className="text-green-600">{text}</span>  the next</h2>
            <h2  className = "px-4 mt-4 text-4xl sm:text-6xl md:text-7xl font-light">generation developers</h2>

          </div>

        <div className="mt-6 text-center text-2xl px-20 text-gray-500 sm:mt-6 sm:text-xl md:text-2xl">
           <p>We help thousands of companies hire and upskill the next </p>
           <p className="py-1"> generation of developers, and millions of developers to become one.</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center sm:mt-10 sm:flex-row px-3">
            <Button variant="filled"
            className="w-full sm:w-auto px-8 py-4"
            >Start a free trial</Button>
            <Button variant="blank"
            className="w-full sm:w-auto px-8 py-4">For developers</Button>
        </div>
        </div>
        </>
    )
}