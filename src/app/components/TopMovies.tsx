import { api } from '@/services/api'
import Slider from './Slider'

export interface MovieResult {
  data: {
    results: {
      title: string
      overview: string
      poster_path: string
      backdrop_path: string
    }[]
  }
}
const fetchTopMovies = async () => {
  try {
    const {
      data: { results },
    } = (await api.get('/movie/top_rated')) as MovieResult
    return results
  } catch (error) {
    console.log(error)
  }
}

const TopMovies = async () => {
  const results = await fetchTopMovies()
  return (
    <div className="p-5">
      <h2 className="font-bold text-white text-2xl my-5">Top Filmes</h2>
      {results && <Slider results={results} />}
    </div>
  )
}

export default TopMovies
