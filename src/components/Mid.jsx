import Button from "../ui/Button"
export default function Mid(){
    return(
        <>
        <div className = "mt-15 px- sm:px-6 md:px-10">
        
          <div className=" text-center text-7xl font-sans-serif ">
            <h2 className = "px-4 mt-3 text-4xl sm:text-5xl md:text-6xl">Hire the next</h2>
            <h2  className = "px-4 mt-2 text-4xl sm:text-5xl md:text-6xl">generation developers</h2>

          </div>

        <div className="mt-10 text-center text-2xl px-20 text-gray-700 sm:mt-10 sm:text-xl md:text-2xl ">
           <p >We help thousands of companies hire and upskill the next </p>
           <p className="py-1"> generation of developers, and millions of developers to become one.</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center sm:mt-10 sm:flex-row ">
            <Button variant="filled"
            className="w-full sm:w-auto"
            >Start a free trial</Button>
            <Button variant="blank"
            className="w-full sm:w-auto">For developers</Button>
        </div>
        </div>
        </>
    )
}