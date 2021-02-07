import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <AuthProvider>

        <div>
          <Router>
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route path="/home" component={HomePage} />
              <Route component={LogIn} />
            </Switch>
          </Router>
        </div>
    </AuthProvider>
  );
}

export default App;
