import './App.css'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'
import { BeatThePooGame } from './BeatThePooGame'
import { Game } from './Game'
import { useState } from 'react'

export interface AppProps {
	gameApi: BeatThePooGame,
}
function App({ gameApi = BeatThePooGame.newGame('tutorial') }: AppProps) {
	const [gameStarted, setGameStarted] = useState(false)

	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName onNameEntered={ () => setGameStarted(true) }/>
			<Game gameStarted={gameStarted} gameApi={gameApi}/>
		</>
	)
}

export default App
