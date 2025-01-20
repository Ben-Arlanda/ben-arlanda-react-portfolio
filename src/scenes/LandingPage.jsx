import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Arrow from "../assets/arrow-204-24.png";

const LandingPage = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery("(mid-width: 1060px)");

	return (
		<section
			id="home"
			className="md:order-2 flex justify-center mt-20 md:mt-30 md:mr-20 pt-20"
		>
			<div className="z-30 mt-12 md:mt-32 mx-4 md:mx-0 max-w-lg text-left">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 2 }}
					custom={
						window.innerWidth < 768
							? { hiddenX: -150, visibleX: 0 }
							: { hiddenX: -350, visibleX: 50 }
					}
					variants={{
						hidden: (custom) => ({ opacity: 0, x: custom.hiddenX }),
						visible: (custom) => ({ opacity: 1, x: custom.visibleX }),
					}}
				>
					<h3 className="md:mt-10 mb-4 text-base md:text-lg leading-normal font-mono text-green-200 ml-1">
						HI, MY NAME IS
					</h3>
					<h3 className="text-5xl md:text-8xl font-inter text-blue-200 font-extrabold md:text-start whitespace-nowrap">
						Ben Arlanda<span className="text-green-200">.</span>
					</h3>
					<p className="mt-4 mb-7 text-y font-inter font-normal text-gray-400 ml-1">
						I am a Product-Focused
						<span className="text-green-200"> Full Stack Engineer</span> based
						in Sydney. I love transforming ideas into intuitive, impactful
						solutions that prioritise the user. My passion lies in collaborating
						across teams, solving problems creatively, and always keeping the
						user at the heart of the solution.
					</p>
					<div className="font-mono text-green-200 ml-1 md:text-lg">
						CHECK ME OUT BELOW!
						<img src={Arrow} alt="" className="mt-5 animate-flash-letter" />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default LandingPage;
