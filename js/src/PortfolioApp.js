import Snabbdom from 'snabbdom';
const patch = Snabbdom.init([
	require( 'snabbdom/modules/class' ),
	require( 'snabbdom/modules/props' ),
	require( 'snabbdom/modules/style' ),
	require( 'snabbdom/modules/eventlisteners' )
]);
import { html } from 'snabbdom-jsx';
import PortfolioStore from '../../stores/PortfolioStore';
import Portfolio from '../../components/portfolio/Portfolio';

export default class PortfolioApp {
	portfolioData;
	portfolioStore;
	portfolioEl;

	constructor() {
		this.portfolioData = window[ '__PORTFOLIO_DATA__' ];
		this.portfolioStore = new PortfolioStore( this.portfolioData );
		this.portfolioEl = document.getElementById( 'portfolio-container' );
		this.portfolioStore.onChange( store => {
			this.portfolioEl = patch(
				this.portfolioEl,
				<Portfolio
					projects={store.projects}
					onSelectProject={store.setActiveProjectById}
					onSelectImage={store.setActiveImage}
					onPrev={store.prevProject}
					onNext={store.nextProject}
					activeImage={store.activeImage}
					activeProject={store.activeProject}
					viewportOpen={store.viewportIsOpen}
				/>
			);
		});
	}
}