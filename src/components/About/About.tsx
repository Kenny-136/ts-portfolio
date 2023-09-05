import styles from "./About.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const About = () => {
	return (
		<div className={styles.wrapper}>
			<NavBar />
			<main>
				<p>Welcome to My Corner of the Internet</p>
				<p>About Me</p>
				<p>
					I'm Kenny, an Australian resident with a unique journey that's taken
					me from the world of culinary arts to the realm of software
					engineering. I have a genuine passion for creating and
					problem-solving, which has shaped my career choices.
				</p>

				<p>
					During my time as a cook, I honed essential skills like teamwork,
					client communication, and multitasking. I thrived in high-pressure
					situations, always focused on delivering the best results on time and
					within budget. Constructive feedback was my ally for improvement. And
					then I came across Nology with its Software Development Training
					Program, which really fits what I have set my eyes as a goal. Since
					then, my journey as a Software Developer has begun.
				</p>
				<p>
					Now, as a software engineer, I find the same sense of satisfaction in
					fixing issues and creating solutions. I apply my skills from the
					kitchen to foster collaboration and deliver results in my current
					role.
				</p>

				<p>
					I'm excited to share my experiences and expertise with you, and I hope
					you find my corner of the web both informative and inspiring.
				</p>
				<p>Thank you for visiting,</p>
				<p>Kenny</p>
			</main>
			<Footer />
		</div>
	);
};

export default About;
