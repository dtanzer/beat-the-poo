import './App.css'
import { GuessesHistory } from './GuessesHistory'
import { Heading } from './Heading'

function App() {
	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<GuessesHistory previousGuesses='Previous Guesses'/>
		</>
	)
}

export default App
