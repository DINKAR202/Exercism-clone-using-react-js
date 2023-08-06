import NavBar from './components/NavBar/NavBar';
import TopBar from './components/topBar/TopBar';
import Hero from './components/header/hero';
import Explore from './components/Explore/Explore';
import Manylan from './components/ManyLan/Manylan';
import Python from '../src/components/img/lang-logo/python.svg'


function App() {
  return (
    <>
        <TopBar/>
        <NavBar/>
        <Hero/>
        <Explore/>
        <Manylan />
    </>
  );
}

export default App;
