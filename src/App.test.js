import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn nav', () => {
  render(<App />)
  const linkElement = screen.getByText(/bob/i);
  expect(linkElement).toBeInTheDocument()
})
