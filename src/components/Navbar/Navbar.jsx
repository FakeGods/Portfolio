const pageUp = () => {
  window.scrollTo({ top: (0, 0), behavior: "smooth" });
};

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <p onClick={pageUp} className="logo" >LESZKW</p>
        <ul className='desktopMenu'>
          <li><a className="desktopMenuListItem" href="#home">Home</a></li>
          <li><a className="desktopMenuListItem" href="#about">About</a></li>
          <li><a className="desktopMenuListItem" href="#projects">Projects</a></li>
          <li><a className="desktopMenuListItem" href="#contact">Contact</a></li>
          <li className="desktopMenuListItem" >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mobile-menu"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
          </li>
        </ul>
    </nav>
  
    </>
    
  )
  
  }
export default Navbar;