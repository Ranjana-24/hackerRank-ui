import Button from "../ui/Button"
export default function Mid(){
    return(
        <>
        <div className = "mt-15">
          {/* title */}
          <div className=" text-center text-7xl font-sans-serif ">
            <h2 className = "px-4 mt-3">Hire the next</h2>
            <h2  className = "px-4 mt-2">generation developers</h2>
          </div>

          {/* content */}
        <div className="mt-10 text-center text-2xl px-20 text-gray-700">
           <p >We help thousands of companies hire and upskill the next </p>
           <p className="py-1"> generation of developers, and millions of developers to become one.</p>
        </div>

        {/* button */}
        <div className="mt-10 flex justify-center">
            <Button variant="filled"
            className="px-6"
            >Start a free trial</Button>
            <Button variant="blank"
            className="px-4">For developers</Button>
        </div>
        </div>
        </>
    )
}