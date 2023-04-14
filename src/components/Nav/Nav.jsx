import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
    };
    
  return (
    <nav>
      <button>
        <NavLink to="/about">ABOUT</NavLink>
      </button>
      <button>
        <NavLink to="/home">HOME</NavLink>
      </button>
      <button>
        <NavLink to="/favorites">FAVORITES</NavLink>
      </button>
      <button onClick={handleLogOut}>Log Out</button>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
