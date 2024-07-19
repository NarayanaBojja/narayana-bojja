import { NavLink, Link } from "react-router-dom";
import './Header.scss';
function Header() {
    return (
        <header className="header">
            <ul>
                <li>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/education">
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience">
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}
export default Header;