import { createContext, useContext, useEffect, useState } from "react";
import { MovieService } from "../services/movie";

const FilmsContext = createContext();

export const FilmProvider = ({ children }) => {

  const [films, setFilms] = useState([])

  useEffect(() => {
    MovieService.getAllMovies().then(setFilms);
  }, [])

  const getAllMovies = async () => {
    return films
  }

  const getMoviesById = (id) => {
    return MovieService.getMovieById(id)
  }

  const createMovie = async (movieDate) => {
    const addMovie = await MovieService.createMovie(movieDate)
    setFilms(films => [...films, addMovie])
  }

  const updateMovie = async (id, movieData) => {
    const updatedMovie = await MovieService.updateMovie(id, movieData)
    setFilms(films => films.map(film => film.id === id ? updatedMovie : film))
  }

  const deleteMovie = async (id) => {
    setFilms(films => films.filter(films.id !== id))
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