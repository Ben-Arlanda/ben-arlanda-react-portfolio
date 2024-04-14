import SocialMediaIcons from "../Components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Arrow from '../assets/arrow-204-24.png'

const LandingPage = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(mid-width: 1060px)")

  return (
    <section id="home" className="md:order-2 flex justify-center mt-20 md:mt-30 md:mr-20">

      {/* MAIN CONTENT */}

      <div className="z-30 mt-12 md:mt-32 mx-4 md:mx-0 max-w-lg text-left">
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
          <h3 className="md:mt-0 mb-4 text-base md:text-lg leading-normal font-mono text-green-200 ml-0.5">
            HI, MY NAME IS
          </h3>
          <h3 className="text-5xl md:text-8xl font-Poppins text-blue-100 font-extrabold md:text-start whitespace-nowrap">Ben Arlanda<span className="text-green-200">.</span>
          </h3>
          <p className="mt-4 mb-7 text-y font-Poppins font-normal text-gray-400 ml-1">
            I am a <span className="text-green-200">Software Engineer</span> based in Sydney.
            I come from a <span className="text-green-200">diverse</span> background living in 3 countries which fuels my <span className="text-green-200">passion</span> for <span className="text-green-200">creativity</span> and user experience. I want to create digital experiences with meaning that have a <span className="text-green-200">postive</span> impact on people's lives. 
          </p>
          <div className="font-mono text-green-200 ml-1">
            CHECK ME OUT BELOW !
            <img src={Arrow} alt="" className="mt-5 animate-flash-letter"/>
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
        </motion.div>

          <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <SocialMediaIcons /> */}
        </motion.div>
      </div>
    </section>
  )
}

export default LandingPage;