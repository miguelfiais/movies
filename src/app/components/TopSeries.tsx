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

const fetchTopSeries = async () => {
  try {
    const {
      data: { results },
    } = (await api.get('/tv/top_rated')) as SerieResult
    return results
  } catch (error) {
    console.log(error)
  }
}

const TopSeries = async () => {
  const results = await fetchTopSeries()
  console.log(results)
  return (
    <div className="p-5">
      <h2 className="font-bold text-white text-2xl my-5">Top Series</h2>
      {results && <Slider results={results} />}
    </div>
  )
}

export default TopSeries
