const pageUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <p onClick={pageUp} className="logo">
          LESZKW
        </p>
        <ul className="desktopMenu">
          <li>
            <a className="desktopMenuListItem" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="desktopMenuListItem" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="desktopMenuListItem" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="desktopMenuListItem" href="#contact">
              Contact
            </a>
          </li>
          <li className="desktopMenuListItem mobile-menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mobile-menu"
            >

            </svg>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar