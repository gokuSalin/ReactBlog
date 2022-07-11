import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Mainsection from './components/Mainsection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

function App(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Mainsection/>}/>
        <Route exact path='/about' element={<AboutSection/>}/>
        <Route exact path='/blog' element={<BlogSection/>}/>
        <Route exact path='/contact' element={<ContactSection/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
