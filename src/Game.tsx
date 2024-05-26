import { useEffect, useRef, useState } from "react"
import { BeatThePooGame } from "./BeatThePooGame"
import { VisualStatus } from "./VisualStatus"
import { GuessesHistory } from "./GuessesHistory"
import { Hint } from "./Hint"

export interface GameProps {
	gameStarted: boolean,
	gameApi?: BeatThePooGame,
}
export function Game({ gameStarted, gameApi = new BeatThePooGame() }: GameProps) {
	const [startTime, setStartTime] = useState(Date.now())
	const [timeLeft, setTimeLeft] = useState(15)
	const [gameState, setGameState] = useState(gameApi.gameState)

	const gameRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if(gameStarted) { gameRef.current?.focus() }
	}, [gameRef, gameStarted])
	
	useEffect(() => {
		if(gameStarted) {
			setStartTime(Date.now())
		}
	}, [gameStarted])
	useEffect(() => {
		let interval: NodeJS.Timeout | null = null
		if(gameStarted) {
			interval = setInterval(() => {
				const secondsElapsed = Math.floor((Date.now() - startTime) / 1000)
				const secondsLeft = 15-secondsElapsed
	
				setTimeLeft(secondsLeft)
				if(secondsLeft <= 0) {
					if(interval) {
						clearInterval(interval)
						interval = null
					}
				}
			}, 200)
		}
		return () => {
			if(interval) {
				clearInterval(interval)
				interval = null
			}
		}
	}, [startTime, gameApi, gameStarted])

	return <div tabIndex={1} onKeyDown={e => { if(e.key >= 'a' && e.key <= 'z') {
		setStartTime(Date.now())
		setGameState(gameApi.guess(e.key))
	}}} ref={gameRef}>
		<div>{timeLeft}</div>
		<Hint hint={gameState.hint} />
		<div><VisualStatus failedGuesses={gameState.wrongGuesses}/></div>
		<text-status ref={el => el && (el.gameState = gameState)}></text-status>
		<GuessesHistory previousGuesses={gameState.guesses}/>
	</div>
}
