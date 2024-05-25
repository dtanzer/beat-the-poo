export interface HintProps {
	hint: (string | null)[]
}
export function Hint({hint}: HintProps) {
	return <div>{hint.map(s => s===null? '_' : s).join(' ')}</div>
}