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
        </Switch>
      </div>
      <Layout/>
      <BgChange/> 

     </div>
     </Router>
  );
}

export default App;
