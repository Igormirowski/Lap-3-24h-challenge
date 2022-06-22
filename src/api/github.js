import axios from 'axios'

export const getData = async (username, type) => {
  let url
  if (type === 'listOfRepos') {
    url = `https://api.github.com/users/${username}/repos`
  } else if (type === 'userDetails') {
    url = `https://api.github.com/users/${username}`
  } else {
    throw new Error({ error: 'Invalid option' })
  }
  try {
    const data = await axios(url)
    return data
  } catch (err) {
    throw new Error({ err })
  }
}
