import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { GameState } from './BeatThePooGame';

@customElement('text-status')
export class TextStatus extends LitElement {
	@property()
	gameState: GameState | undefined = undefined
	
	render() {
		return html`
		<div>
			Wrong Guesses:
			<strong>${this.gameState?.wrongGuesses}</strong>
		</div>
		`
	}
}
