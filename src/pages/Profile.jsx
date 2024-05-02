import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import BASE_URL from "../hooks/baseURL";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

const ProfilePage = () => {
    let navigate = useNavigate();
    let auth = localStorage.getItem("authToken");
    const {data:user} = useFetch(BASE_URL + "/user");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loader, setLoader] = useState(false);
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
     useEffect(() => {
      setName(user.name)
      setPhone(user.phone)
   }, [user])
  const updateProfile = async (e) => {
    e.preventDefault();
    setLoader(true);
    let inputData = {
        name: name, 
        phone: phone,
     }
    console.log(inputData);
  
    try {
        const response = await fetch(BASE_URL + '/profile', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
          body: JSON.stringify(inputData),
        });
  
        const responseData = await response.json();
  
        if (!response.ok) {
            if (response.status === 422) {
              setErrors(responseData?.errors ?? []);
              console.log(errors);
             } else if (response.status === 401) {
              const errorMessage = responseData.message;
              setError(errorMessage);
              console.log(errorMessage);
              setTimeout(() => setError(''), 3000);
            } else {
              console.error(`Unexpected error with status ${response.status}`);
            }
        } else {
            setErrors("")
            setError("")
            setSuccess("Profile Updated Successfully.");
            setTimeout(() => setSuccess(''), 3000);
            console.log(responseData.message);
        }
          
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setLoader(false);
    }
  }
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [navigate]);
    return (
        <div className="mb-5 px-2 py-5 d-flex flex-column  align-items-center">
            <h1 className="text-center">Profile</h1>

            {/* <img
                src={'https://batman-smoky.vercel.app/assets/user-BIwg6wwN.png'}
                style={{ width: "60px", height: "60px", borderRadius: "100%" }}
            /> */}
            <div className="mt-3 d-flex align-items-center gap-2">
        <i class="fa-solid fa-wallet"></i>
        <h5 className="fw-bold">Ks {Number(user.balance).toLocaleString()}</h5>
      </div>
      {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">*{error}</Alert>}
            <Form className="my-4"  onSubmit={updateProfile} >

                <Form.Group className="mb-3">
                    <Form.Control
                                   type="text"
                                   placeholder="Name..."
                                   value={name}
                     onChange={(e)=>setName(e.target.value)}
                     />
                      {errors?.name && <span className="text-danger d-block">{errors?.name}</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control
            placeholder="Phone..."
            value={phone ?? ""}
            onChange={(e)=>setPhone(e.target.value)}
           
          />
           {errors?.phone && <span className="text-danger d-block">{errors?.phone}</span>}
                </Form.Group>
                <div className="text-center">
                    <button
                        className="  btn btn-success "

                        type="submit"
                    >
                       {loader && 
                            <div className="me-2">
                                <Spinner />
                            </div>
                        }
                        <span className="d-block">ပြောင်းမည်</span>
                    </button>
                </div>
                <NavLink to={'/change-password'}>
                    <div className=" text-center mt-4">

                        <button
                            className=" btn btn-danger"

                            type="submit"
                        >
                            Change Password
                        </button>

                    </div>
                </NavLink>
            </Form>
        </div>
    );
};

export default ProfilePage;