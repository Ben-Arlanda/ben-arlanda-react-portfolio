import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
		<section
			id="about"
			className="md:order-2 flex justify-center basis-3/5 z-10 mt-20 md:mt-30 md:mr-20 mb-40"
		>
			{/* MAIN CONTENT */}

			<div className=" mt-12 md:mt-32 mx-2 md:mx-0 max-w-lg px-3 md:px-0">
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
					<h3 className="text-2xl md:text-2xl md:text-start font-Inter font-semibold text-blue-200">
						About Me<span className="text-green-200">.</span>
					</h3>

					<div className="mt-3 text-gray-400">
						<p className="text-1xl md:text-1xl text-base font-inter font-normal">
							Hey! I'm Ben, a passionate Software Engineer originally from sunny
							England, I am now a proud citizen of Australia mate.
						</p>
						<p className="mt-3 text-1xl md:text-1xl text-base font-inter font-normal">
							Being a very curious person I like to understand the "why" behind
							all things like why are things built the way they are and why were
							those decisions made. This translates well to my passions in
							Software Engineering when building a new feature for a product and
							asking why will this benefit the business and user. I ask a lot of
							questions so I can understand exactly why features and products
							are built which enables me to offer the best suggestions that
							bring the most impact.
						</p>

						<p className="mt-3 text-1xl md:text-1xl text-base font-normal font-inter">
							Before becoming a Software Engineer I had a career in Recruitment,
							specialising in Software Engineering and prior to this I worked in
							the banking sector for Top 4 banks. My banking experience gave me
							strong knowledge in financial products, regulatory compliance, and
							customer service, while my recruitment background allowed me to
							develop experience in understanding business requirements to see
							the bigger picture and also communicating effectively with
							stakeholders.
						</p>
						<p className="mt-3 text-1xl md:text-1xl text-base font-normal font-inter">
							When I'm not working, you can find me spending time in nature,
							listening to wellness podcasts, watching sci-fi movies, keeping
							fit in the gym or in search of the best food spots in Sydney.
						</p>
						<p className="mt-3 font-mono text-green-200 text-sm">
							Tech Skills: TypeScript, JavaScript, React, Node.js, Next.js,
							TailwindCSS, Express, PostgreSQL, API, GIT.
						</p>
						<p className="mt-3 font-mono text-blue-200 text-sm">
							Soft Skills: Interpersonal communication, empathy, stakeholder
							management, attention to detail, resilience.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
