
import Routes from "./Signin/Routes"
import Home from './Components/Home';
import { Navbar } from "./Components/Navbar"
import { Route, Switch } from 'react-router-dom'
import { SearchResultPage } from './Components/SearchResultPage';
import SigninNavbar from "./Signin/SigninNavbar";
import Login from "./Signin/Login";
import Education from "./Components/Register/Education";
import Personal from "./Components/Register/Personal";
import Details from "./Components/Register/Details"
import { JobDescription } from "./JobDescription/JobDescription";
import ProfilePage from "./Components/Profile/ProfilePage";


function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/search/:job'>
          <SearchResultPage />
        </Route>
        <Route exact path='/search/:job/:id'>
          <JobDescription />
        </Route>
        <Route path='/login'>
          <Routes />
        </Route>

      </Switch>
      {/* <ProfilePage/> */}

    </div>
  );
}


export default App;


