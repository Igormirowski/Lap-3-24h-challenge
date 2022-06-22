import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails } from '../../components'
import { getData } from '../../api/github'

const Home = () => {
  const [term, setTerm] = useState('')
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getData(term, 'userDetails')
      setUserDetails(userData)
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
      <UserDetails details={userDetails} />
    </>
  )
}

export default Home
