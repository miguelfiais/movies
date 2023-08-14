import { api } from '@/services/api'
import Image from 'next/image'

export interface IMovie {
  data: {
    results: {
      title: string
      overview: string
      poster_path: string
      backdrop_path: string
    }[]
  }
}

const fetchMovies = async () => {
  try {
    const {
      data: { results },
    } = (await api.get('/movie/popular')) as IMovie
    return results
  } catch (error) {
    console.log(error)
  }
}

const MainMovie = async () => {
  const movies = await fetchMovies()

  if (!movies) return null

  const numberRandom = Math.floor(Math.random() * (20 - 0))

  const movieRandom = movies[numberRandom]

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieRandom.backdrop_path})`,
      }}
      className={`relative h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-60`}
    >
      <div className="container  mx-auto z-10 text-white flex items-center justify-evenly">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold">{movieRandom.title}</h1>
          <p className="text-lg my-5">{movieRandom.overview}</p>
          <div className="flex items-center gap-5">
            <button className="py-2 px-4 bg-red-600 font-medium text-white rounded-3xl shadow-md shadow-red-600 border-2 border-red-600">
              Assista agora
            </button>
            <button className="py-2 px-4 border-2 rounded-3xl font-medium hover:bg-white hover:text-red-600">
              Assista o trailer
            </button>
          </div>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${movieRandom.poster_path}`}
          alt={movieRandom.title}
          width={300}
          height={450}
          className="rounded-xl"
        />
      </div>
    </div>
  )
}

export default MainMovie
