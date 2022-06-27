import React, { useState, useEffect } from 'react'
import { SearchBar, UserDetails, ListDetails } from '../../components'
import { getData } from '../../api/github'
import styles from './index.module.css'

const Home = () => {
  const [term, setTerm] = useState('octocat')
  const [userDetails, setUserDetails] = useState({})
  const [listDetails, setListDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getData(term, 'user')
      const repos = await getData(term, 'list')

      setUserDetails(data)
      setListDetails(repos.data)
    }

    fetchData()
  }, [term])

  const onFormSubmit = (text) => {
    setTerm(text)
  }

  return (
    <div className={styles.wrapper}>
      <SearchBar onFormSubmit={onFormSubmit} />
      {userDetails && listDetails && <UserDetails user={userDetails} />}

      {listDetails && userDetails && <ListDetails list={listDetails} />}
    </div>
  )
}

export default Home
