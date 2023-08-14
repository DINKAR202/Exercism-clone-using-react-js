import NavBar from './components/NavBar/NavBar';
import TopBar from './components/topBar/TopBar';
import Hero from './components/header/hero';
import Explore from './components/Explore/Explore';
import Manylan from './components/ManyLan/Manylan';
import Over_data from './components/Over_data/Over_data';
import Automated from './components/Automated/Automated';
import Big_banner from './components/Big_banner/Big_banner';
import Mentoring from './components/Mentoring/Mentoring';
import Practice from './components/Practice/Practice';

function App() {
  return (
    <>
        <TopBar/>
        <NavBar/>
        <Hero/>
        <Explore/>
        <Manylan />
        <Over_data />
        <Automated />
        <Big_banner />
        <Mentoring />
        <Practice />
    </>
  );
}

export default App;
