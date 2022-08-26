import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/dashboard/Profile';
import Layout from './Layout';
import Todo from './components/dashboard/Todo';
import Report from './components/dashboard/Report';
import Course from './components/dashboard/Course';
import React, {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';

function App() {
  const [myUser, setMyUser] = useState({
    ids: '',
  })


  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("uid:", uid)
      
      setMyUser({
        ids: uid
      })

      console.log("user.id:", myUser.ids)
    } else {
      // User is signed out
      console.log("no user is available")
    }
  })
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />}/>
        
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/todo" element={<Todo ids={myUser.ids} />}/>
          <Route path="/report" element={<Report />}/>
          <Route path="/course" element={<Course />}/>
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
