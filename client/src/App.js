import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import HomePage from './screens/home/HomePage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
