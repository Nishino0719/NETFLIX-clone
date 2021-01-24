import { useEffect, useState } from 'react'
import instance from '../common/axios'
import { requests } from '../common/request'

const base_url = 'https://image.tmdb.org/t/p/original'

type movieProps = {
  title?: string
  name?: string
  orignal_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.feachNetflixOriginals)

      //apiからランダムで値を取得している
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  function truncate(str: any, n: number) {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }
  return (
    <>
      <div className="1/5 lg:h-1/4">
        <header
          className="Banner h-full relative"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url("${base_url}${
              !movie ? '/9PaJZrGW5qYXfSVJYAmKIEEQMdH.jpg' : movie?.backdrop_path
            }")`,
            backgroundPosition: 'center center'
          }}
        >
          <div className="Banner-contents relative">
            <h1 className="banner-title text-4xl text-white font-medium pt-60 mx-6">
              {movie?.title || movie?.name || movie?.orignal_name}
            </h1>
            <div className="Banner-buttons flex ">
              <button className="Banner-button btn">Play</button>
              <button className="Banner-button btn">My List</button>
            </div>

            <h1 className="Banner-description mx-8 font-normal text-white w-72 whitespace-pre-wrap py-5">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </header>
      </div>
    </>
  )
}
