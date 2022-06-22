import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails } from '../../components'
import { getData } from '../../api/github'

const Home = () => {
  const [term, setTerm] = useState('buscaroli')
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    console.log('Home - useEffect - term -> ', term)
    const fetchData = async () => {
      const userData = await getData(term, 'user')
      setUserDetails(userData)
    }

    fetchData()
  }, [term])

  const onFormSubmit = (text) => {
    console.log('HOME - text -> ', text)
    setTerm(text)
  }

  return (
    <>
      <h1>Home</h1>
      <h3>{userDetails.login}</h3>
      <SearchBar onFormSubmit={onFormSubmit} />
      <UserDetails details={userDetails} />
    </>
  )
}

export default Home
