import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p className="logo">Wiktor.dev</p>
        <div className='desktopMenu'>
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Projects</Link>
          <Link className="desktopMenuListItem">Contact</Link>
          </div>
        <button className="dektopMenuBtn">
           <img src="" alt="" className="desktopMenuImg" />Hire Me </button>
    
    </nav>
  )
  }
export default Navbar;