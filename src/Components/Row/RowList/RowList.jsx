// import "./row.css";
import Row from "../Row.jsx";
import request from "../../../Utils/request.jsx";

const RowsList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action movie" fetchUrl={request.fetchActionMovies} />
      <Row title="comedy movie" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror movie" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance movie" fetchUrl={request.fetchRomanceMovies} />
      <Row title="TvShow" fetchUrl={request.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </>
  );
};

export default RowsList;
