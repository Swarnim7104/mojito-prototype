import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Cocktails from './components/cocktails';
import About from './components/About';
import Art from './components/Art';


const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
   </main>
  )
}

export default App