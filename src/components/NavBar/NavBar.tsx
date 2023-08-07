import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/about"}>About</Link>
				</li>
				<li>
					<Link to={"/projects"}>Projects</Link>
				</li>
				<li>
					<Link to={"/contact"}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
