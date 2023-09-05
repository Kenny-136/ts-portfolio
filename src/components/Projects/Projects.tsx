import styles from "./Projects.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { projects } from "../../static/data";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
const Projects = () => (
	<div className={styles.wrapper}>
		<NavBar />
		<main className={styles.project__list}>
			{projects.map((project) => {
				return (
					<div key={project.name} className={styles.project}>
						<h1>{project.name}</h1>
						<p>{project.summary}</p>
						<ul className={styles.link}>
							<li>
								<a href={project.gitHub} target="_blank">
									GitHub Link
								</a>
							</li>
							<li>
								{project.live && (
									<a href={project.live} target="_blank">
										Check it Live!
									</a>
								)}
							</li>
						</ul>
						<ul className={styles.tools}>
							{project.tools.map((tool, index) => (
								<li key={`${project.name}${project.tools[index]}`}>{tool}</li>
							))}
						</ul>
					</div>
				);
			})}
		</main>
		<Footer />
	</div>
);

export default Projects;
