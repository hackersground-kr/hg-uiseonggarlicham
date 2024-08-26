// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/index';
import Signup from './pages/SignUpPage/index'
import Main from './pages/MainPage/index';
import Write from './pages/WritePage/index';
import MyApp from './pages/ Calendar/Calendar';
  
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
