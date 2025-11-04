
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgot from './Forgot';
import ResetPassword from './ResetPassword';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Forgot/>} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
     </Router>
  );
}

export default App;
