import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <BrowserRouter basename="/My-Portfolio">
      <Routes >
        <Route exact path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
