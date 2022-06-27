import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '.'

describe('SearchBar', () => {
  beforeEach(() => {
    render(<SearchBar />)
  })

  it('tests the SearchBar exists', () => {
    const searchbar = screen.getByTestId('form')
    expect(searchbar).toBeInTheDocument()
  })

  it('tests the SearchBar input text initial value is an empty string', () => {
    const input = screen.getByTestId('searchInput')
    expect(input.value).toEqual('')
  })

  it('tests the SearchBar Label text is "Search" ', () => {
    const label = screen.getByTestId('searchLabel')
    expect(label.textContent).toEqual('Search')
  })
})
