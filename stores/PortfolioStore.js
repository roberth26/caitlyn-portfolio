import shortid from 'shortid';
import { observable, autorun } from 'mobx';

export default class PortfolioStore {
	@observable projects;
	@observable activeProject;
	@observable activeImage;
	@observable viewportIsOpen;

	constructor( projects ) {
		this.projects = projects
			.map( ( project, index ) => {
				project.id = shortid.generate();
				project.images = this.assignIdToImages( project.images );
				return project;
			});
		this.activeProject = this.projects[ 0 ];
		this.activeImage = this.activeProject.images[ 0 ];
		this.viewportIsOpen = true;
	}

	onChange = fn => autorun( fn.bind( null, this ) );

	assignIdToImages = images => {
		return images.map( image => {
			image.id = shortid.generate();
			return image;
		});
	}

	setActiveProject = project => {
		if ( project.id == this.activeProject.id ) return;
		this.viewportIsOpen = false;
		setTimeout( () => {
			this.activeProject = project;
			this.setActiveImage( project.images[ 0 ] );
			this.viewportIsOpen = true;
		}, 400 ); // matches css transition
	}

	setActiveProjectById = id => {
		if ( id == this.activeProject.id ) return;
		const project = this.projects.find( project => {
			return project.id == id;
		});
		if ( project ) {
			this.setActiveProject( project );
		}
	}

	setActiveImage = image => this.activeImage = image;

	getProjectById = id => {
		return this.projects.find( project => {
			return project.id == id;
		});			
	}

	getProjectIndexById = id => {
		return this.projects.findIndex( project => {
			return project.id == id;
		});		
	}

	getActiveProjectIndex = () => {
		return this.getProjectIndexById( this.activeProject.id );
	}

	getProjectImageById = ( project, id ) => {
		const proj = this.getProjectById( id );
		if ( proj ) {
			return proj.images.find( image => {
				return image.id == id;
			});
		}
		return null;
	}

	getProjectImageIndexById = ( project, id ) => {
		const proj = this.getProjectById( id );
		if ( proj ) {
			return proj.images.findIndex( image => {
				return image.id == id;
			});
		}
		return null;
	}

	prevProject = () => {
		let index = this.getActiveProjectIndex();
		if ( index <= 0 ) {
			index = this.projects.length - 1;
		} else {
			index--;
		}
		this.setActiveProject( this.projects[ index ] );
	}

	nextProject = () => {
		let index = this.getActiveProjectIndex();
		if ( index >= this.projects.length - 1 ) {
			index = 0;
		} else {
			index++;
		}
		this.setActiveProject( this.projects[ index ] );
	}
}