import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Desktop from './desktop';
import Home from './home';
import NavBar from './nav';


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
    </div>
  );
}

export default App;
