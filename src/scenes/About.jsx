import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="about" className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">

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
          <p className="ml-7 text-4xl md:text-2xl font-sans md:text-start">
            About
          </p>
          <p className="ml-7 mt-3 text-1xl md:text-1xl font-sans md:text-start">
            I have always been a naturally curious and creative person which is why I decided to follow my passions, changing careers to become a Software Engineer to craft and develop meaningful digital experiences!

            On a personal level I consider myself to be a great listener. I have a strong EQ with a growth mindset and passion for human behaviour and mental health.

            I am a British and Australian Citizen who has resided in 3 countries, life has taught me to think outside the box. This has heightened my ability to communicate effectively with people from diverse backgrounds, facilitating collaboration and understanding.

            I like to consider unconventional solutions to challenges drawing from my varied experiences and perspectives and also use my adaptability and flexibility, skills that I think are valuable in navigating change and uncertainty in various contexts.
          </p>

        </motion.div>
      </div>
    </section>
  )

}

export default About;