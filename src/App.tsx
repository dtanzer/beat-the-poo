import './App.css'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'
import { BeatThePooGame } from './BeatThePooGame'
import { Game } from './Game'
import { useEffect } from 'react'

export interface AppProps {
	gameApi: BeatThePooGame,
}
function App({ gameApi = new BeatThePooGame() }: AppProps) {

	useEffect(() => {
		gameApi.newGame('tutorial')
	}, [gameApi])

	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName />
			<Game />
		</>
	)
}

export default App
