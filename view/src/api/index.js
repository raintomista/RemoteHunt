import axios from 'axios'

export default axios.create({
  baseURL: `https://us-central1-remotehunt-3afc6.cloudfunctions.net/api/`
})