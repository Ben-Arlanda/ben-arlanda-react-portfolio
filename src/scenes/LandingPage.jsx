import SocialMediaIcons from "../Components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const LandingPage = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(mid-width: 1060px)")

  return (
    <section id="home" className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">

      {/* MAIN CONTENT */}

      <div className="z-30 mt-12 md:mt-32 mx-2 md:mx-0 max-w-lg">
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
          <p className="ml-7 mt-3 mb-3  md:text-left text-base md:text-lg leading-normal">
            Hi, my name is
          </p>
          <p className="ml-7 text-4xl md:text-6xl font-sans  md:text-start">
            Ben Arlanda.
          </p>
          <p className="ml-7 mt-3 text-3xl md:text-4xl font-sans md:text-start">
            I build meaningful digital experiences for the web.
          </p>
          <p className="ml-7 mt-3 mb-7  md:text-left text-base md:text-lg leading-normal">
            I am a Software Engineer based in Sydney
          </p>
          <AnchorLink
            className="bg-deep-blue rounded-sm py-3 px-7 hover:bg-white hover:text-deep-blue  transition duration-500 ml-7 border border-white"
          >
            Contact Me
          </AnchorLink>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default LandingPage;