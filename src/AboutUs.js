import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import {Card, CardGroup} from 'react-bootstrap';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { VscGithub } from "react-icons/vsc";

function Team(){
    return(
        <>
        <Navbar />
        <div className='container mt-4'>
            <div className='div'>
                <h1>About Us</h1>
            </div>
        </div>
        <div className='contain mt-2'>
            <p className='app-description'>
                Quizify is an app that lets you make and learn from quizzes using your own files. 
                You can upload any text, image, or video and get a summary and a quiz. 
                You can also edit the quiz as you like. You can share or take the quiz to test yourself. 
                Quizify helps you remember and understand better. It is fun and useful for learners of all kinds.
            </p>
        </div>
        <div className='container'>
            <CardGroup>
                <Card className='cards'>
                    <Card.Img variant="top" src="photo.jpg" className='photo-size'/>
                    <Card.Body>
                        <Card.Title>Marion Jotohot</Card.Title>
                        <Card.Subtitle>React Newbie / Beginner</Card.Subtitle>
                        <Card.Text>Newbie at Frontend Development</Card.Text>
                        <Card.Text className='card-footer'>
                            <a href="#facebook"><FaFacebook size={20}/></a>
                            <a href="#github"><VscGithub size={20}/></a>
                            <a href="#twitter"><FaTwitter size={20}/></a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='cards'>
                    <Card.Img variant="top" src="photo2.jpg" className='photo-size'/>
                    <Card.Body>
                        <Card.Title>Marc Dominic Gerasmio</Card.Title>
                        <Card.Subtitle>Backend Developer</Card.Subtitle>
                        <Card.Text>Aspiring Backend Developer</Card.Text>
                        <Card.Text className='card-footer'>
                            <a href="#facebook"><FaFacebook size={20}/></a>
                            <a href="#github"><VscGithub size={20}/></a>
                            <a href="#twitter"><FaTwitter size={20}/></a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='cards'>
                    <Card.Img variant="top" src="photo3.jpg" className='photo-size'/>
                    <Card.Body>
                        <Card.Title>John Elro Karl Estoque</Card.Title>
                        <Card.Subtitle>Flutter Dev , UX/UI</Card.Subtitle>
                        <Card.Text>Aspiring Mobile Developer</Card.Text>
                        <Card.Text className='card-footer'>
                            <a href="#facebook"><FaFacebook size={20}/></a>
                            <a href="#github"><VscGithub size={20}/></a>
                            <a href="#twitter"><FaTwitter size={20}/></a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        </>
    )
}
export default Team;