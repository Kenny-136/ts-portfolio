import styles from "./Contact.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Contact = () => {
	return (
		<div className={styles.wrapper}>
			<NavBar />
			<main>Contact</main>
			<Footer />
		</div>
	);
};

export default Contact;
