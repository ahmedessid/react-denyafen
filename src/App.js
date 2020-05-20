import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Header from './components/InAllPages/Header';
import Footer from './components/InAllPages/Footer';
import Policy from './pages/Policy';
import OtherArtsPage from './pages/OtherArtsPage';
import DesactivateAccount from './pages/DesactivateAccount';
import EditProfile from './pages/EditProfile';
import NewArticles from './pages/NewArticles';
import ArticlePage from './pages/ArticlePage';
import Profile from './pages/Profile';
import ScrollToTop from './components/InAllPages/ScrollToTop';

import './App.css';

function App() {

  return (
    <div className="site">
      <Router history={BrowserRouter}>
        <Header />
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/all_articles" component={NewArticles} />
            <Route path="/newsletter" component={News} />
            <Route path="/policy" component={Policy} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/desactivate_account" component={DesactivateAccount} />
            <Route exact path="/other_topics" component={OtherArtsPage} />
          </ScrollToTop>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;