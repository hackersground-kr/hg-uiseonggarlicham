// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/index';
import Signup from './pages/SignUpPage/index'
import Main from './pages/MainPage/index'
  
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
