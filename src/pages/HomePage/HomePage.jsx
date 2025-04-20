import { useEffect, useState } from "react";
import { fetchTrandMovies } from "../../services/api";
import MoviesList from "../../components/MovieList/MovieList";
import MoviesListTitle from "../../components/MoviesListTitle/MoviesListTitle";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisibleMovies, setIsVisibleMovies] = useState(false);
  const [pages, setPages] = useState(false);

  // console.log(page);

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        setIsLoading(true);

        const { results, total_pages, total_results } = await fetchTrandMovies(
          page
        );

        if (!results || results.length === 0 || total_results === 0) {
          return setIsEmpty(true);
        }

        if (page === 1) {
          setMovies(results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...results]);
        }

        setPages(total_pages);

        setIsVisibleMovies(page < total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTrandingMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <MoviesListTitle />
      {error && <p>Someting went wrong</p>}
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {!isEmpty && isVisibleMovies && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} page={page} totalPages={pages} />
      )}
      <ScrollTopBtn />
    </>
  );
};

export default HomePage;
