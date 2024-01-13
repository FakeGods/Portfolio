

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p className="logo">LESZKW</p>
        <ul className='desktopMenu'>
          <li><a className="desktopMenuListItem" href="#home">Home</a> </li>
          <li><a className="desktopMenuListItem" href="#about">About</a> </li>
          <li><a className="desktopMenuListItem" href="#projects">Projects</a></li>
          <li><a className="desktopMenuListItem" href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
  
  }
export default Navbar;