import React from 'react';
import {Image, Card, Button} from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './App.css';
import { Link } from 'react-router-dom';

function Sample() {
  return (
    <>
    <Navbar />
    <Image src="bg.jpg" className='bg'/>
    <div className="mt-5 container text">
        <h1>Elevate your learning experience with <span className='quizify'>Quizify</span></h1>
    </div>
    <div className='container text'>
        <h5 className='description'>Your new favorite learning companion designed to make learning fun and efficient</h5>
    </div>
    <div className='mt-5 container'>
        <Card className='home-card'>
            <Card.Body>
                <div className='div'>
                    <Card.Title className='card-title'>
                        <Image src='main-points.png' className='home-photo'/>
                        Main Points
                    </Card.Title>
                </div>
                <Card.Text className='card-text'>
                    Main Points Quizify summarizes the text from your uploaded files, giving you the key points in a concise and easy-to-understand format. 
                    You can use this feature to review the main ideas of a text or to study for a test. 
                    Quizify uses natural language processing and machine learning to extract the most relevant information from any text.
                </Card.Text>
                <Link to ="/summary">
                <Button variant="dark" className='nav-button'>Get Started</Button>
                </Link>
            </Card.Body>
        </Card>
        <Card className='home-card'>
            <Card.Body>
                <div className='div'>
                    <Card.Title className='card-title'>
                        <Image src='quiz.png' className='home-photo'/>
                        Quiz Maker
                    </Card.Title>
                </div>
                <Card.Text className='card-text'>
                    Quiz Maker Upload any text file and Quizify will automatically generate a mini quiz for you. 
                    Its a fun and interactive way to test your understanding. 
                    You can choose from different types of questions, such as multiple choice, fill in the blank, or true or false. 
                    Quizify is the perfect tool for students, teachers, or anyone who loves to learn new things.
                </Card.Text>
                <Link to = "/quiz">
                <Button variant="dark" className='nav-button'>Get Started</Button>
                </Link>
            </Card.Body>
        </Card>
    </div>
    <Footer />
    </>
  );
}

export default Sample;
