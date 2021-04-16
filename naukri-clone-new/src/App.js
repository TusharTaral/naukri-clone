
import Routes from "./Signin/Routes"
import Home from './Components/Home';
import { Navbar } from "./Components/Navbar"
import { Route, Switch } from 'react-router-dom'
import { SearchResultPage } from './Components/SearchResultPage';
import SigninNavbar from "./Signin/SigninNavbar";
import Login from "./Signin/Login";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search/:job'>
          <SearchResultPage />
        </Route>
        <Route path='/login'>
          <Routes />
        </Route>
      </Switch>
      {/* <Routes/> */}
      {/* <SigninNavbar/> */}
    </div>
  );
}


export default App;
