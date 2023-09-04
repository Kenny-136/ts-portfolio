import styles from "./Projects.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { projects } from "../../static/data";

const Projects = () => (
	<div className={styles.wrapper}>
		<NavBar />
		<main>
			{projects.map((project) => {
				return (
					<h1>
						{project.name}
						<p>{project.summary}</p>
						{project.tools}
						<a href={project.gitHub}>GitHub Link</a>
					</h1>
				);
			})}
		</main>
		<Footer />
	</div>
);

export default Projects;
