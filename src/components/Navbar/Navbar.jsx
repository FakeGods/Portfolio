import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p className="logo">Wiktor.dev</p>
        <div className='desktopMenu'>
          <Link className="desktopMenuListItem" href="#home">Home</Link>
          <Link className="desktopMenuListItem" href="#about">About</Link>
          <Link className="desktopMenuListItem" href="#projects">Projects</Link>
          <Link className="desktopMenuListItem" href="#contact">Contact</Link>
          </div>
        <button className="desktopMenuBtn">
           <img src="" alt="" className="desktopMenuImg" />Hire Me </button>
    
    </nav>
  )
  }
export default Navbar;