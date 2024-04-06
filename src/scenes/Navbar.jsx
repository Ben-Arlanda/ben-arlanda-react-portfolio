import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from '../assets/menu-icon.svg'

// Link component for navigation
const Link = ({ page, selectedPage, setSelectedPage }) => {
  // Convert page prop to lowercase for consistent comparison
  const lowerCasePage = page.toLowerCase();

  // Render navigation link with smooth scroll behavior
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""
        } hover:text-yellow transition duration-500`}
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
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className={`font-sans text-3xl font-bold`}>BA</h4>
        
        {/* Render navigation links if screen size is above 768px */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-sans text-sm font-semibold">
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
              page="Experience"
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
        ) : (
          <button
          onClick={() => setIsMenuToggled (!isMenuToggled)}
          >
              <img src={menuIcon} alt="menu-icon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

