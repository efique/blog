import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import ListArticles from './components/admin/listArticles/listArticles';
import AddArticle from './components/admin/addArticle/addArticle';
import ArticleDetails from './components/admin/articleDetails/articleDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin/listArticles" component={ListArticles} />
          <Route exact path="/admin/addArticle" component={AddArticle} />
          <Route exact path="/admin/addArticle/:id" component={AddArticle} />
          <Route exact path="/admin/articleDetails/:id" component={ArticleDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;