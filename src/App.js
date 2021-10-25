import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Inquires from './components/Inquires';
import Footer from './components/Footer';
import Gallery from './components/Gallery'
import Menu from './components/Menu';
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
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/menu">
              <Menu />
            </Route>
          </Switch>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
