import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="about" className="md:order-2 flex justify-center basis-3/5 z-10 mt-20 md:mt-30 md:mr-20">

      {/* MAIN CONTENT */}

      <div className="z-30 mt-12 md:mt-32 mx-2 md:mx-0 max-w-lg px-3 md:px-0">

      
          <h3 className="text-2xl md:text-2xl md:text-start font-Poppins font-semibold text-blue-100">
            About Me<span className="text-green-200">.</span>
          </h3>
          
        <div className="mt-3 text-gray-400">
          <p className="text-1xl md:text-1xl text-base font-Poppins font-normal">
            I have always been a naturally curious and creative person which is why I decided to follow my passions, changing careers to become a Software Engineer to craft and develop meaningful digital experiences!
          </p>
          <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
            On a personal level I consider myself to be a great listener. I have a strong EQ with a growth mindset and passion for human behaviour and mental health.
          </p>
          <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
            I am a British and Australian Citizen who has resided in 3 countries, life has taught me to think outside the box. This has heightened my ability to communicate effectively with people from diverse backgrounds, facilitating collaboration and understanding.
          </p>
          <p className="mt-3 text-1xl md:text-1xl text-base font-normal font-Poppins">
            I like to consider unconventional solutions to challenges drawing from my varied experiences and perspectives and also use my adaptability and flexibility, skills that I think are valuable in navigating change and uncertainty in various contexts.
          </p>
        </div>

        
      </div>
    </section>
  )

}

export default About;