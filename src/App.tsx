import './App.css'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'
import { BeatThePooGame } from './BeatThePooGame'
import { Game } from './Game'
import { useEffect, useState } from 'react'

export interface AppProps {
	gameApi: BeatThePooGame,
}
function App({ gameApi = new BeatThePooGame() }: AppProps) {
	const [gameStarted, setGameStarted] = useState(false)

	useEffect(() => {
		gameApi.newGame('tutorial')
	}, [gameApi])

	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName onNameEntered={ () => setGameStarted(true) }/>
			<Game gameStarted={gameStarted} />
		</>
	)
}

export default App
