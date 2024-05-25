export interface GameState {
	hint: (string | null)[],
	wrongGuesses: number,
	guesses: string[],
	playerName: string,
}
export class BeatThePooGame {
	private guessedLetters: string[] = []
	private wrongGuesses = 0
	private _playerName = ''

	constructor(private secretWord: string) {}

	set playerName(name: string) {
		this._playerName = name
	}
	get gameState(): GameState {
		return {
			hint: this.secretWord.split('').map(l => this.guessedLetters.find(g => g===l)? l : null),
			wrongGuesses: this.wrongGuesses,
			guesses: this.guessedLetters,
			playerName: this._playerName,
		}
	}

	guess(letter: string): GameState {
		if(this.wrongGuesses >= 11) { return this.gameState }
		if(this.guessedLetters.find(g => g===letter)) {
			this.wrongGuesses++
			return this.gameState
		}

		this.guessedLetters.push(letter)
		if(this.secretWord.indexOf(letter) < 0) {
			this.wrongGuesses++
		}
		
		return this.gameState
	}

	loseImmediately(): GameState {
		this.wrongGuesses = 11
		return this.gameState
	}
}