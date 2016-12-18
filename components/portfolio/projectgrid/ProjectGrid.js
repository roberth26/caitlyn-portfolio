import { html } from 'snabbdom-jsx';

export default function ProjectGrid( props ) {
	const {
		projects,
		onSelectProject,
		activeProject
	} = props;
	return (
		<div className="project-grid">
			{projects.map( project => {
				let className = 'project-grid__item';
				if ( activeProject && activeProject.id == project.id ) {
					className += ` ${className}--active`;
				}
				return (
					<a
						href="#"
						on-click={ event => {
							event.preventDefault();
							onSelectProject( project.id );
						}}
					>
						<div className={className}>
							<img src={project.images[ 0 ].thumbnail} />
							<h2>{project.title}</h2>
						</div>
					</a>
				);
			})}
		</div>
	);
}