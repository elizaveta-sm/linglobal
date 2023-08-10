import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero/hero.component';
import FeaturesAndCallToAction from './components/features-and-call-to-action/features-and-call-to-action.component';


import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesAndCallToAction />
    </div>
  )
}

export default App