import { useEffect, useState } from 'react'
import './App.css'
import { GuessesHistory } from './GuessesHistory'
import { Heading } from './Heading'
import { PlayerName } from './PlayerName'
import { VisualStatus } from './VisualStatus'

function App() {
	const [startTime, setStartTime] = useState(Date.now())
	const [timeLeft, setTimeLeft] = useState(15)
	const [failedGuesses, setFailedGuesses] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			const secondsElapsed = Math.floor((Date.now() - startTime) / 1000)
			const secondsLeft = 15-secondsElapsed

			setTimeLeft(secondsLeft)
			if(secondsLeft === 0) {
				setFailedGuesses(11)
				clearInterval(interval)
			}
		}, 200)
		return () => {
			clearInterval(interval)
		}
	}, [startTime])
	return (
		<>
			<Heading text="Beat the Poo"><span className='small'>A word guessing game</span></Heading>
			<PlayerName />
			<div>{timeLeft}</div>
			<div><VisualStatus failedGuesses={failedGuesses}/></div>
			<GuessesHistory previousGuesses='Previous Guesses'/>
		</>
	)
}

export default App
