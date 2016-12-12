import { html } from 'snabbdom-jsx';

export default props => {
	const { project } = props;
	return (
		<article className="project">
			<div className="project__viewport"></div>
			<h2>{project.title}</h2>
			<div className="project__description">
				{project.description}
			</div>
		</article>
	);
}