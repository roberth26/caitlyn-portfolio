import Snabbdom from 'snabbdom';
const patch = Snabbdom.init([
	require( 'snabbdom/modules/class' ),
	require( 'snabbdom/modules/props' ),
	require( 'snabbdom/modules/style' ),
	require( 'snabbdom/modules/eventlisteners' )
]);
import { html } from 'snabbdom-jsx';
import TypeKit from './typekit';
import Navigation from '../../components/navigation/Navigation';
import Menu from '../../components/menu/Menu';
import Form from '../../components/form/Form';
import Portfolio from '../../components/portfolio/Portfolio';
import PortfolioStore from '../../stores/PortfolioStore';

const typeKit = new TypeKit();
const menu = new Menu();
const navigation = new Navigation();
const form = new Form();

const portfolioStore = new PortfolioStore();
let portfolioEl = document.getElementById( 'portfolio-container' );
portfolioStore.onChange( store => {
	portfolioEl = patch(
		portfolioEl,
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