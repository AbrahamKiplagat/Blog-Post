import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Blog Post</h2>
      <div className="links">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/create">New Blog</Link></a>
        <a><Link to="/about">About Us</Link></a>
      </div>
    </nav>
  );
};

export default Navbar;