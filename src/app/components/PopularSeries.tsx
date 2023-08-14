import { api } from '@/services/api'
import Slider from './Slider'

interface SerieResult {
  data: {
    results: {
      name: string
      poster_path: string
    }[]
  }
}

const fetchPopularSeries = async () => {
  try {
    const {
      data: { results },
    } = (await api.get('/tv/popular')) as SerieResult
    return results
  } catch (error) {
    console.log(error)
  }
}

const PopularSeries = async () => {
  const results = await fetchPopularSeries()
  return (
    <div className="p-5">
      <h2 className="font-bold text-white text-2xl my-5">Séries Populares</h2>
      {results && <Slider results={results} />}
    </div>
  )
}

export default PopularSeries
