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
import UpdateProfilee from './Components/Auth/UpdateProfile';


function App() {
  return (
      <Container className='d-flex align-item-center justify-content-center' style={ {minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth: '400px'}}>
          <Router>
             <AuthProvider>
               <Switch>
                 <Route exact path='/' component={Main}/>
                 <Route path='/SignUp' component={SignUp}/>
                 <Route path='/Login' component={Login}/>
                 <PrivateRoute path='/Profile' component={Profile}/>
                 <Route path='/forgot-password' component={ForgotPassword}/>
                 <PrivateRoute path='/update-profile' component={UpdateProfilee}/>
               </Switch>
             </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
