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
						className={className}
						href="#"
						on-click={ event => {
							event.preventDefault();
							onSelectProject( project.id );
						}}
					>
						<img
							className="project-grid__item__img"
							src={project.images[ 0 ].thumbnail}
						/>
						<div className="project-grid__item__overlay">
							<h2 className="project-grid__item__overlay__title">{project.title}</h2>
							<h3 className="project-grid__item__overlay__date">{project.date}</h3>
						</div>
					</a>
				);
			})}
		</div>
	);
}