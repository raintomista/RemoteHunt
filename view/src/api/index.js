import axios from 'axios'

export default axios.create({
  baseURL: `http://localhost:5000/remotehunt-3afc6/us-central1/api/`
})