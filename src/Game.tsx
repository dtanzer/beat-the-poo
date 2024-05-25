import { useEffect, useState } from "react"
import { BeatThePooGame } from "./BeatThePooGame"
import { VisualStatus } from "./VisualStatus"
import { GuessesHistory } from "./GuessesHistory"

export interface GameProps {
	gameApi?: BeatThePooGame,
}
export function Game({ gameApi = new BeatThePooGame() }: GameProps) {
	const [startTime, setStartTime] = useState(Date.now())
	const [timeLeft, setTimeLeft] = useState(15)
	const [wrongGuesses, setWrongGuesses] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			const secondsElapsed = Math.floor((Date.now() - startTime) / 1000)
			const secondsLeft = 15-secondsElapsed

			setTimeLeft(secondsLeft)
			if(secondsLeft <= 0) {
				setWrongGuesses(gameApi.loseImmediately().wrongGuesses)
				clearInterval(interval)
			}
		}, 200)
		return () => {
			clearInterval(interval)
		}
	}, [startTime, gameApi])

	return <>
		<div>{timeLeft}</div>
		<div><VisualStatus failedGuesses={wrongGuesses}/></div>
		<GuessesHistory previousGuesses='Previous Guesses'/>
	</>
}
