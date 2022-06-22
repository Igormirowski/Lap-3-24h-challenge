import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserDetails from '.'
import SearchBar from '.'

describe('UserDetails', () => {
  const testData = {
    id: '12345',
    login: 'login',
    link: 'link',
    followers: 'followers',
    following: 'following',
    created_at: 'yesterday',
    updated_at: 'today',
  }
  beforeEach(() => {
    render(<UserDetails user={testData} />)
  })

  it('tests the component exists', () => {
    const ud = screen.getByTestId('udWrapper')
    expect(ud).toBeInTheDocument()
  })

  it('tests there are SIX listed details', () => {
    const ud = screen.getByTestId('udWrapper')
    const numberOfItems = within(ud).queryAllByRole('listitem')
    expect(numberOfItems.length).toBe(6)
  })
})
