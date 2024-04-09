import { motion } from "framer-motion";
import pawesomeImage from '../assets/pawesomeFinal.png'
import flavoursomeImage from '../assets/flavoursomeFinal.png'
import pipelineImage from '../assets/pipelineFinal.png'
import tictactoeImage from '../assets/tictactoeFinal.png'
import githubIcon from '../assets/github-11-24.png'
import arrowIcon from '../assets/arrow-28-24.png'

const Projects = () => {
  return (
    <section id="projects" className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
      <div className="flex flex-col items-center md:items-start">
        <motion.div
          className="mt-3 mb-3 md:text-left text-base md:text-lg leading-normal flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: -25 }
          }}
        >
          <p className="mr-2">Apps I have built recently</p>
          <div className="h-0.5 bg-white w-20"></div>
        </motion.div>

        <motion.div
          className="sm:grid sm:grid-cols-1 relative gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <section className="flex flex-col items-center sm:flex-row mb-20 py-10">
            <div className="project-description p-4 rounded-md max-w-xs mb-4 sm:mb-0 sm:mr-4 sm:ml-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pawsome</h3>
              <p className="text-gray-600 text-sm md:text-base">I developed a Front End React app from scratch using component based architecture with API integration from the Dog API, to fetch and display information about various dog breeds.
                Implemented client-side routing using React Router, defining routes with components and nested routes for modular navigation
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-base">React, JavaScript, API.</p>
              <div className="project-icons mt-4 flex items-center">
                <a href="https://github.com/Ben-Arlanda/pipeline/tree/ben" className="text-gray-600 flex items-center mr-4 text-sm md:text-base">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 mr-1" />
                  GitHub
                </a>
                <a href="https://github.com/Ben-Arlanda/pipeline/tree/ben" className="text-gray-600 flex items-center text-sm md:text-base">
                  <img src={arrowIcon} alt="Live Site" className="w-6 h-6 mr-1" />
                  Live Site
                </a>
              </div>
            </div>
            <div className="project-container relative mr-20">
              <img src={pawesomeImage} alt="Pawesome" className="ml-10 md:ml-0 md:mr-0 md:w-70 md:h-64 rounded-md shadow-lg" />
            </div>
          </section>

          <section className="flex flex-col items-center sm:flex-row mb-20">
            <div className="project-description p-4 rounded-md max-w-xs mb-4 sm:mb-0 sm:mr-4 sm:ml-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pipeline</h3>
              <p className="text-gray-600 text-sm md:text-base">A single page application using RESTful API & Google map API integration to create an interactive map and display information about petrol stations
                Collaborated and pair programmed in a team environment.
                Utilised modern asynchronous JavaScript techniques, including fetch API and promises</p>
              <p className="text-gray-600 mt-4 text-sm md:text-base">Node, JavaScript, API, Express, PostgreSQL.</p>
              <div className="project-icons mt-4 flex items-center">
                <a href="https://github.com/Ben-Arlanda/pipeline/tree/ben" className="text-gray-600 flex items-center mr-4 text-sm md:text-base">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 mr-1" />
                  GitHub
                </a>
                <a href="https://github.com/Ben-Arlanda/pipeline/tree/ben" className="text-gray-600 flex items-center text-sm md:text-base">
                  <img src={arrowIcon} alt="Live Site" className="w-6 h-6 mr-1" />
                  Live Site
                </a>
              </div>
            </div>
            <div className="project-container relative mr-20">
              <img src={pipelineImage} alt="Pipeline" className="ml-10 md:ml-0 md:mr-0 md:w-70 md:h-64 rounded-md shadow-lg" />
            </div>
          </section>

          <section className="flex flex-col items-center sm:flex-row mb-20">
            <div className="project-description p-4 rounded-md max-w-xs mb-4 sm:mb-0 sm:mr-4 sm:ml-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flavoursome</h3>
              <p className="text-gray-600 text-sm md:text-base">Developed an interactive Full Stack web application.
                Followed RESTful principles for seamless communication between the client and server using Node.js, express and npm packages
                Set up MVC architecture for modular structure making the app easier to scale and extend
                Used PostgreSQL to build 3 schema tables connecting to the app using SQL queries.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-base">Node, JavaScript, API, Express, PostgreSQL.</p>
              <div className="project-icons mt-4 flex items-center">
                <a href="https://github.com/Ben-Arlanda/flavoursome_crud_app" className="text-gray-600 flex items-center text-sm md:text-base">
                  <img src={githubIcon} alt="Live Site" className="w-6 h-6 mr-1" />
                  Github
                </a>
                <a href="live-site-link" className="text-gray-600 flex items-center ml-3 text-sm md:text-base">
                  <img src={arrowIcon} alt="Live Site" className="w-6 h-6 mr-1" />
                  Live Site
                </a>
              </div>
            </div>
            <div className="project-container relative mr-20">
              <img src={flavoursomeImage} alt="Flavoursome" className="ml-10 md:ml-0 md:mr-0 md:w-70 md:h-64 rounded-md shadow-lg" />
            </div>
          </section>

          <section className="flex flex-col items-center sm:flex-row mb-20">
            <div className="project-description p-4 rounded-md max-w-xs mb-4 sm:mb-0 sm:mr-4 sm:ml-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tic Tac Toe</h3>
              <p className="text-gray-600 text-sm md:text-base">Game app utilising JavaScript to manipulate the DOM for dynamic content and user interactions
                Attached event listeners to the cells of the grid to detect user clicks.
                Implemented game, winner and tie logic with functions.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-base">HTML, CSS, JavaScript</p>
              <div className="project-icons mt-4 flex items-center">
                <a href="https://github.com/Ben-Arlanda/pipeline/tree/ben" className="text-gray-600 flex items-center mr-4 text-sm md:text-base">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 mr-1" />
                  GitHub
                </a>
                <a href="https://github.com/Ben-Arlanda/pipeline/tree/ben" className="text-gray-600 flex items-center text-sm md:text-base">
                  <img src={arrowIcon} alt="Live Site" className="w-6 h-6 mr-1" />
                  Live Site
                </a>
              </div>
            </div>
            <div className="project-container relative mr-20">
              <img src={tictactoeImage} alt="Tic tac toe" className="ml-10 md:ml-0 md:mr-0 md:w-70 md:h-64 rounded-md shadow-lg" />
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;

