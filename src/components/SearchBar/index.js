import React, { useState } from 'react'

import styles from './index.module.css'

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('')
  const [letters, setLetters] = useState('')
  const handleBtnClick = (e) => {
    e.preventDefault()

    // return the searched term to the parent component
    onFormSubmit(term)

    setTerm('')
    setLetters('')
  }

  const handleInputChange = (e) => {
    e.preventDefault()

    setLetters(e.target.value)
  }

  return (
    <form className={styles.wrapper}>
      <div className="imputWrapper">
        <label className="label" htmlFor="searchBar">
          GitHub Name
        </label>
        <input
          onChange={handleInputChange}
          className="input"
          type="text"
          id="searchBar"
          value={letters}
        />
      </div>
      <input
        type="submit"
        value="Search"
        onClick={handleBtnClick}
        className="searchBtn"
      />
    </form>
  )
}

export default SearchBar
