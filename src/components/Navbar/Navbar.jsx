const pageUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <p onClick={pageUp} className="logo">
            wl.dev
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
        </ul>

      </nav>
    </>
  );
};

export default Navbar