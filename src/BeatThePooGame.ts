export interface GameState {
	hint: (string | null)[],
	wrongGuesses: number,
	guesses: string[],
	playerName: string,
}
export class BeatThePooGame {
	private _gameState: GameState = {
		hint: [],
		wrongGuesses: 0,
		guesses: [],
		playerName: '',
	}
	constructor(private secretWord: string) {
		this._gameState.hint = secretWord.split('').map(_ => null)
	}

	private updateState(setter: (g: GameState)=>unknown): GameState {
		setter(this._gameState)
		return this._gameState
	}
	set playerName(name: string) {
		this.updateState(g => g.playerName = name)
	}
	get gameState(): GameState {
		return this._gameState
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