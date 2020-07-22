import axios from 'axios'

const viacep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

const api = axios.create({
  baseURL: 'https://ecoleta-deno-api.glitch.me/'
})


export { viacep, api }