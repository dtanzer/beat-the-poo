import { useState } from "react"
import { BeatThePooGame } from "./BeatThePooGame"

export interface PlayerNameProps {
	onNameEntered?: (name: string) => unknown,

	gameApi?: BeatThePooGame,
}
export function PlayerName({ onNameEntered, gameApi = new BeatThePooGame() }: PlayerNameProps) {
	const [name, setName] = useState('')
	const [nameEntered, setNameEntered] = useState(false)

	return <div>
		<label>
			Player Name: { nameEntered?
				<span data-testid="player-name">{name}</span>:
				<input type="text" value={name} placeholder="Jane Doe" 
					onChange={e => setName(e.target.value)} data-testid="player-name"
					onKeyDown={e => {
						if(e.key === 'Enter') {
							const name = (e.target as HTMLInputElement).value
							gameApi.playerName = name
							setNameEntered(true)
							onNameEntered?.(name)
						}
					}}/>
			}
		</label>
	</div>
}
