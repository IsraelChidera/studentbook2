import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/dashboard/Profile';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />}/>
        {/* <Route path="/profile" element={<Profile />}/> */}
        {/* <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route> */}
        
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile />}/>
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
