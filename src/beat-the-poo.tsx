import React from 'react';
import ReactDOM from 'react-dom/client'
import { Game } from './Game';
import { BeatThePooGame } from './BeatThePooGame';

class BeatThePooWebComponent extends HTMLElement{
	connectedCallback() {
		const root = document.createElement('div');
		this.attachShadow({ mode: 'closed' }).appendChild(root);
		const game = new BeatThePooGame()
		game.newGame('webcomponent')

		ReactDOM.createRoot(root).render(
			<React.StrictMode>
				<Game gameStarted={true} gameApi={game}/>
			</React.StrictMode>,
		)
	}
}

customElements.define('beat-the-poo', BeatThePooWebComponent);
