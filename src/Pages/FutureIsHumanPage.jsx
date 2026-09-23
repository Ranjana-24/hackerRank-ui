import back from "../assets/newImg.png";
import {motion} from "motion/react"
export default function FutureIsHumanPage() {
  return (
    <>
      {/* Green gradient */}
      <div className="h-40 bg-gradient-to-b from-white via-green-300 to-green-950 " 
   />

      <motion.section 
      className="bg-black px-6 py-20 h-150 text-white sm:px-10 md:px-16 lg:px-24"
      initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
         style={{ backgroundImage: `url(${back})` }}>
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-green-400 sm:text-5xl md:text-6xl">
            The future is human <span className="inline-block font-roboto font-normal">plus</span> AI.
          </h1>

          <div className="mt-8 w-full max-w-5xl space-y-6 sm:mt-10 sm:space-y-8">
            <p className="text-lg leading-relaxed sm:text-xl md:text-2xl">
              We’ve entered a new era of software development where human and
              AI build together. This changes the skills you need as a
              developer, and the way companies engage, hire, and upskill
              technical talent. In short, this changes everything.
            </p>

            <p className="text-lg leading-relaxed sm:text-xl md:text-2xl">
              We’re embracing these changes with you, and we’ve reinvented our
              products to meet the moment.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Blue gradient */}
      <div className="h-40 bg-gradient-to-b from-blue-900 via-blue-400 to-white" />
    </>
  );
}