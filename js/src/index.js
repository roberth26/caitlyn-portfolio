import TypeKit from './typekit';
import Navigation from '../../components/navigation/Navigation';
import Menu from '../../components/menu/Menu';
import Form from '../../components/form/Form';
import Portfolio from '../../components/portfolio/Portfolio';

const typeKit = new TypeKit();
const menu = new Menu();
const navigation = new Navigation();
const portfolio = new Portfolio( document.getElementById( 'portfolio-container' ) );
const form = new Form();