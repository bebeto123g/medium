import Axios from 'axios'

export const fetchPhonesAPI = async () => {
  try {
    const response = await Axios.get('http://127.0.0.1:3004/phones')
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log('fetchPhonesAPI', e)
    throw new Error(e)
  }
}
