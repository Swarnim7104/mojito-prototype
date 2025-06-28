import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './components/navbar';
import Hero from './components/Hero';


const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <div className="h-dvh bg-black" />
   </main>
  )
}

export default App