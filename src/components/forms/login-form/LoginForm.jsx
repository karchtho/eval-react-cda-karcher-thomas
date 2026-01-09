/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import classes from './LoginForm.module.css';
import FormGroup from "../form-group/FormGroup";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password)
      navigate('/films');
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      {error && <p className={`${classes.error} ${classes.message}`}>{error}</p>}

      <div className={classes["auth-form"]}>

        <h1 className={classes.titre}>Inscription</h1>
        <form onSubmit={handleSubmit}>


          <FormGroup
            label='Email'
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormGroup
            label='Mot de passe'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={classes.button} type='submit'>S'inscrire</button>

        </form>

      </div>
    </>
  );
}

export default LoginForm;
