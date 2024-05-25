export interface GuessesHistoryProps {
	previousGuesses: string[],
}
export function GuessesHistory({ previousGuesses }: GuessesHistoryProps) {
	return <div>{previousGuesses.map(g => <span>{g}</span>)}</div>
}