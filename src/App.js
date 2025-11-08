
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgot from './Forgot';
import ResetPassword from './ResetPassword';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import Home from './Home';

function App() {
  return (
     <Router>
      <Routes>
          <Route path="/" element={<Welcome />} />
           <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
           <Route path="/reset" element={<ResetPassword />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="home" element={<Home />} />
         </Routes>
     </Router>
  );
}

export default App;