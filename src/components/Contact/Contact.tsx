import styles from "./Contact.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Contact = () => {
	return (
		<main className={styles.contact}>
			<NavBar />
			Contact
			<Footer />
		</main>
	);
};

export default Contact;
