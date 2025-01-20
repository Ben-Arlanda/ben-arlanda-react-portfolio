import weatherImage from "../assets/weatherapp.png";
import newsapi from "../assets/newsapi.png";
import openagent from "../assets/openagent.png";
import auto from "../assets/auto.png";
import githubIcon from "../assets/github-11-24.png";
import arrowIcon from "../assets/arrow-28-24.png";
import { motion } from "framer-motion";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Projects = () => {
	const cards = [
		{
			id: 0,
			title: "ClearSky Weather App",
			description:
				"Interactive weather application built with TypeScript integrating with the Openweather API. The app uses TanStack Query for efficient data fetching and state management, ensuring real-time weather updates and caching for improved performance. The UI is styled using ShadCN components and Tailwind CSS, for responsive design. Visualisations of weather trends and forecasts are powered by Recharts, providing users with intuitive and dynamic charts. Users can also dynamically add and remove their favourite cities.",
			image: weatherImage,
			skills:
				"Nextjs React TypeScript TanStack Query ShadCN TailwindCSS OpenWeather API Recharts Jest AWS EC2",
			liveLink: "https://clear-sky-ten.vercel.app/",
			githubLink: "https://github.com/Ben-Arlanda/ClearSky",
		},
		{
			id: 1,
			title: "News Search App",
			description:
				"A React Native mobile application built with Expo and TypeScript that allows users to search for news articles by keyword. The app fetches data from the News API, dynamically updates the results in real-time, and features a responsive design using NativeWind. Key functionalities include user-friendly search input, a loading spinner for better UX, and cleanly displayed articles with author, title, and description. The app demonstrates modular component design, environment variable management, and dynamic API integration.",
			image: newsapi,
			skills: "React Native Expo TypeScript NativeWind Jest NewsAPI",
			liveLink: "https://github.com/Ben-Arlanda/react_native_api_app",
			githubLink: "https://github.com/Ben-Arlanda/react_native_api_app",
		},
		{
			id: 2,
			title: "OpenAgent App",
			description:
				"This is a full-stack web application consisting of a client-side React application and a server-side Express application. It allows users to submit contact information through a form, which is then saved in a PostgreSQL database using an ORM and Sequelize. The application provides company contact information through an API and also a thankyou page. I decided to use Tailwind UI for the frontend to make the design process quicker and allow more focus on the API development. I have containerised the app with Docker and deployed it on AWS EC2.",
			image: openagent,
			skills:
				"React Nodejs Express PostgreSQL REST API Tailwind Docker Jest AWS EC2",
			liveLink: "https://github.com/Ben-Arlanda/OpenAgent_WorkSample",
			githubLink: "https://github.com/Ben-Arlanda/OpenAgent_WorkSample",
		},
		{
			id: 3,
			title: "Automotive App",
			description:
				"This is a basic app built with Nextjs and TypeScript that showcases translating a figma design into a pixel perfect website. I utlised TypeScript for strict typing and created reusable components for modular scalable code.",
			image: auto,
			skills: "Nextjs React TypeScript TailwindCSS",
			liveLink: "https://dealer-app-bice.vercel.app/",
			githubLink: "https://github.com/Ben-Arlanda/dealer-app",
		},
	];

	return (
		<>
			<div className="flex flex-col items-start ml-2 md:mr-12 mb-20">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 2 }}
					custom={
						window.innerWidth < 768
							? { hiddenX: -150, visibleX: 0 }
							: { hiddenX: -200, visibleX: 50 }
					}
					variants={{
						hidden: (custom) => ({ opacity: 0, x: custom.hiddenX }),
						visible: (custom) => ({ opacity: 1, x: custom.visibleX }),
					}}
					className="flex justify-center items-center w-full"
				>
					<div className="mx-auto px-1">
						<h3 className="font-inter text-3xl font-semibold text-blue-200 mb-2">
							Apps I built recently<span className="text-green-200">.</span>
						</h3>

						<section
							id="projects"
							className="md:order-2 basis-3/5 z-10 mt-1 md:mt-5 mr-3 md:mr-0 flex-1"
						>
							<TabGroup>
								<TabList>
									{cards.map((card) => (
										<Tab
											key={card.id}
											className="mb-4 rounded-xl py-1 px-5 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10
                     data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white font-inter"
										>
											{card.title}
										</Tab>
									))}
								</TabList>
								<TabPanels>
									{cards.map((card) => (
										<TabPanel
											key={card.id}
											className="rounded-xl bg-white/5 p-4 max-w-2xl h-auto flex flex-col mb-20"
										>
											<div className="w-full h-48 mb-4">
												<img
													src={card.image}
													alt={card.title}
													className="w-full h-full object-cover rounded-lg"
												/>
											</div>
											<div>
												<p className="text-sm text-gray-400 font-inter">
													{card.description}
												</p>

												<div>
													<div className="mt-4 flex flex-wrap gap-2 pb-2">
														{card.skills.split(" ").map((skill) => (
															<span
																key={card.id}
																className="text-xs font-mono text-green-200 bg-white/10 px-2 py-1 rounded-full"
															>
																{skill}
															</span>
														))}
													</div>
												</div>
												<div className="project-icons flex justify-end pt-3">
													<a
														href={card.githubLink}
														target="_blank"
														rel="noopener noreferrer"
														className="text-gray-400 flex items-center mr-4 text-sm font-mono"
													>
														<img
															src={githubIcon}
															alt="GitHub"
															className="w-5 h-5 mr-1"
														/>
														GitHub
													</a>
													<a
														href={card.liveLink}
														target="_blank"
														rel="noopener noreferrer"
														className="text-gray-400 flex items-center text-sm font-mono"
													>
														<img
															src={arrowIcon}
															alt="Live Site"
															className="w-5 h-5 mr-1"
														/>
														Live
													</a>
												</div>
											</div>
										</TabPanel>
									))}
								</TabPanels>
							</TabGroup>
						</section>
					</div>
				</motion.div>
			</div>
		</>
	);
};
export default Projects;
