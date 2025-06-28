import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Cocktails from './components/cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';


const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
    <Menu />
    <Contact />
   </main>
  )
}

export default App