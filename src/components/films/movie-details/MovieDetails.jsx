import { useState } from 'react';
import classes from './MovieDetails.module.css';
import { useFilms } from '../../../context/FilmContext';
import EditMovieForm from '../../forms/edit-movie-form/EditMovieForm'

function MovieDetails({ movieId, onDelete, onEdit, isAuthenticated }) {
  const [isEditing, setIsEditing] = useState(false);
  const { films } = useFilms();  // ← Get films array
  const movie = films.find(f => f.id === movieId);  // ← Find in array

  if (!movie) {
    return <p>Film non trouvé</p>
  }

  const handleSubmitEdit = async (movieData) => {
    await onEdit(movieId, movieData);
    setIsEditing(false)
  };

  return (
    <div className={classes["movie-details"]}>
      {isEditing ? (
        <EditMovieForm
          movie={movie}
          onSubmit={handleSubmitEdit}
        />
      ) : (
        <>
          <div className={classes["movie-header"]}>
            <h1>{movie.title}</h1>
            {isAuthenticated && (

              <div className={classes["movie-actions"]}>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => onDelete(movieId)}>Supprimer</button>
              </div>
            )}
          </div>
          <div className={classes["movie-content"]}>
            <img className={classes["movie-image"]} src={movie.imageUrl} alt={movie.title}></img>
            <div className={classes["movie-info"]}>
              <p className={classes["release-date"]}>{movie.releaseDate}</p>
              <p className={classes["description"]}>{movie.description}</p>
            </div>
          </div>

        </>
      )}
    </div>
  );
}

export default MovieDetails;
