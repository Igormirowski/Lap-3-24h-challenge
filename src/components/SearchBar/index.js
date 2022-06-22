import React, { useState } from 'react'

import styles from './index.module.css'

function SearchBar({ onFormSubmit }) {
  const [name, setName] = useState('')

  const handleBtnClick = (e) => {
    e.preventDefault()
    console.log('SearchBar - name -> ', name)

    onFormSubmit(name)

    setName('')
  }

  const handleInputChange = (e) => {
    e.preventDefault()

    setName(e.target.value)
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
          value={name}
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
