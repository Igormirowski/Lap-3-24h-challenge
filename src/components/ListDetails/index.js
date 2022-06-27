import React from 'react'
import Repo from '../Repo'
function ListDetails({ list }) {
  return (
    <ul>
      {list
        ? list.map((repository) => (
            <Repo key={repository.name} repo={repository} />
          ))
        : 'Loading...'}
    </ul>
  )
}

export default ListDetails

// name
// html_url
// stargazers_count
// watchers_count
// forks_count
