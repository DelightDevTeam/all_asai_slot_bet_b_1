import React, { useEffect, useState } from 'react'
import { FaLock } from "react-icons/fa";
import '../assets/css/changePassword.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../hooks/baseURL';
import { Alert } from 'react-bootstrap';
import Spinner from '../components/Spinner';

function ChangePasswordPage() {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    let auth = localStorage.getItem("authToken");
    useEffect(() => {
        if (!auth) {
          navigate("/login");
        }
    }, [navigate]);
    const changePassword = async (e) => {
        e.preventDefault();
        setLoader(true);

        const data = {
            current_password: oldPassword,
            password: password,
            password_confirmation: confirmPassword,
        };

        try {
            const response = await fetch(BASE_URL + '/changePassword', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("authToken"),
              },
              body: JSON.stringify(data),
            });
      
            const responseData = await response.json();
      
            if (!response.ok) {
              if (response.status === 422) {
                setErrors(responseData?.errors && responseData?.errors);
                console.log(errors && errors);
              } else if (response.status === 401) {
                setError(responseData.message);
                console.log(error);
                setTimeout(() => {
                  setError('');
                }, 3000);
              } else {
                console.error(`Unexpected error with status ${response.status}`);
              }
            } else {
              setSuccess('New Password Changed Successfully.');
              setOldPassword('');
              setPassword('');
            //   navigate('/login');
              setConfirmPassword('');
              setErrors([])
              setTimeout(() => {
                setSuccess('');
              }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoader(false);
        }
    }

    return (
    <>
        <div className="cgPwTitle py-3 " style={{ fontSize: '16px' }}>
            <FaLock /> လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်
        </div>
        {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">*{error}</Alert>}
        <Form  onSubmit={changePassword} className='p-4 cgPwForm'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>စကားဝှက်အဟောင်း</Form.Label>
                <Form.Control 
                type="password" placeholder="စကားဝှက်အဟောင်း"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)} className='px-2' />
                  {errors?.current_password && <span className="text-danger d-block">{errors?.current_password}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>စကားဝှက်အသစ်</Form.Label>
                <Form.Control type="password"
                 placeholder="စကားဝှက်အသစ်" className='px-2'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />
  {errors?.password && <span className="text-danger d-block">{errors?.password}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>စကားဝှက်အသစ်ကို အတည်ပြုပါ။</Form.Label>
                <Form.Control type="password" placeholder="Password" className='px-2'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}    />
                     {errors?.password_confirmation && <span className="text-danger d-block">*Confirm Password is required!</span>}
            </Form.Group>
            <div className="cgPwBtn">
                <Button type="submit" className='text-light fw-bold' style={{ background: 'linear-gradient(145deg,  rgb(152 214 79) 5%, #005D5F 90%, rgb(152 214 79) 5%' }}>
                {loader &&   <Spinner /> }
                    အတည်ပြုပါ။
                </Button>
            </div>


        </Form>
    </>
    );
}

export default ChangePasswordPage;


//  လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်
// စကားဝှက်အသစ်
// စကားဝှက်အသစ်ကို အတည်ပြုပါ။

