import styles from "./About.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const About = () => {
	return (
		<div className={styles.wrapper}>
			<NavBar />
			<main>
				<p>Greetings,</p>
				<p>
					I am Kenny, an Australian Permanent Resident whose professional
					journey bridges the worlds of culinary arts and software engineering.
					With a passion for creation and problem-solving, I bring a unique
					blend of skills that amplify my contributions as a dedicated team
					player.
				</p>
				<p>
					My culinary background, inspired by a love for shows like MasterChef
					Australia, honed my teamwork, client communication, and multitasking
					abilities. I thrived in high-pressure environments, consistently
					delivering optimal outcomes within budget and time constraints.
					Embracing challenges, I cultivated a calm demeanor and a knack for
					providing and receiving constructive feedback.
				</p>
				<p>
					Transitioning into Software Engineering, I found my "ikigai" – my true
					purpose. Fixing errors, resolving bugs, and contributing to innovative
					solutions drive my motivation. Drawing from culinary and technical
					experiences, I possess robust problem-solving skills, effective
					communication, and a talent for prioritization.
				</p>
				<p>
					I am excited to embark on further challenges as a software engineer,
					using my diverse skill set to foster collaborative success within a
					dynamic team.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default About;
