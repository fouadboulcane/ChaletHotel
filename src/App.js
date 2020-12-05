import Header from './components/Header';
import logo from './logo.svg';
import './App.scss'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import RoomSearch from './pages/RoomSearch';
import SinglePost from './pages/SinglePost';
import SingleRoom from './pages/SingleRoom';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/booking">
            <BookingPage />
          </Route>
          <Route path="/room">
            <SingleRoom />
          </Route>
          <Route path="/post">
            <SinglePost />
          </Route>
          <Route path="/room-search">
            <RoomSearch />
          </Route>
          <Route path="/my-account">
            <AccountPage />
          </Route>
          <Route path="/about-us">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
