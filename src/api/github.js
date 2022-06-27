import axios from 'axios'

export const getData = async (username, option) => {
  let url

  if (option === 'list') {
    url = `https://api.github.com/users/${username}/repos`
  } else if (option === 'user') {
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
