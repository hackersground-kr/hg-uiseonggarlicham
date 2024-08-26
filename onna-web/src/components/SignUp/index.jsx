import React,{useState} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import './style.css';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPswd, setshowPswd] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showConfirmPswd, setshowConfirmPswd] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const gotoSignuppage = () => {
    navigate("/login");
};


  const cancelPaste = (e) => {
    e.preventDefault();
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    };

  const handleEmailChange = (e) => {
  const regex = /^[A-Za-z0-9@.]*$/;

  // 입력값이 regex 패턴과 맞으면 상태를 업데이트
  if (regex.test(e.target.value)) {
    setEmail(e.target.value);
  }
  };
  

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9!@#$%^&*()_+{}|:"<>?~`[\];',./\\-]/g, '');
    setPassword(sanitizedValue);
  }
  const changePswd = () =>{
    if (showPswd === true){
      setshowPswd(false)
    }else{
      setshowPswd(true)
    }
  }

  const handleConfirmPasswordChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9!@#$%^&*()_+{}|:"<>?~`[\];',./\\-]/g, '');
    setConfirmPassword(sanitizedValue);
  }
  const changeConfirmPswd = () =>{
    if (showConfirmPswd === true){
      setshowConfirmPswd(false)
    }else{
      setshowConfirmPswd(true)
    }
  }

  const signup = async () => {
    setLoading(true)
    if (password !== confirmPassword){
      toast.error('비밀번호 확인이 일치하지 않습니다')
      setLoading(false)
      return
    }
    if (username === ""){
      toast.error("닉네임을 입력해주세요")
      setLoading(false)
      return
    }else if (email === ""){
      toast.error("이메일을 입력해주세요")
      setLoading(false)
      return
    }else if (password === ""){
      toast.error("비밀번호를 입력해주세요")
      setLoading(false)
      return
    }
    try {
      console.log(process.env.REACT_APP_API_URL)
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username,
        email,
        password
      })

      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      
      navigate('/login')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const code = e.response.data.code

        if (code === 'USER_ALREADY_EXISTS') {
          toast.error('이미 가입된 이메일입니다.')

          return
        }
      }
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <div className="login-container">
      <h1>회원가입</h1>
      <p className='title'>회원가입하고 잃어버린 물건 찾기!</p>
      <input
      type="text"
      onPaste={handleUsernameChange}
      onChange={handleUsernameChange}
      value={username}
      placeholder="닉네임"
    />
      <input
      type="text"
      onPaste={handleEmailChange}
      onChange={handleEmailChange}
      value={email}
      placeholder="이메일"
    />
      <div className="passwordbox">
        <input type={showPswd ? "text" : "password"} onPaste={cancelPaste} onChange={handlePasswordChange} value={password} maxLength="200" placeholder="비밀번호" />
        <div className="showpassword"  onClick={changePswd}></div>
      </div>
      <div className='passwordbox'>
        <input type={showConfirmPswd ? "text" : "password"} onPaste={cancelPaste} onChange={handleConfirmPasswordChange} value={confirmPassword} maxLength="200" placeholder="비밀번호 확인" />
        <div className="showpassword"  onClick={changeConfirmPswd}></div>
      </div>
      <button className="login-button" onClick={signup} disabled={loading}>회원가입</button>
      <p className='noaccount'>이미 계정이 있다면? <span className='signupbutton' onClick={gotoSignuppage}>로그인하기</span></p>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        limit={5}
       />
    </div>
  );
}

export default Login;
