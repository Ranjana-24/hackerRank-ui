import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
export default function Features({ feature }) {
  return (
    <>
      <div
        className={`flex flex-col items-center px-5 sm:px-8  lg:px-15 
        gap-10 sm:gap-16 lg:gap-30 py-5
        ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >

        <div className="w-full lg:w-1/2">
          <Button variant="filled" className="mb-1 rounded-full">
            {feature.button}
          </Button>
          <motion.h2 
          initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
          className="text-2xl mt-5 sm:text-3xl md:text-4xl font-sans py-3">
            {feature.title}
          </motion.h2>
          <p
            className="text-base mt-2 mb-5 font-sans text-gray-700
            sm:text-lg md:text-xl"
          >
            {feature.content}
          </p>
          <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.6 }}>
          <Link 
            to="/"
            className="text-base hover:text-green-600
            sm:text-lg"
          >
            Learn More
            <FaArrowRight className="inline-block ml-1" />
          </Link>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 mt-5 sm:mt-8 lg:mt-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-100 rounded hover:shadow-lg hover:shadow-green-200"
          >
            <source src={feature.post} type="video/mp4" 
            className="rounded-xl"/>
          </video>
        </div>
      </div>
    </>
  );
}