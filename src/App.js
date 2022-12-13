import './Main.scss';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage';
import Header from './components/Header';
import Footer from './components/Footer';
import End from './components/End';

function App() {
  return (
    <div className="App">
        <Header />

        <>
          <Routes>
            <Route path='/' element={<FirstPage/>} />
            <Route path='/second' element={<SecondPage/>} />
            <Route path='/second/:id' element={<ThirdPage/>} />
          </Routes>
        </>

        <Footer />
        <End />
    </div>
  );
}

export default App;
