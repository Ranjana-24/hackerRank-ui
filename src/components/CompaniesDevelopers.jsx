import back from "../assets/newImg.png";
import Button from "../ui/Button"
import { motion } from "motion/react";
export default function CompaniesDevelopers(){
    return(
        <>
         <motion.div className="w-full mt-25 bg-black flex flex-col lg:flex-row border-b border-gray-500"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ duration: 0.6 }}
         >
            {/* fordevelopers */}
         <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-30 text-white lg:border-r lg:border-gray-500
        "
         style={{ backgroundImage: `url(${back})` }}
         >
               <h2 className = "text-4xl">For Developers</h2>
               <p className = "text-2xl mt-5">Over 26 millions developers have joined the HackerRank Community to learn and certify their skills, practice interviewing, and discover relevant jobs.</p>
               <Button variant="filled" className="border border-gray-600 px-5 mt-10">Join the community</Button>
            </div>
            {/* for companies */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-30 text-white"
                style={{ backgroundImage: `url(${back})` }}
            >
               <h2 className = "text-4xl">For Companies</h2>
               <p className = "text-2xl mt-5">Thousands of companies have embraced the new way to hire and upskill developers across roles and throughout their careers.</p>
               <Button variant="filled" className="border border-gray-600 mt-16 px-5">Start a free trial</Button>
            </div>
         </motion.div>  
        </>
    )
}