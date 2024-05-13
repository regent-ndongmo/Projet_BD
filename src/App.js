import './App.css';
import Layout from './component/Layout/Layout';
import BgChange from './component/bg_Change/BgChange';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Progress from './component/school_year/progression/Progress';
import Container from './component/Layout/Container/Container';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Register from './component/Register/Register';
import Contact from './component/Contact/Contact';
import User_Profile from './component/Profile/User_Profile/User_Profile';
import Helps from './component/Help/Helps';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="App">
        <Switch>
          <Route exact path={'/'}>
            <Container/>
          </Route>
          <Route path={"/Progression"}>
            <Progress/>
          </Route>
          <Route path={"/Login"}>
            <Login/>
          </Route>
          <Route path={"/Register"}>
            <Register/>
          </Route>
          <Route path={"/Contact"}>
            <Contact/>
          </Route>
          <Route path={"/User_Profile"}>
            <User_Profile/>
          </Route>
          <Route path={"/Helps"}>
            <Helps/>
          </Route>
        </Switch>
      </div>
      <Layout/>
  
      <Footer/>

     </div>
     </Router>
  );
}

export default App;
