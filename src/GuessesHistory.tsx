export interface GuessesHistoryProps {
	previousGuesses: string,
}
export function GuessesHistory({ previousGuesses }: GuessesHistoryProps) {
	return <div>{previousGuesses}</div>
}