import jump from 'jump.js';
import debounce from 'throttle-debounce/debounce';

export default class Navigation {
	constructor() {
		this.el = document.getElementById( 'navigation' );
		this.items = [ ...this.el.querySelectorAll( '.navigation__link' ) ]
			.map( item => ({
				element: item,
				targetElement: document.querySelector( item.dataset.elementSelector ),
				path: item.getAttribute( 'href' )
			}));
		this.update();
		window.addEventListener( 'hashchange', this.handleHashChange );
		window.addEventListener( 'scroll', debounce( 300, this.update ) );
	}

	isElementBright = el => {
		const tolerance = 180;
		const color = window.getComputedStyle( el, null )
			.getPropertyValue( 'background-color' )
			.split( '(' )[ 1 ]
			.split( ')' )[ 0 ]
			.split( ',' )
			.map( val => Number.parseInt( val.trim() ) );
	    const brightness = (
	    	( color[ 0 ] * 299 )
	    	+ ( color[ 1 ] * 587 )
	    	+ ( color[ 2 ] * 114 )
	    ) / 1000;
	    return brightness >= tolerance;
	}

	getMostVisible = items => {
		let windowTop = document.documentElement.scrollTop;
		let windowBottom = windowTop + window.innerHeight;
		return items.reduce( ( mostVisible, current ) => {
			let {
				top: mostVisibleTop,
				bottom: mostVisibleBottom
			} = mostVisible.targetElement.getBoundingClientRect();
			let mostVisibleOverlap =
				Math.max( 0,
					Math.min( mostVisibleBottom, windowBottom )
					- Math.max( mostVisibleTop, windowTop )
				);
			let {
				top: currentTop,
				bottom: currentBottom
			} = current.targetElement.getBoundingClientRect();
			let currentOverlap =
				Math.max( 0,
					Math.min( currentBottom, windowBottom )
					- Math.max( currentTop, windowTop )
				);
			return currentOverlap > mostVisibleOverlap ? current : mostVisible;
		}, items[ 0 ] );
	};

	handleHashChange = event => {
		if ( event ) event.preventDefault();
		let target = this.getMatchingItem().targetElement;
		if ( !target ) return;
		jump( target, {
			callback: this.update,
			duration: 750
		});
	};

	getMatchingItem = () => {
		return this.items.find( ( { element } ) => {
			return element.getAttribute( 'href' ) == location.hash;
		});	
	};

	update = () => {
		const {
			targetElement: scrolledEl
		} = this.getMostVisible( this.items );
		const matchingItem = this.items.find( item => (
			item.targetElement == scrolledEl 
		));
		matchingItem.element.classList.add( 'navigation__link--active' );
		this.items
			.filter( ( { element } ) => !matchingItem.element.isEqualNode( element ) )
			.forEach( ( { element } ) => {
				element.classList.remove( 'navigation__link--active' );
			});
		if ( this.isElementBright( scrolledEl ) ) {
			this.el.classList.add( 'navigation--dark' );
		} else {
			this.el.classList.remove( 'navigation--dark' );
		}
	};
}