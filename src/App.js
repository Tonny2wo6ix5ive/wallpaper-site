import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './nav';
import Home from './home';
import Desktop from './desktop';
import Mobile from './mobile';
import Footer from './footer';


function App() {

  return (
    <div>
      <NavBar />
      <div>
        <Home />
      </div>
      <div>
        <Desktop />
      </div>
      <div>
        <Mobile />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
