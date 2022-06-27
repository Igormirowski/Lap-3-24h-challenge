import React from 'react'
import styles from './index.module.css'

function Repo({ repo }) {
  return (
    <li key={repo.name} className={styles.wrapper}>
      <div>Name: {repo.name}</div>
      <div>
        Url:{' '}
        <a
          className={styles.link}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          visit repo
        </a>
      </div>
      <div>Forked: {repo.forks_count} times</div>
    </li>
  )
}

export default Repo
