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
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';

function App() {
  const {darkMode} = useContext(ThemeContext)

  return (
    <div className="App" >
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
        <End darkMode={darkMode} />
    </div>
  );
}

export default App;
