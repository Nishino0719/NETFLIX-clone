import { requests } from '../common/request'
import { Row } from '../components/Row'

export default function Home() {
  return (
    <>
      <div className="App bg-gray-900 m-0">
        <Row
          title="Netflixオリジナル作品"
          fetchUrl={requests.feachNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="人気急上昇の作品" fetchUrl={requests.feactTopRated} />
        <Row title="アクション" fetchUrl={requests.feactActionMovies} />
        <Row title="コメディ" fetchUrl={requests.feactComedyMovies} />
        <Row title="ホラー" fetchUrl={requests.feactHorrorMovies} />
        <Row title="ロマンス" fetchUrl={requests.feactRomanceMovies} />
        <Row title="ドキュメンタリー" fetchUrl={requests.feactDocumentMovies} />
      </div>
    </>
  )
}
