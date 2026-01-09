import { createContext, useContext, useEffect, useState } from "react";
import { MovieService } from "../services/movie";

const movieService = new MovieService();

const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {


  const [films, setFilms] = useState([])

  useEffect(() => {
    movieService.getAllMovies().then(setFilms);
  }, [])

  const getAllMovies = async () => {
    return films
  }

  const getMoviesById = (id) => {
    return movieService.getMovieById(id);
  }

  const createMovie = async (movieDate) => {
    const addMovie = await movieService.createMovie(movieDate);
    setFilms(films => [...films, addMovie]);
  }

  const updateMovie = async (id, movieData) => {
    const updatedMovie = await movieService.updateMovie(id, movieData);
    setFilms(films => films.map(film => film.id === id ? updatedMovie : film))
  }

  const deleteMovie = async (id) => {
    await movieService.deleteMovie(id);
    setFilms(films => films.filter(film => film.id !== id))
  }

  const value = {
    films,
    getAllMovies,
    getMoviesById,
    createMovie,
    updateMovie,
    deleteMovie,
  };

  return (
    <FilmsContext.Provider value={value}>
      {children}
    </FilmsContext.Provider>
  )

}

export function useFilms() {
  return useContext(FilmsContext)
}