import { useState } from "react";

const Nav = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2>JobPortal</h2>

      <div 
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <ul className={open ? "nav-center active" : "nav-center"}>
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>About</li>
      </ul>

      <div className="nav-right">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

    </nav>
  );
};

export default Nav;