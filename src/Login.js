import './App.css';
import Navbar from './Navbar.js';
import {useState} from 'react';
import React from 'react';
import {Form, Card, Button, InputGroup} from 'react-bootstrap';
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import supabase from './supabaseClient.js';
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = async () => {
        try {
          const { data } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
    
          if (data && data.password === password) {
            navigate('/home');
    
            setErrorMessage('');
          } else {
            setErrorMessage('Invalid email or password');
            console.log(data);
          }
        } catch (error) {
          console.error('Error during login:', error.message);
          setErrorMessage('An error occurred during login');
        }
      };

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        login();
    };

 
        return(
           <>
            <Navbar />
            <div className='card-center'>
                <Card className='card'>
                    <Card.Body> 
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <InputGroup className="mb-3" hasValidation>
                                <InputGroup.Text><MdAlternateEmail /></InputGroup.Text>
                                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please use an email.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <InputGroup className="mb-3" hasValidation>
                                <InputGroup.Text><RiLockPasswordFill /></InputGroup.Text>
                                <Form.Control type="password"value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                                <Form.Control.Feedback type="invalid">
                                    Field cannot be empty.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <Form.Group className="mb-3">
                                <Form.Check required label="Remember password"/>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button onClick={handleSubmit} className='login-button' variant='dark'>Login</Button>
                                <Link to = '/signup'>
                                <span className="link-primary" >Don't have an account?</span>  
                                </Link>
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



export default Login;