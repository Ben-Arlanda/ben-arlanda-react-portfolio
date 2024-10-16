import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="about" className="md:order-2 flex justify-center basis-3/5 z-10 mt-20 md:mt-30 md:mr-20">

      {/* MAIN CONTENT */}

      <div className=" mt-12 md:mt-32 mx-2 md:mx-0 max-w-lg px-3 md:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >

          <h3 className="text-2xl md:text-2xl md:text-start font-Poppins font-semibold text-blue-200">
            About Me<span className="text-green-200">.</span>
          </h3>

          <div className="mt-3 text-gray-400">
            <p className="text-1xl md:text-1xl text-base font-Poppins font-normal">
              Hey I'm Ben, a passionate Software Engineer originally from sunny England, Australia is my home after 11 years living here.</p>
            <p className="mt-3 text-1xl md:text-1xl text-base font-Poppins font-normal">Recently I have been lucky enough to solely work on developing and scaling an Admin dashboard building multiple reusable components, building GraphQL APIs and restyling with TailwindCSS</p>

            <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
              Before becoming a Software Engineer I had a successful career in Recruitment, specialising in Software Engineering and prior to this I worked in the banking sector for Top 4 banks. My banking experience gave me strong knowledge in financial products, regulatory compliance, and customer service, while my recruitment background allowed me to develop industry insights into technology and also skills in stakeholder management.
            </p>
            <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
              When I'm not working, you can find me spending time in nature, listening to wellness podcasts, watching sci-fi movies, keeping fit in the gym or in search of the best food spots in Sydney.
            </p>
            <p className="mt-3 font-mono text-green-200 text-xs">
              Tech Skills: JavaScript, React, Node.js, Next.js, TailwindCSS, Express, PostgreSQL, API, GIT.
            </p>
            <p className="mt-3 font-mono text-blue-200 text-xs">
              Soft Skills: Interpersonal communication, empathy, stakeholder management, attention to detail, resilience.
            </p>
          </div>


        </motion.div >
      </div>
    </section>
  )

}

export default About;