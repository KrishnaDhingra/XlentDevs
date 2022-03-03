import './App.css';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Courses from './pages/courses';
import Projects from './pages/projects'
import Feedback from './pages/feedback';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Courses}/>
          <Route path='/courses' exact component={Courses}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/feedback' exact component={Feedback}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={SignIn}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
