import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"

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
            Originally from sunny England, I decided to move to Sydney 11 years ago. I started a career in Recruitment and had a successful 9 years specialising in Software Engineering being promoted multiple times up to a Principal level.</p>
            <p className="mt-3">I recently changed careers to follow my passions which still is in tech but actually building digital experiences and being a creative problem solver. I took a Full-time intensive bootcamp in Full stack Development and fully immersed myself to get valuable new skills and experience.</p>
          
          <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
            On a personal level I consider myself to be a great listener. I have a strong EQ with a growth mindset and passion for human behaviour and mental health.
          </p>
          <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
            I am a British and Australian Citizen who has resided in 3 countries, life has taught me to think outside the box. I think this has heightened my ability to communicate effectively with people from diverse backgrounds, contributing to collaboration and understanding.
          </p>
          {/* <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
            I like to consider unconventional solutions to challenges drawing from my varied experiences and perspectives and also use my adaptability and flexibility, skills that I think are valuable in navigating change and uncertainty in the tech world.
          </p> */}
          <p className="mt-3 font-mono text-green-200 text-xs">
            Tech Skills: JavaScript, React, Node, Next, HTML, CSS, Express, PostgreSQL, API, GIT.
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