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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />}/>
        
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/todo" element={<Todo />}/>
          <Route path="/report" element={<Report />}/>
          <Route path="/course" element={<Course />}/>
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
