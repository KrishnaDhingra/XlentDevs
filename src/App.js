import React, { useState } from 'react'
import './App.css';
import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Navbar from './components/Navbar';
import SignedOutNavbar from './components/SignedOutNavbar';
import Footer from './components/Footer'
import Courses from './pages/courses';
import Projects from './pages/projects'
import Feedback from './pages/feedback';
import { authentication } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [ user, setUser ] = useState(null)
  onAuthStateChanged(authentication, (user) => {
    if(user){
        return setUser(user)
    }
    setUser(null)
  })
  return (
    <Router>
      <div className="h-screen w-screen">
        {user ? <Navbar/> : <SignedOutNavbar/>}
        <Switch>
          <Route path='/' exact component={Home}/>
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
