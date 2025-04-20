import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";
import NoImage from "../../assets/NoImage.webp";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => {
        if (!movie.id || !movie.poster_path || !movie.title) {
          return null;
        }

        return (
          <li
            key={`${movie.id}-${movie.poster_path}`}
            className={styles.movieItem}
          >
            <Link state={location} to={`/movies/${movie.id}`}>
              <img
                className={styles.moviePoster}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : NoImage
                }
                alt={movie.title}
              />
              <p className={styles.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
