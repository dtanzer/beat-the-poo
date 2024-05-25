export interface GameState {
	hint: (string | null)[],
	wrongGuesses: number,
	guesses: string[],
	playerName: string,
}
export class BeatThePooGame {
	newGame(secretWord: string) {
		sessionStorage.setItem('secretWord', secretWord)
		sessionStorage.setItem('gameState', JSON.stringify({
			hint: secretWord.split('').map(_ => null),
			wrongGuesses: 0,
			guesses: [],
			playerName: '',
		}))
	}

	private updateState(setter: (g: GameState)=>unknown): GameState {
		const gameState = JSON.parse(sessionStorage.getItem('gameState')!)
		setter(gameState)
		sessionStorage.setItem('gameState', JSON.stringify(gameState))
		return gameState
	}
	set playerName(name: string) {
		this.updateState(g => g.playerName = name)
	}
	get gameState(): GameState {
		return JSON.parse(sessionStorage.getItem('gameState')!)
	}

	guess(letter: string): GameState {
		return this.updateState(gs => {
			if(gs.wrongGuesses >= 11) { return this.gameState }
			if(gs.guesses.find(g => g===letter)) {
				gs.wrongGuesses++
				return this.gameState
			}
	
			gs.guesses.push(letter)

			const secretWord = sessionStorage.getItem('secretWord')!
			gs.hint =secretWord.split('').map(l => gs.guesses.find(g => g===l)? l : null)
			if(secretWord.indexOf(letter) < 0) {
				gs.wrongGuesses++
			}
		})
	}

	loseImmediately(): GameState {
		return this.updateState(gs => gs.wrongGuesses = 11)
	}
}