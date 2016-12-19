import { html } from 'snabbdom-jsx';
import ProjectGrid from './projectgrid/ProjectGrid';
import ProjectView from './projectview/ProjectView';

export default function Portfolio( props ) {
	const {
		projects,
		onSelectProject,
		onSelectImage,
		onPrev,
		onNext,
		activeImage,
		activeProject,
		viewportOpen
	} = props;
	return (
		<div className="portfolio-component">
			<div className="portfolio-component__project-grid">
				<ProjectGrid
					projects={projects}
					onSelectProject={onSelectProject}
					activeProject={activeProject}
				/>
			</div>
			<div className="portfolio-component__project-view">
				<ProjectView
					onPrev={onPrev}
					onNext={onNext}
					activeImage={activeImage}
					project={activeProject}
					onSelectImage={onSelectImage}
					viewportOpen={viewportOpen}
				/>
			</div>
		</div>
	);
}