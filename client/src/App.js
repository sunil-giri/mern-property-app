import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './screens/home/HomePage';
import Login from './screens/login/login';
import Register from './screens/register/register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
  );
}

export default App;
