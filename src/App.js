import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        {/* <Route path='/p' element={<ProtectedRoute/>} /> */}
      </Routes>
      
      
    </div>
  );
}

export default App;
