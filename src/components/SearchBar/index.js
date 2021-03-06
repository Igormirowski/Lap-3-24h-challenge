import React, { useState } from 'react'

import styles from './index.module.css'

function SearchBar({ onFormSubmit }) {
  const [name, setName] = useState('')

  const handleBtnClick = (e) => {
    e.preventDefault()

    onFormSubmit(name)
    setName('')
  }

  const handleInputChange = (e) => {
    e.preventDefault()

    setName(e.target.value)
  }

  return (
    <form data-testid="form" className={styles.wrapper}>
      <div className="imputWrapper">
        <label
          data-testid="searchLabel"
          className={styles.label}
          htmlFor="searchBar"
        >
          Search
        </label>

        <input
          data-testid="searchInput"
          onChange={handleInputChange}
          className={styles.input}
          type="text"
          id="searchBar"
          value={name}
        />
      </div>

      <input
        type="submit"
        value="Search"
        onClick={handleBtnClick}
        className={styles.searchBtn}
      />
    </form>
  )
}

export default SearchBar
