import React, { useState } from 'react';
import { Image, Card, Button, Form, Col, Row} from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';

const APIKEY_OPENAI = process.env.REACT_APP_APIKEY_OPENAI;

function Summary(){
  const [inputText, setInputText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const fetchPdfData = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      const response = await fetch('https://pdf-text-extractor.p.rapidapi.com/extract_text', {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': 'a7bb860f78mshab653ef468d48f1p1ed0b4jsn72fb621f6386',
          'X-RapidAPI-Host': 'pdf-text-extractor.p.rapidapi.com',
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      const result = res.text;
      setInputText(result);
    } catch (error) {
      setInputText(error.message || "Error extracting data from PDF");
    }
  };

  const fetchOpenAiData = async () => {
    try {
      const openaiResponse = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + APIKEY_OPENAI,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "Create 10 Main points based on this text: + " + inputText,
          temperature: 0,
          max_tokens: 200,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        }),
      });
      if (!openaiResponse.ok) {
        throw new Error(`HTTP error! Status: ${openaiResponse.status}`);
      }
      const openaiResult = await openaiResponse.json();
      const extractedText = openaiResult.choices && openaiResult.choices.length > 0 ? openaiResult.choices[0].text : "";
      localStorage.setItem('extractedText', extractedText);
      navigate('/summaryresult');
    } catch (error) {}
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const handlePdfSubmit = () => {
    fetchPdfData();
  };

  const handleOpenAiSubmit = () => {
    fetchOpenAiData();
  };

  return (
    <>
      <Navbar />
      <Image src="bg.jpg" className='bg'/>
      <div className="mt-5 container text">
        <h1><span className='quizify'>Quizify</span> - Main Points </h1>
      </div>
      <div className='container text'>
        <h5 className='description'>Turns your multiple pages article into a summarized</h5>
      </div>
      <div className='mt-3 container'>
        <Card className='summary-card'>
          <Card.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder='Insert Data Here...'
                    as="textarea"
                    rows={11}
                    style={{ resize: 'none' }}
                    value={inputText}
                    onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
            <Row className='mt-3'>
              <Col xs={6}>
                <Form.Group>
                  <label htmlFor="custom-file" className="btn btn-dark nav-button me-2">
                    Choose File
                    <Form.Control
                      type="file"
                      id="custom-file"
                      label="Choose an image"
                      custom
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <div className='vr me-2'></div>
                  <button 
                    className="btn btn-dark nav-button" 
                    onClick={handlePdfSubmit}
                  >Extract Text</button>
                </Form.Group>
              </Col>
            
              <Col xs={6} className="text-right">
                  <Button onClick={handleOpenAiSubmit} variant="dark" className="sum-btn">
                    Submit
                  </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Summary;