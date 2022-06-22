import axios from 'axios'

export const getData = async (username, option) => {
  let url
  console.log('api - getData - option -> ', option)
  console.log('api - getData - username -> ', username)
  if (option === 'list') {
    url = `https://api.github.com/users/${username}/repos`
  } else if (option === 'user') {
    url = `https://api.github.com/users/${username}`
  } else {
    throw new Error({ error: 'Invalid option' })
  }
  try {
    console.log('api - url -> ', url)
    const data = await axios(url)
    return data
  } catch (err) {
    throw new Error({ err })
  }
}
