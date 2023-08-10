import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a36e99d0dbe7b42bfcc00f7f030ddedf',
    language: 'pt-BR',
    page: '1',
  },
})
