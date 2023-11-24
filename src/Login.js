import './App.css';
import Navbar from './Navbar.js';
import {useState} from 'react';
import React from 'react';
import {Form, Card, Button, InputGroup} from 'react-bootstrap';
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

function Login(){
    let [preference, setPreference] = useState("login")
    function changePreference(){
        setPreference(preference === "login" ? "register" : "login")
    }

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    if(preference === "login"){
        return(
           <>
            <Navbar />
            <div className='card-center'>
                <Card className='card'>
                    <Card.Body> 
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <InputGroup className="mb-3" hasValidation>
                                <InputGroup.Text><MdAlternateEmail /></InputGroup.Text>
                                <Form.Control type="text" placeholder="Enter email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please use an email.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <InputGroup className="mb-3" hasValidation>
                                <InputGroup.Text><RiLockPasswordFill /></InputGroup.Text>
                                <Form.Control type="password" placeholder="Enter password" required />
                                <Form.Control.Feedback type="invalid">
                                    Field cannot be empty.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <Form.Group className="mb-3">
                                <Form.Check required label="Remember password"/>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type='submit' className='login-button' variant='dark'>Login</Button>
                                <span className="link-primary" onClick={changePreference}>Don't have an account?</span>  
                            </div>             
                        </Form>

                        <br/>
                        <div className="container">
                            <div className="line"></div>
                            <span className="or">or</span>
                            <div className="line"></div>
                        </div>
                        <br/>

                        <InputGroup className="mb-3 google-button">
                            <InputGroup.Text><FcGoogle /></InputGroup.Text>
                            <Button className=''>Login with Google</Button> 
                        </InputGroup>   
                    </Card.Body>
                </Card>
            </div>
           </>
        )
    }

    return(
       <>
        <Navbar />
        <div className='card-center'>
            <Card className='card'>
                <Card.Body> 
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text><MdAlternateEmail /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter email" required />
                            <Form.Control.Feedback type="invalid">
                                Please use an email.
                            </Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text><RiLockPasswordFill /></InputGroup.Text>
                            <Form.Control type="password" placeholder="Enter password" required />
                            <Form.Control.Feedback type="invalid">
                                Field cannot be empty.
                            </Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text><RiLockPasswordFill /></InputGroup.Text>
                            <Form.Control type="password" placeholder="Confirm password" required />
                            <Form.Control.Feedback type="invalid">
                                Field cannot be empty.
                            </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Group className="mb-3">
                            <Form.Check
                                style={{fontSize:'13px'}}
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className='login-button' variant="dark">Register</Button>
                            <span className="link-primary" onClick={changePreference}>Already have an account?</span>
                        </div>               
                    </Form>
                </Card.Body>
            </Card>
         </div>
       </>
    )
}

export default Login;