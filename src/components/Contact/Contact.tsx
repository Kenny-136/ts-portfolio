import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me!</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>kennd1107@gmail.com</h5>
						<a href="mailto:kennd1107@gmail.com">Send a message</a>
					</article>

					<article className="contact__option">
						<BsLinkedin className="contact__option-icon" />
						<h4>LinkedIn</h4>
						<h5>dev-kenny</h5>
						<a
							href="https://www.linkedin.com/in/dev-kenny/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Connect with me on LinkedIn
						</a>
					</article>

					<article className="contact__option">
						<FaGithub className="contact__option-icon" />
						<h4>Github</h4>
						<h5>Kenny-136</h5>
						<a
							href="https://github.com/Kenny-136"
							target="_blank"
							rel="noopener noreferrer"
						>
							Check my Github
						</a>
					</article>
				</div>
			</div>
		</section>
	);
};
export default Contact;
