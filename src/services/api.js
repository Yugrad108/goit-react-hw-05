import axios from "axios";

const fetchMoviesData = async (endpoint, params = {}) => {
  const url = `https://api.themoviedb.org/3${endpoint}`;

  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    },
    params: { language: "en-US", ...params },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchTrandMovies = (page) => {
  return fetchMoviesData("/trending/movie/day", { page });
};

export const fetchMoviesByKeyWords = (query, page = 1) => {
  return fetchMoviesData("/search/movie", { query, page });
};

export const fetchMovieById = (movie_id) => {
  return fetchMoviesData(`/movie/${movie_id}`);
};

export const fetchMovieCastById = (movie_id) => {
  return fetchMoviesData(`/movie/${movie_id}/credits`);
};

export const fetchMovieReviewsById = (movie_id) => {
  return fetchMoviesData(`/movie/${movie_id}/reviews`);
};
