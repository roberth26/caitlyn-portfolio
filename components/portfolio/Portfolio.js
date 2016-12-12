import Snabbdom from 'snabbdom';
const patch = Snabbdom.init([
	require( 'snabbdom/modules/class' ),
	require( 'snabbdom/modules/props' ),
	require( 'snabbdom/modules/style' ),
	require( 'snabbdom/modules/eventlisteners' )
]);
import { html } from 'snabbdom-jsx';
import shortid from 'shortid';
import ProjectGrid from '../projectgrid/ProjectGrid';
import ProjectView from '../projectview/ProjectView';

export default class Portfolio {
	constructor( el ) {
		this.el = el;
		this.state = this.getInitialState();
		this.update(); // initial mount and render
	}

	getInitialState = () => {
		let projects = window.__PORTFOLIO_DATA__;
		projects = projects.map( ( project, index ) => {
			project.isActive = index == 0 ? true : false;
			project.id = shortid.generate();
			return project;
		});
		return {
			projects: projects,
			activeProject: projects[ 0 ]
		};
	}

	setActiveProject = id => {
		const project = this.state.projects.find( project => {
			return project.id == id;
		});
		if ( project ) {
			this.state.activeProject = project;
			this.update();
		}
	}

	render = props => {
		const { projects, onClick, activeProject } = props;
		return (
			<div className="portfolio">
				<div className="portfolio__project-grid">
					<ProjectGrid
						projects={projects}
						onSelect={this.setActiveProject}
					/>
				</div>
				<div className="portfolio__project-view">
					<ProjectView
						project={activeProject}
						onClick={onClick}
					/>
				</div>
			</div>
		);
	}

	update = () => {
		this.el = patch(
			this.el,
			this.render({
				...this.state,
				onClick: this.update
			})
		);
	}
}