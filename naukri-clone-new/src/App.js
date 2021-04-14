import Home from './Components/Home';
import { Navbar } from "./Components/Navbar"
import { Route, Switch } from 'react-router-dom'
import { SearchResultPage } from './Components/SearchResultPage';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search/:job'>
          <SearchResultPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
