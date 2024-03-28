import React from 'react'
import logo from '../assets/img/logo.png';
import Form from 'react-bootstrap/Form';
import '../assets/css/register.css'
import { NavLink } from 'react-router-dom';
import '../assets/css/register.css'
const RegisterPage = () => {
  const banks=['KBZ Bank','KPAY','CB Bank','AYA Bank','Wave Money','Yoma Bank']
  return (
    <div className=' px-2 register py-3 w-50 mx-auto w-100'>
        {/* <div className="text-center">
          <img src={logo} className='logo w-50' />
        </div> */}
        <h1>အကောင့်ဖွင့်ရန်</h1>
        <Form className="mx-3 mx-md-5 my-3 my-sm-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> နာမည်</Form.Label>
        <Form.Control type="text" placeholder=" နာမည်" className='px-0'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> ဖုန်းနံပါတ်</Form.Label>
        <Form.Control type="text" placeholder=" ဖုန်းနံပါတ်" className='px-0' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>  စကားဝှက် </Form.Label>
        <Form.Control type="password" placeholder="  စကားဝှက် " className='px-0' />
      </Form.Group>
      <h5 className='mb-2'>ဘဏ္ဍာရေးအချက်အလက် *</h5>
      <p className='mt-4 mb-2'> ဘဏ်တစ်ခုကို ရွေးပါ။</p>
      <Form.Select className='mb-4' aria-label="Default select example">
      <option>Please Select Bank</option>
      {banks.map((bank)=>{
        return <option value={bank}>{bank}</option>
      })}
      
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>  သင့်ဘဏ်အကောင့်နံပါတ် </Form.Label>
        <Form.Control type="text" placeholder="  သင့်ဘဏ်အကောင့်နံပါတ် " className='px-0' />
      </Form.Group>
      <button className='loginBtn'>
          Register
        </button>
    </Form>
        <div className="text-center my-3">
          <NavLink className='text-decoration-none text-light  '
           to={'/login'}>လော့ဂ်အင်ဝင်ရန်
           </NavLink>

        </div>
       
    </div>
  )
}

export default RegisterPage