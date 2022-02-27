import './App.css';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Switch>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={SignIn}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
