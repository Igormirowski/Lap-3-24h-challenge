import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails } from '../../components'
import { getData } from '../../api/github'

const Home = () => {
  const [term, setTerm] = useState('buscaroli')
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    console.log('Home - useEffect - term -> ', term)
    const fetchData = async () => {
      const { data } = await getData(term, 'user')
      console.log('Home - useEffect - userData -> ', data)
      setUserDetails(data)
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
      <UserDetails user={userDetails} />
    </>
  )
}

export default Home
