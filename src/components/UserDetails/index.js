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

      <ul className={styles.detailsLeftColumn}></ul>

      <ul className={styles.detailsRightColumn}>Right</ul>
    </div>
  )
}

export default UserDetails
