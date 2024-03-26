import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/login.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import BASE_URL from '../hooks/baseURL';
import SmallSpinner from '../components/Layout/SmallSpinner';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  
  if(auth){
    useEffect(() => {
      navigate("/"); // Navigate to the home route
    }, [navigate]);
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    setLoading(true);
    const loginData = {
        user_name: name,
        password: password
    };
    
    fetch(BASE_URL + '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(async response => {
        if (!response.ok) {
          setLoading(false);
          let errorData;
          try {
            errorData = await response.json();
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
    
          if (response.status === 422) {
            setErrMsg("");
            setError(errorData.errors);
            // console.error(`Login failed with status ${response.status}:`, errorData);
          }else if (response.status === 401) {
            // console.error(`Login failed with status ${response.status}:`, errorData);
            setError("");
            setErrMsg(errorData.message)
          }else{
            console.error(`Unexpected error with status ${response.status}`);
          }
    
          throw new Error('Login Failed');
        }
    
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        // console.log(data);
        if (data.data.token) {
          localStorage.setItem('token', data.data.token);
          navigate('/');
        } else {
          throw new Error('Token not found in response');
        }
      })
      .catch(error => {
        // console.error('Login error:', error);
      });
    }


  return (
    <div className='my-5 login py-3 py-sm-5 w-50 mx-auto'>
      <div className='text-center'>
        <img src={logo} className='logo' />
      </div>
      <h1>လော့ဂ်အင်ဝင်ရန်</h1>
      <form onSubmit={handleLogin}>
      {errMsg && (
        <div className="alert alert-danger text-white">
          *{errMsg}
        </div>
      )}
        <div className='mx-3 mx-sm-5 my-3 my-sm-5'>
          <div className="mb-3">
            <InputGroup className=''>
              <InputGroup.Text id='basic-addon1'>
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                placeholder='Username'
                aria-label='Username'
                aria-describedby='basic-addon1'
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            {error.user_name && (
                <div className="text-danger d-block">*{error.user_name}</div>
            )}
          </div>

          <div className="mb-3">
            <InputGroup className=''>
              <InputGroup.Text id='basic-addon1'>
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                type='password'
                placeholder='Password'
                aria-label='Password'
                aria-describedby='basic-addon1'
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            {error.password && (
                <span className="text-danger d-block">*{error.password}</span>
            )}
          </div>



          <button className='loginBtn'>
          {loading && <SmallSpinner />}
            Login
          </button>
        </div>
      </form>

      <div
        style={{ cursor: 'pointer' }}
        className='px-3 px-sm-5 d-flex align-items-center justify-content-between'
      >
        <NavLink className='text-decoration-none text-light  ' to={'/register'}>
          အကောင့်ဖွင့်ရန်
        </NavLink>
        <p className='mt-3'> ဆက်သွယ်ရန် </p>
      </div>
    </div>
  );
};

export default LoginPage;
