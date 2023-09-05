import styles from "./Home.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Home = () => {
	return (
		<div className={styles.wrapper}>
			<NavBar />
			<main className={styles.about}>
				<h1>Kenny's Portfolio.</h1>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
