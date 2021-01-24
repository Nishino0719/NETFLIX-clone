import { useEffect, useState } from 'react'
import instance from '../common/axios'

const base_url = 'https://image.tmdb.org/t/p/original'

type Props = {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="Row">
      <h2 className="font-medium text-xl ml-5 p-1 lg:p-2 text-white">
        {title}
      </h2>
      <div className="Row-posters flex overflow-x-scroll overflow-y-hidden cursor-pointer ml-5">
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) =>
          movie.backdrop_path ? (
            <img
              key={movie.id}
              className={`transition duration-300 transform hover:scale-110 hover:z-10 m-1 lg:m-2 rounded-md ${
                isLargeRow ? 'max-h-44 lg:max-h-56' : 'max-h-24 lg:max-h-36  '
              }`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ) : (
            <div className="" key={movie.id}></div>
          )
        )}
      </div>
    </div>
  )
}
