import { api } from '@/services/api'
import Slider from './Slider'

interface SerieResult {
  data: {
    results: {
      name: string
      popular_path: string
    }[]
  }
}

const fetchPopularPeople = async () => {
  try {
    const {
      data: { results },
    } = (await api.get('/person/popular')) as SerieResult
    return results
  } catch (error) {
    console.log(error)
  }
}

const PopularPeople = async () => {
  const results = await fetchPopularPeople()
  console.log(results)
  return (
    <div className="p-5">
      <h2 className="font-bold text-white text-2xl my-5">Top Artistas</h2>
      {results && <Slider results={results} />}
    </div>
  )
}

export default PopularPeople
