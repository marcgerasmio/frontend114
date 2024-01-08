import './App.css';
import Navbar from './Navbar.js';
import {useState} from 'react';
import React from 'react';
import {Form, Card, Button, InputGroup} from 'react-bootstrap';
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import supabase from './supabaseClient.js';
import { useNavigate } from 'react-router-dom';


function Register () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    
    const navigate = useNavigate();
    const [error, setError] = useState('');
    
  const register = async () => {
   const password =  localStorage.getItem('password');
    try {
      const { data } = await supabase
        .from('users')
        .insert([
          {
           name,
           email,
           password
          },
        ])
        .select();

      console.log(data);
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(error.message);
    }
  };

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        else{
        setValidated(true);
        }
    };

    const check = () =>{
        if (password1 === password2){
localStorage.setItem('password', password1);
            register();
           
        }
        else {
            alert('password mismatch');
        }
    }
    
    return(
        <>
         <Navbar />
         <div className='card-center'>
             <Card className='card'>
                 <Card.Body> 
                     <Form noValidate validated={validated} onSubmit={handleSubmit}>
                     <InputGroup className="mb-3" hasValidation>
                             <InputGroup.Text><FaRegUser /></InputGroup.Text>
                             <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
                             <Form.Control.Feedback type="invalid">
                                 Field cannot be empty.
                             </Form.Control.Feedback>
                         </InputGroup>
                         <InputGroup className="mb-3" hasValidation>
                             <InputGroup.Text><MdAlternateEmail /></InputGroup.Text>
                             <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                             <Form.Control.Feedback type="invalid">
                              Field cannot be empty.
                             </Form.Control.Feedback>
                         </InputGroup>
                         <InputGroup className="mb-3" hasValidation>
                             <InputGroup.Text><RiLockPasswordLine /></InputGroup.Text>
                             <Form.Control type="password"  value={password1} onChange={(e) => setPassword1(e.target.value)}placeholder="Enter Password" required />
                             <Form.Control.Feedback type="invalid">
                                 Field cannot be empty.
                             </Form.Control.Feedback>
                         </InputGroup>
                         <InputGroup className="mb-3" hasValidation>
                             <InputGroup.Text><RiLockPasswordLine /></InputGroup.Text>
                             <Form.Control type="password"  value={password2} onChange={(e) => setPassword2(e.target.value)}placeholder="Confirm Password" required />
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
                             <Button onClick={check} className='login-button' variant="dark">Register</Button>
                             <Link to = '/'>
                             <span className="link-primary">Already have an account?</span>
                             </Link>
                         </div>               
                     </Form>
                 </Card.Body>
             </Card>
          </div>
        </>
     )
}

export default Register;