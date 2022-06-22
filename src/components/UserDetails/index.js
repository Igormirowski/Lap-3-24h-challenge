import React from 'react'
import styles from './index.module.css'

function UserDetails({
  login,
  avatar_url,
  html_url,
  followers,
  following,
  created_at,
  updated_at,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}>
        <img className={styles.img} src={avatar_url} alt="avatar" />
      </div>

      <ul className={styles.detailsLeftColumn}>
        <li className={styles.detail}>Name: {login}</li>
        <li className={styles.detail}>GitHub: {html_url}</li>
        <li className={styles.detail}>Followers: {followers}</li>
        <li className={styles.detail}>Following: {following}</li>
      </ul>

      <ul className={styles.detailsRightColumn}>
        <li className={styles.detail}>Created: {created_at}</li>
        <li className={styles.detail}>Updated: {updated_at}</li>
      </ul>
    </div>
  )
}

export default UserDetails
