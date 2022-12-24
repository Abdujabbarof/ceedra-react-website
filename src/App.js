import './Main.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage';
import Header from './components/Header';
import Footer from './components/Footer';
import End from './components/End';
import ThemeButton from './components/ThemeButton';
import { useContext, useState } from 'react';
import { ThemeContext } from './components/ThemeContext';

function App() {
  const {darkMode} = useContext(ThemeContext)
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)

  return (
    <div className="App" >
        {
          token ? <>
            <Header darkMode={darkMode} />
            <ThemeButton />
            <>
              <Routes>
                <Route path='/' element={<FirstPage darkMode={darkMode}/>} />
                <Route path='/second' element={<SecondPage darkMode={darkMode}/>} />
                <Route path='/second/:id' element={<ThirdPage darkMode={darkMode}/>} />
              </Routes>
            </>
            <Footer darkMode={darkMode} />
            <End setToken={setToken} darkMode={darkMode} />
          </> : <Login token={token} setToken={setToken} />
        }
    </div>
  );
}

export default App;
