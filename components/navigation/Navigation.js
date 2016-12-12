import jump from 'jump.js';
import debounce from 'throttle-debounce/debounce';

export default class Navigation {
	constructor() {
		this.el = document.getElementById( 'navigation' );
		this.items = [ ...this.el.querySelectorAll( '.navigation__link' ) ]
			.map( item => {
				return {
					element: item,
					targetElement: document.querySelector( item.dataset.elementSelector ),
					path: item.getAttribute( 'href' )
				};
			});
		let target = this.getMatchingItem();
		if ( target ) target.targetElement.scrollIntoView();
		this.userScroll = true;
		this.updateActive();
		this.disableScroll = false;
		window.addEventListener( 'hashchange', this.handleHashChange );
		window.addEventListener( 'scroll', this.handleScroll );
	}

	handleHashChange = event => {
		console.log( 'handleHashChange()' )
		if ( event ) event.preventDefault();
		let target = this.getMatchingItem().targetElement;
		if ( !target ) return;
		if ( !this.disableScroll ) {
			jump( target, {
				callback: () => {
					this.updateActive();
				},
				duration: 750
			});
		}
		this.disableScroll = false;
	};

	handleScroll = debounce( 300, event => {
		console.log( 'handleScroll()' );
		this.disableScroll = true;
		location.hash = this.getMostVisible( this.items ).path;
		this.updateActive();
	});

	getMostVisible = ( items ) => {
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

	getMatchingItem = () => {
		return this.items.find( ( { element } ) => {
			return element.getAttribute( 'href' ) == location.hash;
		});	
	};

	updateActive = () => {
		let matchingItem = this.getMatchingItem();
		if ( !matchingItem ) return;
		matchingItem = matchingItem.element;
		matchingItem.classList.add( 'navigation__link--active' );
		this.items
			.filter( ( { element } ) => element != matchingItem )
			.forEach( ( { element } ) => {
				element.classList.remove( 'navigation__link--active' );
			});
	};
}