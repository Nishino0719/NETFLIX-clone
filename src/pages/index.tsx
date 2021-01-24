import { requests } from '../common/request'
import { Row } from '../components/Row'

export default function Home() {
  return (
    <>
      <div className="App bg-gray-900 m-0">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.feachNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
        <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
        <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
      </div>
    </>
  )
}
