import { html } from 'snabbdom-jsx';

export default props => {
	const { projects, onSelect } = props;
	return (
		<div className="project-grid">
			{projects.map( project => {
				return (
					<div
						className="project-grid__item"
						on-click={onSelect.bind( null, project.id )}
					>
						<h2>{project.title}</h2>
					</div>
				);
			})}
		</div>
	);
}