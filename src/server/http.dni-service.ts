import axios from 'axios'

const baseDniUrl = 'https://api.apis.net.pe/v2'
const token = 'apis-token-7521.5STApYPIqGJHBNY1I5NZ6SH7aFMEwLyK'

export default axios.create({
  baseURL: baseDniUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer apis-token-7521.5STApYPIqGJHBNY1I5NZ6SH7aFMEwLyK`,
    Accept: 'application/json',    
  },
  withCredentials: false,
});
