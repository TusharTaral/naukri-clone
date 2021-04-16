
import Routes from "./Signin/Routes"
import Home from './Components/Home';
import { Navbar } from "./Components/Navbar"
import { Route, Switch } from 'react-router-dom'
import { SearchResultPage } from './Components/SearchResultPage';
import SigninNavbar from "./Signin/SigninNavbar";
import { Register } from "./Signin/Register";

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
      {/* <Routes/> */}
      {/* <SigninNavbar/> */}
      {/* <Register/> */}
    </div>
  );
}


export default App;
