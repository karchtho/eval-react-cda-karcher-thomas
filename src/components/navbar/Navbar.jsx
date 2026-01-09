import classes from './Navbar.module.css';
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from 'react-router-dom';


function Navbar() {

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/')
  }


  return (
    <header>
      <nav>
        <div className={classes.logo}>
          <img src="./src/assets/logo.png" className={classes.logo}></img>
        </div>

        <ul className={classes['nav-links']}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? classes.active : ""}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/films" className={({ isActive }) => isActive ? classes.active : ""}>
              Films
            </NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li className={classes["auth-required"]}>
                <NavLink to="/ajouter" className={({ isActive }) => isActive ? classes.active : ""}>
                  Ajouter
                </NavLink>
              </li>
              <li className={classes["auth-required"]}>
                <button id="logout" onClick={handleLogout}>
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={classes["guest-only"]}>
                <NavLink to="connexion" className={({ isActive }) => isActive ? classes.active : ""}>
                  Connexion
                </NavLink>
              </li>
              <li className={classes["guest-only"]}>
                <NavLink to="/inscription" className={({ isActive }) => isActive ? classes.active : ""}>
                  Inscription
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
