import './App.css';
import Layout from './component/Layout/Layout';
import BgChange from './component/bg_Change/BgChange';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Container from './component/Layout/Container/Container';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Register from './component/Register/Register';
import Contact from './component/Contact/Contact';
import User_Profile from './component/Profile/User_Profile/User_Profile';
import Helps from './component/Help/Helps';
import StudentList from './component/Student/StudentList';
import SchoolInformation from './component/School/SchoolInformation';
import Salle from './component/School/salle';
import Cours from './component/School/Cours';
import TeacherList from './component/Teacher/TeacherList';
import Note from './component/Student/Note';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="App">
        <Switch>
          <Route exact path={'/'}>
            <Container/>
          </Route>
          <Route path={"/cours"}>
            <Cours/>
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
          <Route path={"/StudentList"}>
            <StudentList/>
          </Route>
          <Route path={"/School-information"}>
            <SchoolInformation/>
          </Route>
          <Route path={"/salle"}>
            <Salle/>
          </Route>

          <Route path={"/TeacherList"}>
            <TeacherList/>
          </Route>
          <Route path={"/note"}>
            <Note/>
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
