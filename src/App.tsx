import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
        {/* <Counter /> */}
        <Header />
        <BrowserRouter>
          <Routes>
              <Route path="/detail/:cca3" element={<Detail />} />
              <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
