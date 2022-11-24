import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'




function Login() {
  const navigate = useNavigate()
  return (
<Container>
    
      <Row>
      <Col sm={8}>
        <div className='top'>
        <h1>Hello DOC !</h1>
        </div>

        
      <div className='card'>
        <Card>
        <Card.Body>
          <Card.Text>
          <p>Hello DOC is a platform for both doctors and patients to add,
          access and customise their SMART Nutrition CARD....</p>
           </Card.Text>
         </Card.Body>
        </Card>
      </div>

      <Row>
        <Col  className='docpat' sm={4}>
         <h3>For DOCTORS, </h3>
          <p>To keep Track of your Patients health, to manage your schedule</p>
          <Button onClick={()=>{navigate("/doctorLogin")}} className="btn-hover color-5" variant="success">
          Login
            </Button>
          <p className='signup'><Link to={'/signDoc'} >REGISTER</Link> Here....</p>
        </Col>




        <Col className='docpat' sm={4}>
         <h3>For PATIENTS,</h3>
          <p>To add your profile, medical historys, to keep track of your prescription </p>
          <Button onClick={()=>{navigate("/patientLogin")}} className="btn-hover color-5" variant="success">
           Login
            </Button>

           <p className='signup'><Link to={'/signPat'} >REGISTER</Link> Here....</p>
        </Col>
      </Row>

      </Col>
     
        <Col sm={2}>
        <Image className='img' src="https://media.healthecareers.com/wp-content/uploads/2022/02/11211440/blackphysicians.jpg" alt='Health-care-docdor-img'/> 

        </Col>
     </Row>
    </Container>



  );
}

export default Login;
