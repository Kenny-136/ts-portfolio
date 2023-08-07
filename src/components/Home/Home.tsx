import styles from "./Home.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Home = () => {
	return (
		<main className={styles.wrapper}>
			<NavBar />
			<h1>Kenny's Portofolio.</h1>
			<Footer />
		</main>
	);
};

export default Home;
