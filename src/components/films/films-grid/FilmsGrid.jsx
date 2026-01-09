import MovieCard from '../movie-card/MovieCard';
import classes from './FilmsGrid.module.css';

function FilmsGrid({ movies, onSelectMovie }) {
  if (movies.length === 0) {
    return (
      <>
        <p>Aucun film trouvé</p>
      </>

    )
  }
  return (
    <div className={classes['movies-grid']}>
      {movies.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelect={onSelectMovie}
          />
        )
      })}
    </div>
  );
}

export default FilmsGrid;
