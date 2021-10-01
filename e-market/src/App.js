import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Purchase from './components/Purchase';
import Gadgets from './components/Gadgets';
import Fashion from './components/Fashion';
import ViewItem from './components/ViewItem';
import Books from './components/Books';
import Contact from './components/Contact';
import Checkout from './components/Checkout';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/gadget">
              <Gadgets />
            </Route>
            <Route path="/fashion">
              <Fashion />
            </Route>
            <Route path="/book">
              <Books />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/product/:id">
              <ViewItem />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
