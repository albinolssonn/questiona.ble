import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import IndexPage from './pages/IndexPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          
          <Route path='/explore' element={<ExplorePage />}/>
          <Route path='/profile/:id' element={<ProfilePage />}/>


        </Routes>
      </div>
    </Router>
  )
}

export default App;
