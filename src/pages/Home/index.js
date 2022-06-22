import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails } from '../../components'
import { getData } from '../../api/github'
import styles from './index.module.css'

const Home = () => {
  const [term, setTerm] = useState('octocat')
  const [userDetails, setUserDetails] = useState({})
  const [listDetails, setListDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getData(term, 'user')

      setUserDetails(data)
    }

    fetchData()
  }, [term])


   /// LIST useEffect
   useEffect(() => {
    const fetchRepos = async () => {
      const { data } = await getData(term, 'list')

      setListDetails(data)
    }

 fetchRepos()
}, [term])


  const onFormSubmit = (text) => {
    setTerm(text)
  }

  return (
    <div className={styles.wrapper}>
      {/* <h1 className={styles.title}>Home</h1> */}
      <SearchBar onFormSubmit={onFormSubmit} />
      <UserDetails user={userDetails} />
       {/* List */}
       {/* <ListDetails list={listDetails} /> */}
    </div>
  )
}

export default Home
