import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Inquires from './components/Inquires';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="webContent main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/inquires">
              <Inquires />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
