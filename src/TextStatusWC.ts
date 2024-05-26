import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('text-status')
export class TextStatus extends LitElement {
	@property()
	wrongGuesses: number = 0
	
	render() {
		return html`
		<div>Wrong Guesses: ${this.wrongGuesses}!</div>
		`
	}
}
