import styles from "./About.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const About = () => {
	return (
		<main className={styles.about}>
			<NavBar />
			About
			<Footer />
		</main>
	);
};

export default About;
