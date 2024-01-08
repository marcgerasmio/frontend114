import React, { useEffect, useState } from 'react';
import { Image, Card, Button, Form, Col, Row } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

function QuizResult(){
  const [editableText, setEditableText] = useState('');
  const extractedText = localStorage.getItem('extractedText');

  const handleEditableTextChange = (event) => {
    setEditableText(event.target.value);
  };

  const handleGeneratePdf = () => {
    const pdf = new jsPDF();
    pdf.text(extractedText, 10, 10);
    pdf.save('generated-pdf.pdf');
  };
  
  useEffect(() => {
    setEditableText(extractedText);
  }, [extractedText]);

  return (
    <>
      <Navbar />
      <Image src="bg.jpg" className="bg" />
      <div className="mt-5 container text">
        <h1>
          <span className="quizify">Quizify</span> - Quiz Maker
        </h1>
      </div>
      <div className="container text">
        <h5 className="description">Turns your articles to a short multiple-choice quiz</h5>
      </div>
      <div className="mt-3 container">
        <Card className="summary-card">
          <Card.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="Insert Data Here..."
                  as="textarea"
                  rows={11}
                  style={{ resize: 'none' }}
                  name="editableText"
                  value={editableText}
                  onChange={handleEditableTextChange}
                /> 
              </Form.Group>
            </Form>
            <div className="mt-3 justify-content-between d-flex">
              <Row>
                <Col>
                  <Button onClick={handleGeneratePdf} variant="dark" className="sum-btn">
                    Save as PDF
                  </Button>
                </Col>
                <Col className='text-right'>
                  <Link to="/home">
                    <Button variant="dark" className="sum-btn">
                    Generate Again
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default QuizResult;
