import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails } from '../../components'
import { getData } from '../../api/github'
import styles from './index.module.css'

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
    <div className={styles.wrapper}>
      {/* <h1 className={styles.title}>Home</h1> */}
      <SearchBar onFormSubmit={onFormSubmit} />
      <UserDetails user={userDetails} />
    </div>
  )
}

export default Home
