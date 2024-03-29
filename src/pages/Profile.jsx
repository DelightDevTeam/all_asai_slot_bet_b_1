import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
    return (
        <div className="mb-5 px-2 py-5 d-flex flex-column  align-items-center">
            <h1 className="text-center">Profile</h1>

            <img
                src={'https://batman-smoky.vercel.app/assets/user-BIwg6wwN.png'}
                style={{ width: "60px", height: "60px", borderRadius: "100%" }}
            />
            <div className="mt-3 d-flex align-items-center gap-2">
                <i class="fa-solid fa-wallet"></i>
                <span>K 9,850</span>
            </div>
            <Form className="my-4" >

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Name..."
                        readOnly
                        value={'Testing User'}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        placeholder="Phone..."
                        value={'0912345689'}

                    />
                </Form.Group>
                <div className="text-center">
                    <button
                        className="  btn btn-success "

                        type="submit"
                    >
                        ပြောင်းမည်
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