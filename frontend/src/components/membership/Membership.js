import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
const Membership = () => {
  const [file,setFile]=useState("")
  const [validated, setValidated] = useState(false);
  const handleFileChange=(event)=>{
    console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
      setValidated(true);
      const data_obj=new FormData(form);
      
      const data={
        email:data_obj.get('email'),
        fullname:data_obj.get('full name'),
        phone:data_obj.get('phone'),
        university:data_obj.get('university'),
        batch:data_obj.get('batch'),
        interest:data_obj.get('interest'),
        profileImg:data_obj.get('profileImg'),
  
      }
      console.log(data)
      // console.log(data.profileImg)
      const response=await axios.post("http://localhost:4500/api/user/membership",data,{headers: {
        'Content-Type': 'multipart/form-data'
      }})
      console.log(response)
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} enctype="multipart/form-data">
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" name="email"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            name="full name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>Phone</Form.Label>
            <InputGroup>    
          <InputGroup.Text id="basic-addon1">+92</InputGroup.Text>
          <Form.Control
            required
            type="text"
            placeholder="phone"
            name='phone'
          />
          </InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>University</Form.Label>
        <Form.Select required name="university">
      <option value="">select</option>
      <option value="NED University">NED University</option>
      <option value="Karachi University">Karachi University</option>
      <option value="IBA">IBA</option>
    </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom03">
        <Form.Label>Batch</Form.Label>
        <Form.Select required name="batch">
        <option value="">select</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
    </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>Domain of Interest</Form.Label>
        <Form.Select required name="interest">
      <option value="">select</option>
      <option value="web development">Web development</option>
      <option value="app development">App development</option>
      <option value="artificial intelligence">Artificial Intelligence</option>
      <option value="cyber security">Cyber Security</option>
      <option value="blockchain">Blockchain</option>
    </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>Input picture</Form.Label>
        <Form.Control type="file" required name="profileImg" accept="image/*" onChange={handleFileChange}/>
      </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
export default Membership
