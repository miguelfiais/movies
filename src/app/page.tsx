import MainMovie from './components/MainMovie'
import TopMovies from './components/TopMovies'
import TopSeries from './components/TopSeries'

export default async function Home() {
  return (
    <>
      <MainMovie />
      <TopMovies />
      <TopSeries />
    </>
  )
}
