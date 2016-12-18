import Snabbdom from 'snabbdom';
const patch = Snabbdom.init([
	require( 'snabbdom/modules/class' ),
	require( 'snabbdom/modules/props' ),
	require( 'snabbdom/modules/style' ),
	require( 'snabbdom/modules/eventlisteners' )
]);
import { html } from 'snabbdom-jsx';
import { autorun } from 'mobx';
import ProjectGrid from './projectgrid/ProjectGrid';
import ProjectView from './projectview/ProjectView';
import PortfolioStore from '../../stores/PortfolioStore';

export default class Portfolio {
	constructor( el ) {
		this.el = el;
		this.store = new PortfolioStore();
		autorun( this.update ); // initial mount and render
	}

	render = ( props ) => {
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
			<div className="portfolio">
				<div className="portfolio__project-grid">
					<ProjectGrid
						projects={projects}
						onSelectProject={onSelectProject}
						activeProject={activeProject}
					/>
				</div>
				<div className="portfolio__project-view">
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

	update = () => {
		const Portfolio = this.render;
		this.el = patch(
			this.el,
			<Portfolio
				projects={this.store.projects}
				onSelectProject={this.store.setActiveProjectById}
				onSelectImage={this.store.setActiveImage}
				onPrev={this.store.prevProject}
				onNext={this.store.nextProject}
				activeImage={this.store.activeImage}
				activeProject={this.store.activeProject}
				viewportOpen={this.store.viewportIsOpen}
			/>
		);
	}
}