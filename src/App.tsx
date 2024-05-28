import './App.css'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'
import { BeatThePooGame } from './BeatThePooGame'
import { Game } from './Game'
import { useEffect, useState } from 'react'

export interface AppProps {
	gameApi?: BeatThePooGame,
}
function App({ gameApi = new BeatThePooGame('tutorial') }: AppProps) {
	const [gameStarted, setGameStarted] = useState(false)

	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName gameApi={gameApi} onNameEntered={ () => setGameStarted(true) }/>
			{ gameStarted? <Game gameApi={gameApi}/> : undefined }
		</>
	)
}

export default App
