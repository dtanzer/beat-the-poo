import './App.css'
import { GuessesHistory } from './GuessesHistory'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'

function App() {
	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName />
			<GuessesHistory previousGuesses='Previous Guesses'/>
		</>
	)
}

export default App
