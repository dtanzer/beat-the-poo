import { useState } from "react"

export function PlayerName() {
	const [name, setName] = useState('')

	return <div>
		<label>
			Player Name: <input type="text" value={name} placeholder="Jane Doe" 
				onChange={e => setName(e.target.value)} />
		</label>
	</div>
}
