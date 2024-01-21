import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<main/>', () => {
  test('visible', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeVisible()

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  test('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
      'color': '#fff'
    })
  })
})
