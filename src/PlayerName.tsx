import { useState } from "react"

export function PlayerName() {
	const [name, setName] = useState('')
	const [nameEntered, setNameEntered] = useState(false)

	return <div>
		<label>
			Player Name: { nameEntered?
				<span data-testid="player-name">{name}</span>:
				<input type="text" value={name} placeholder="Jane Doe" 
					onChange={e => setName(e.target.value)} data-testid="player-name"
					onKeyDown={e => setNameEntered(e.key === 'Enter') }/>
			}
		</label>
	</div>
}
