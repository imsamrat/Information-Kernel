import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Information from "./pages/Information";
import Faq from "./pages/Faq";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import ReactGa from "react-ga";

// Components
import NavBar from "./components/NavBar";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    ReactGa.initialize('G-Y7P50T5P4C')
    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  },[])


  return (
    <Router>
      <NavBar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/information' component={Information} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/articles-list' component={ArticlesList} />
          <Route exact path='/article/:name' component={Article} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
