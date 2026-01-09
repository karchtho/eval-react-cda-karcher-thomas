import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";
import { AuthProvider } from './context/AuthContext'
import { FilmsProvider } from './context/FilmContext'
import Home from './pages/home/Home'
import Films from './pages/films/Films'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddMovie from "./pages/add-movie/AddMovie";

function App() {
  return (
    <AuthProvider>
      <FilmsProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={<Films />} />
            <Route path='/connexion' element={<Login />} />
            <Route path='/inscription' element={<Register />} />
            <Route path='/ajouter' element={<AddMovie />} />
          </Routes>
        </main>
        <Footer />
      </FilmsProvider>
    </AuthProvider>
  )
}

export default App
