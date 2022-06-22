import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails } from '../../components'
import { getData } from '../../api/github'

const Home = () => {
  const [term, setTerm] = useState('octocat')
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getData(term, 'user')

      setUserDetails(data)
    }

    fetchData()
  }, [term])

  const onFormSubmit = (text) => {
    setTerm(text)
  }

  return (
    <>
      <h1>Home</h1>
      <SearchBar onFormSubmit={onFormSubmit} />
      <UserDetails user={userDetails} />
    </>
  )
}

export default Home
