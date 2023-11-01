// https://github.com/bobangajicsm/react-portfolio-website/blob/master/src/components/Contact/index.scss

import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>

    <Routes basename="/My-Portfolio">
     
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />


      </Route>
    </Routes>
    </>
  );
}

export default App;
