import styles from "./Projects.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Projects = () => {
	return (
		<div className={styles.wrapper}>
			<NavBar />
			<main>Content</main>
			<Footer />
		</div>
	);
};

export default Projects;
