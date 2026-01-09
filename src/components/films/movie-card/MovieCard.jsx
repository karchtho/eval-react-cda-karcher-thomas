import classes from './MovieCard.module.css';

function MovieCard({ movie, onSelect }) {
  return (
    <div className={classes["movie-card"]} onClick={() => onSelect(movie.id)}>
      <img src={movie.imageUrl} alt={movie.title} className={classes.image}></img>
      <div className={classes["movie-card-content"]}>
        <h2>{movie.title}</h2>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
