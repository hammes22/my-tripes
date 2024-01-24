import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper/>', () => {
  test('should render link and children', () => {
    const textChildren = 'Anything'
    const link = '/my-link'
    render(<LinkWrapper href={link}> {textChildren}</LinkWrapper>)
    const children = screen.getByText(textChildren)
    expect(children).toBeVisible()
    expect(children).toHaveAttribute('href', link)
  })
})
