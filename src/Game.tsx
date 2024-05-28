import { useEffect, useRef, useState } from "react"
import { BeatThePooGame } from "./BeatThePooGame"
import { VisualStatus } from "./VisualStatus"
import { GuessesHistory } from "./GuessesHistory"
import { Hint } from "./Hint"

export interface GameProps {
	gameApi: BeatThePooGame,
	gameStarted: boolean,
}
export function Game({ gameApi, gameStarted }: GameProps) {
	const [startTime, setStartTime] = useState(Date.now())
	const [timeLeft, setTimeLeft] = useState(15)
	const [gameState, setGameState] = useState(gameApi.gameState)

	const gameElementRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let interval: NodeJS.Timeout | undefined
		if(gameStarted) {
			setStartTime(Date.now())
			interval = setInterval(() => {
				const secondsElapsed = Math.floor((Date.now() - startTime) / 1000)
				const secondsLeft = 15-secondsElapsed
	
				setTimeLeft(secondsLeft)
				if(secondsLeft <= 0) {
					if(interval) { clearInterval(interval) }
					setGameState(gameApi.loseImmediately())
				}
			}, 200)
		}
		return () => {
			if(interval) { clearInterval(interval) }
		}
	}, [startTime, gameApi, gameStarted])

	useEffect(() => {
		if(gameStarted) {
			gameElementRef.current?.focus()
		}
	}, [gameElementRef, gameStarted])
	
	return <div tabIndex={1} onKeyDown={e => { if(e.key >= 'a' && e.key <= 'z') {
		setStartTime(Date.now())
		setGameState(gameApi.guess(e.key))
	}}} ref={gameElementRef}>
		<div>{timeLeft}</div>
		<Hint hint={gameState.hint} />
		<text-status wrongGuesses={gameState.wrongGuesses}></text-status>
		<div><VisualStatus failedGuesses={gameState.wrongGuesses}/></div>
		<GuessesHistory previousGuesses={gameState.guesses}/>
	</div>
}
