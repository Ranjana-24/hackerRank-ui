export default function FutureIsHumanPage() {
  return (
    <>
      {/* Green gradient */}
      <div className="h-40 bg-gradient-to-b from-white via-green-300 to-green-950 " />

      <section className="bg-black px-6 py-20 h-150 text-white sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-green-400 sm:text-5xl md:text-6xl">
            The future is human <span className="inline-block font-roboto font-normal">plus</span> AI.
          </h1>

          <div className="mt-10 max-w-5xl space-y-8">
            <p className="text-2xl leading-relaxed sm:text-xl md:text-2xl">
              We’ve entered a new era of software development where human and
              AI build together. This changes the skills you need as a
              developer, and the way companies engage, hire, and upskill
              technical talent. In short, this changes everything.
            </p>

            <p className="text-2xl leading-relaxed sm:text-xl md:text-2xl ">
              We’re embracing these changes with you, and we’ve reinvented our
              products to meet the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Blue gradient */}
      <div className="h-40 bg-gradient-to-b from-blue-900 via-blue-400 to-white" />
    </>
  );
}