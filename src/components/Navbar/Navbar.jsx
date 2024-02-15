import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const pageUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Navbar() {
  const toggleMobileMenu = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("open-menu");
  };

  const closeMobileMenu = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.remove("open-menu");
  };

  return (
    <>
      <nav className="navbar">
        <p onClick={pageUp} className="logo">
          wl.dev
        </p>
        <ul className="desktopMenu">
          <li>
            <a
              className="desktopMenuListItem"
              href="#home"
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="desktopMenuListItem"
              href="#about"
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="desktopMenuListItem"
              href="#projects"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="desktopMenuListItem"
              href="#contact"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
          <li onClick={toggleMobileMenu}>
            <CiMenuFries className="mobile-menu" width={30} height={30} />
          </li>
        </ul>
      </nav>
      {/* mobile nav */}
      <div className="mobile-nav closed-menu">
        <span onClick={toggleMobileMenu}>
          <RxCross2 width={30} height={30} className="Arr" />
        </span>
        <ul className="desktopMenu-mobile">
          <li>
            <a
              className="desktopMenuListItem"
              href="#home"
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="desktopMenuListItem"
              href="#about"
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="desktopMenuListItem"
              href="#projects"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="desktopMenuListItem"
              href="#contact"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
