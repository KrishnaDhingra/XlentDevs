import './App.css';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Navbar from './components/Navbar';
import Courses from './pages/courses';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="h-screen w-screen">
        <Switch>
          <Route path='/' exact component={Courses}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={SignIn}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
