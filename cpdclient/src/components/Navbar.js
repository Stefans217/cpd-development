// Components/NavBar.js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><p>words</p>
                    <NavLink to="/data">Data</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar