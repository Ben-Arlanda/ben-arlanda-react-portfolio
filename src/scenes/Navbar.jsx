import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import mephoto from "../assets/me.png";

// Link component for navigation
const Link = ({ page, selectedPage, setSelectedPage }) => {
	// Convert page prop to lowercase for consistent comparison
	const lowerCasePage = page.toLowerCase();

	// Render navigation link with smooth scroll behaviour
	return (
		<AnchorLink
			className="text-sm no-underline font-mono font-thin hover:opacity-50 transition duration-500 text-gray-100"
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

// Navbar component
const Navbar = ({ selectedPage, setSelectedPage }) => {
	// State variable for toggling menu on small screens
	const [isMenuToggled, setIsMenuToggled] = useState(false);

	// Custom hook to check if screen size is above 768px
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

	return (
		<nav className="z-40 w-full fixed top-0 py-6 bg-deep-blue">
			<div className="flex items-center justify-between md:mx-auto w-5/6 ml-4">
				<h4 className="text-xl font-extrabold text-blue-200 font-mono">
					<img
						alt=""
						src={mephoto}
						className="inline-block size-10 rounded-full"
					/>
				</h4>

				{/* Render navigation links if screen size is above 768px */}
				{isAboveSmallScreens ? (
					<div className="flex justify-between gap-16 font-sans text-sm font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							className="hover:opacity-50 transition duration-500"
						/>
						<Link
							page="About"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						{/* <Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/> */}
					</div>
				) : (
					<button
						type="button"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<img src={menuIcon} alt="menu-icon" />
					</button>
				)}

				{/* HAMBURGER POPUP MENU */}
				{!isAboveSmallScreens && isMenuToggled && (
					<div className="fixed top-0 left-0 w-full flex items-center justify-center bg-deep-blue py-5">
						{/* CLOSE ICON */}
						<div className="absolute top-0 right-0 p-4">
							<button
								type="button"
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<img src={closeIcon} alt="close-icon" />
							</button>
						</div>

						<div className="flex flex-col items-center gap-10">
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="About"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>

							<Link
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
