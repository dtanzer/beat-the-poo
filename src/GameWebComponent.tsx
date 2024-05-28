import React from 'react'
import ReactDOM from 'react-dom/client'
import { Game } from './Game'
import { BeatThePooGame } from './BeatThePooGame'

export class GameWebComponent extends HTMLElement {
	connectedCallback() {
		const root = document.createElement('div')
		this.attachShadow({ mode: 'closed'}).appendChild(root)

		const gameApi = new BeatThePooGame('webcomponents')
		ReactDOM.createRoot(root).render(
			<React.StrictMode>
				<Game gameApi={gameApi} gameStarted={true} />
			</React.StrictMode>,
		)
	}
}

customElements.define('beat-the-poo', GameWebComponent)
