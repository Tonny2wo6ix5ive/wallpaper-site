import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './nav';
import Home from './home';
import Desktop from './desktop';
import Mobile from './mobile';
import Footer from './footer';


function App() {

  return (
    <div className='App'>
      <nav className='nav'>
        <NavBar/>
      </nav>
      <section id="home" class="section1">
        <Home/>
      </section>
      <section id="pc" class="section2">
        <Desktop/>
      </section>
      <section id="pc" class="section2">
        <Mobile/>
      </section>
    </div>
  );
}

export default App;
