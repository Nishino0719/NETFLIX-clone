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
      <h2 className="font-bold text-2xl ml-1">{title}</h2>
      <div className="Row-posters flex overflow-x-scroll ">
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) =>
          movie.backdrop_path ? (
            <img
              key={movie.id}
              className=" transition transform hover:scale-150 max-h-40 hover:max-h-60 hover:z-10 m-1 rounded-md"
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
