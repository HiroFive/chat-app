import './App.css';
import Main  from './Components/Chat/Main'
import SignUp from './Components/Auth/SignUp';
import {Container} from 'react-bootstrap'
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import Login from './Components/Auth/Login';
import Profile from './Components/Auth/Profile';
import PrivateRoute from './Components/Auth/PrivateRoute'
import ForgotPassword from './Components/Auth/ForgotPassword';
import UpdateProfile from './Components/Auth/UpdateProfile';
import SideBar from './Components/Chat/SideBar';


function App() {
  return (
      <Container className='d-flex align-item-center justify-content-center' style={ {minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth: '400px'}}>
          <Router>
             <AuthProvider>
               <Switch>
                 <PrivateRoute exact path='/' component={Main}/>
                 <Route path='/SignUp' component={SignUp}/>
                 <Route path='/Login' component={Login}/>
                 <PrivateRoute path='/Profile' component={Profile}/>
                 <Route path='/forgot-password' component={ForgotPassword}/>
                 <PrivateRoute path='/update-profile' component={UpdateProfile}/>
               </Switch>
             </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
