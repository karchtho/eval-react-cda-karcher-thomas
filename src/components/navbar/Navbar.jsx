import classes from './Navbar.module.css';

function Navbar() {
  return (
<header>
    <nav>
        <div className={ classes.logo }>
            <img src="./src/assets/logo.png" className={ classes.logo }></img>
        </div>
        <ul className={ classes['nav-links'] }>
            <li><a href="#" data-page="home" className={classes.active}>Accueil</a></li>
            <li><a href="#" data-page="movies">Films</a></li>
            <li className={classes["auth-required"]}><a href="#" data-page="add-movie">Ajouter</a></li>
            <li className={classes["guest-only"]}><a href="#" data-page="login">Connexion</a></li>
            <li className={classes["guest-only"]}><a href="#" data-page="register">Inscription</a></li>
            <li className={classes["auth-required"]}><a href="#" id="logout">Déconnexion</a></li>
        </ul>
    </nav>
</header>
  );
}

export default Navbar;
