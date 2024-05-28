import { useEffect, useState } from "react"
import { BeatThePooGame } from "./BeatThePooGame"
import { VisualStatus } from "./VisualStatus"
import { GuessesHistory } from "./GuessesHistory"
import { Hint } from "./Hint"

export interface GameProps {
	gameApi: BeatThePooGame,
}
export function Game({ gameApi }: GameProps) {
	const [startTime, setStartTime] = useState(Date.now())
	const [timeLeft, setTimeLeft] = useState(15)
	const [gameState, setGameState] = useState(gameApi.gameState)

	useEffect(() => {
		const interval = setInterval(() => {
			const secondsElapsed = Math.floor((Date.now() - startTime) / 1000)
			const secondsLeft = 15-secondsElapsed

			setTimeLeft(secondsLeft)
			if(secondsLeft <= 0) {
				clearInterval(interval)
				setGameState(gameApi.loseImmediately())
			}
		}, 200)
		return () => {
			clearInterval(interval)
		}
	}, [startTime, gameApi])

	return <div tabIndex={1} onKeyDown={e => { if(e.key >= 'a' && e.key <= 'z') {
		setStartTime(Date.now())
		setGameState(gameApi.guess(e.key))
	}}}>
		<div>{timeLeft}</div>
		<Hint hint={gameState.hint} />
		<div><VisualStatus failedGuesses={gameState.wrongGuesses}/></div>
		<GuessesHistory previousGuesses={gameState.guesses}/>
	</div>
}
