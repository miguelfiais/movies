import MainMovie from './components/MainMovie'
import PopularPeople from './components/PopularPeople'
import PopularSeries from './components/PopularSeries'
import TopMovies from './components/TopMovies'
import TopSeries from './components/TopSeries'

export default async function Home() {
  return (
    <>
      <MainMovie />
      <TopMovies />
      <TopSeries />
      <PopularSeries />
      <PopularPeople />
    </>
  )
}
