import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">
      <h2>🍽 Old Khiva</h2>
      <div>
        <Link to="/">Uy</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Savat</Link>
      </div>
    </nav>
  );
}

export default Navbar;
