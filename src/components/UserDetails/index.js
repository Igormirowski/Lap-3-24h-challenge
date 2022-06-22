import React from 'react'
import styles from './index.module.css'

function UserDetails({ user }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}>
        <img className={styles.img} src={user.avatar_url} alt="avatar" />
      </div>

      <ul className={styles.detailsLeftColumn}>
        <li className={styles.detail}>
          Name: <span className={styles.span}>{user.login}</span>
        </li>
        <li className={styles.detail}>
          GitHub:{' '}
          <span className={styles.span}>
            <a
              className={styles.link}
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              visit page
            </a>
          </span>
        </li>
        <li className={styles.detail}>
          Followers: <span className={styles.span}>{user.followers}</span>
        </li>
        <li className={styles.detail}>
          Following: <span className={styles.span}>{user.following}</span>
        </li>
      </ul>

      <ul className={styles.detailsRightColumn}>
        <li className={styles.detail}>
          Created:{' '}
          <span className={styles.span}>
            {user.created_at
              ? user.created_at.split('').slice(0, 10).join('').toString()
              : 'unknown'}
          </span>
        </li>
        <li className={styles.detail}>
          Updated:{' '}
          <span className={styles.span}>
            {user.updated_at
              ? user.updated_at.split('').slice(0, 10).join('').toString()
              : 'unknown'}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default UserDetails
