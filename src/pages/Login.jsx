import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/login.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaPhoneVolume, FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import BASE_URL from '../hooks/baseURL';
import SmallSpinner from '../components/Layout/SmallSpinner';
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    phone:"",
    password: "",
  });
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  let auth = localStorage.getItem("authToken");
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = (loginData) => {
    console.log('loginData',loginData)
    setLoading(true);
    //fetch api for login url
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Log In Failed");
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        if (responseData) {
          const userData = responseData.data;
          // console.log(userData);
          if(userData.is_changed_password == 0){
            localStorage.setItem("user_id", responseData.data.id);
            localStorage.setItem("is_changed_password", responseData.data.is_changed_password);
            navigate("/changePassword");
            return;
          }
            localStorage.setItem("authToken", responseData.data.token);
            localStorage.setItem(
              "authUser",
              JSON.stringify({
                userData,
              })
            );
          
        } else {
          throw new Error("Token not found in response");
        }
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (error) {
          setErrorMessage("Phone Or Password is incorrect!");
          setLoading(false);
        }
      });
  };

  return (
    <div className='my-3 login py-3 py-sm-5 w-50 mx-auto'>
      {/* <div className='text-center'>
        <img src={logo} className='logo' />
      </div> */}
      <h5 className='fw-bold text-center'>လော့ဂ်အင်ဝင်ရန်</h5>
      {errorMessage && (
                <div
                  className="alert alert-danger mt-2"
                  role="alert"
                  style={{ fontSize: "14px" }}
                >
                  {errorMessage}
                </div>
              )}
      <form 
      onSubmit={handleSubmit(onSubmit)}
      >
        
        <div className='mx-3 mx-sm-5 my-3 my-sm-5'>
          <div className="mb-3">
            <InputGroup className=''>
              <InputGroup.Text id='basic-addon1'>
                <FaPhoneVolume />
              </InputGroup.Text>
              <Form.Control
                 placeholder=' Player ID'
                 aria-describedby='basic-addon1'
                  {...register("user_name", {
                  required: "Player ID is Required.",
                })}
                className={`${errors.username && "border-2 border-danger"} loginForm loginForm`}
              />
            </InputGroup>
            <div className="d-block error text-danger">{errors.username?.message}</div>

          </div>
          <div className="mb-3">
            <InputGroup className=''>
              <InputGroup.Text id='basic-addon1'>
                <FaPhoneVolume />
              </InputGroup.Text>
              <Form.Control
                 placeholder=' Phone'
                 aria-describedby='basic-addon1'
                  {...register("phone", {
                  required: "Phone is Required.",
                })}
                className={`${errors.phone && "border-2 border-danger"} loginForm loginForm`}
              />
            </InputGroup>
            <div className="d-block error text-danger">{errors.phone?.message}</div>

          </div>

          <div className="mb-3">
            <InputGroup className=''>
              <InputGroup.Text id='basic-addon1'>
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password..."
                {...register("password", {
                  required: "Password is Required.",
                })}
                className={`${errors.password && "border-2 border-danger"} px-0 loginForm`}
              />
              
            </InputGroup>
            <div className="d-block error text-danger">{errors.password?.message}</div>
          </div>



          <div className="text-center">
            <button type='submit' className='loginBtn'>
              {loading && <SmallSpinner />}
              Login
            </button>
          </div>
        </div>
      </form>

      {/* <div
        style={{ cursor: 'pointer' }}
        className='px-3 px-sm-5 d-flex align-items-center justify-content-between'
      >
        <NavLink className='text-decoration-none text-light  ' to={'/register'}>
          အကောင့်ဖွင့်ရန်
        </NavLink>
        <p className='mt-3'> ဆက်သွယ်ရန် </p>
      </div> */}
    </div>
  );
};

export default LoginPage;
