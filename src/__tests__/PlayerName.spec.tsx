import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { PlayerName } from '../PlayerName'

describe('<PlayerName />', () => {
	it('contains empty text field before first input', async () => {
		render(<PlayerName />)
		
		await screen.findByPlaceholderText('Jane Doe')

		expect(screen.getByPlaceholderText('Jane Doe')).toHaveAttribute('value', '')
	})

	it('updates the text field on input', async () => {
		const {container} = render(<PlayerName />)

		await fireEvent.change(container.getElementsByTagName('input').item(0)!, {target: { value: 'hello'}})
		await screen.findByPlaceholderText('Jane Doe')

		expect(screen.getByPlaceholderText('Jane Doe')).toHaveAttribute('value', 'hello')
	})

	it('changes the text field to span on [Enter]', async () => {
		const {container} = render(<PlayerName />)

		await fireEvent.change(container.getElementsByTagName('input').item(0)!, {target: { value: 'hello'}})
		await fireEvent.keyDown(container.getElementsByTagName('input').item(0)!, { key: 'Enter' })
		await screen.findByTestId('player-name')

		expect(screen.getByTestId('player-name')).toBeInstanceOf(HTMLSpanElement)
		expect(screen.getByTestId('player-name')).toHaveTextContent('hello')
	})
})
