import React, { useState } from 'react'

import styles from './index.module.css'

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('')

  const handleBtnClick = (e) => {
    e.preventDefault()

    // return the searched term to the parent component
    onFormSubmit(term)

    setTerm('')
  }

  return (
    <form className={styles.wrapper}>
      <div className="imputWrapper">
        <label className="label" htmlFor="searchBar">
          GitHub Name
        </label>
        <input className="input" type="text" id="searchBar" value={term} />
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
