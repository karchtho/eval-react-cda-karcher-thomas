
import { useState } from 'react';
import FormGroup from "../../forms/form-group/FormGroup";
import classes from './EditMovieForm.module.css';

function EditMovieForm({ movie, onSubmit }) {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate);
  const [imageUrl, setImageUrl] = useState(movie.imageUrl);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await onSubmit({ title, description, releaseDate, imageUrl });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={classes["movie-form"]}>
      <h1>Edit movie</h1>
      <form onSubmit={handleSubmit}>

        {error && <p className={classes.error}>{error}</p>}

        <FormGroup
          label="Titre"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <FormGroup
          label="Description"
          type="textarea"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <FormGroup
          label="Date de sortie"
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        />

        <FormGroup
          label="URL de l'image"
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <div className={classes.button}>
          <button type="submit">Upadte movie</button>
        </div>

      </form>
    </div>
  );
}

export default EditMovieForm;