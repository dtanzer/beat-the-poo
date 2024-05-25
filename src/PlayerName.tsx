import { useState } from "react"
import { BeatThePooGame } from "./BeatThePooGame"

export interface PlayerNameProps {
	gameApi: BeatThePooGame,
}
export function PlayerName({ gameApi }: PlayerNameProps) {
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
							gameApi.playerName = (e.target as HTMLInputElement).value
							setNameEntered(true)
						}
					}}/>
			}
		</label>
	</div>
}
