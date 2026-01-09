import { useState } from 'react';
import FilmsGrid from '../../components/films/films-grid/FilmsGrid';
import classes from './Films.module.css';
import MovieDetails from "../../components/films/movie-details/MovieDetails";
import { useFilms } from '../../context/FilmContext';
import { useAuth } from '../../context/AuthContext';

function Films() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { films, deleteMovie, updateMovie } = useFilms();
  const { isAuthenticated } = useAuth();

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûrs ?')) {
      await deleteMovie(id);
      setSelectedMovieId(null);
    }
  };

  const handleEdit = async (id, movieData) => {
    await updateMovie(id, movieData);
  }

  return (
    <div className={classes['movies-page']}>
      {selectedMovieId === null ? (
        <>
          <h1 className={classes.titre}>Films</h1>
          <FilmsGrid
            movies={films}
            onSelectMovie={setSelectedMovieId}
          />
        </>
      ) : (
        <MovieDetails
          movieId={selectedMovieId}
          onDelete={handleDelete}
          onEdit={handleEdit}
          isAuthenticated={isAuthenticated}
        />
      )
      }
    </div>
  );
}

export default Films;
