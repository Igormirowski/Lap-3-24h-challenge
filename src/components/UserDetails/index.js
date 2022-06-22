import React from 'react'
import styles from './index.module.css'

function UserDetails({ user }) {
  console.log('UserDetails - login -> ', user.login)
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}>
        <img className={styles.img} src={user.avatar_url} alt="avatar" />
      </div>

      <ul className={styles.detailsLeftColumn}>
        <li className={styles.detail}>Name: {user.login}</li>
        <li className={styles.detail}>GitHub: {user.html_url}</li>
        <li className={styles.detail}>Followers: {user.followers}</li>
        <li className={styles.detail}>Following: {user.following}</li>
      </ul>

      <ul className={styles.detailsRightColumn}>
        <li className={styles.detail}>Created: {user.created_at}</li>
        <li className={styles.detail}>Updated: {user.updated_at}</li>
      </ul>
    </div>
  )
}

export default UserDetails
