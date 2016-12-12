require( 'es6-promise' ).polyfill();
import Axios from 'axios';

export default class Form {
	form = null;
	fields = [];

	constructor() {
		this.form = document.getElementById( 'contact-form' );
		this.form.onsubmit = this.handleSubmit;
		this.fields = [ ...this.form.querySelectorAll( 'input, textarea' ) ];
	}

	handleSubmit = e => {
		e.preventDefault();
		let data = {};
		this.fields.forEach( field => {
			data[ field.getAttribute( 'name' ) ] = {
				type: field.getAttribute( 'type' ),
				value: field.value
			};
		});
		Axios.post(
			this.form.getAttribute( 'action' ),
			data
		).then( ( { data } ) => {
			console.log( data );
		}).catch( error => {
			console.log( error );
		});
	};
}