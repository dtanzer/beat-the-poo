import './App.css'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'
import { BeatThePooGame } from './BeatThePooGame'
import { Game } from './Game'

export interface AppProps {
	gameApi: BeatThePooGame,
}
function App({ gameApi = new BeatThePooGame('tutorial') }: AppProps) {
	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName gameApi={gameApi} />
			<Game gameApi={gameApi} />
		</>
	)
}

export default App
