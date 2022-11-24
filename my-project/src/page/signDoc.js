import React from 'react'
import './signDoc.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





function SignDoc() {
  return (
    <div className='signdoc'>
       <Container>

         <Card className='topcards'>
           <Card.Body>
            <Card.Text>
                <h4>Good to have to Doctor !</h4>
            </Card.Text>
            </Card.Body>
          </Card>

        <div className='sectop'>
        <h3>We need some information about you.</h3>
        </div>

        <Row>
        <Col sm={4}>
        <div>
        <Image className='imgUpload' src="http://cdn.onlinewebfonts.com/svg/img_212915.png" alt='Upload Photo'/>
        <p>Upload your current photo</p>
        </div> 
        <div>
           <Image className='img-2' src="https://img.freepik.com/premium-vector/cartoon-male-doctor-holding-clipboard_29190-4660.jpg?w=2000" alt='Upload Photo'/> 
        </div>
        </Col>


        <Col sm={8}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5>Name</h5></Form.Label>
        <Form.Control type="text"/>
        <Form.Text className="text-muted">
          enter your Fullname with inital
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5>Work Experience</h5></Form.Label>
        <Form.Control type="number" />
        <Form.Text className="text-muted">
         enter the Work Experience in number
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5>Hospital you are currently working in</h5></Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          with hospital location
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5>Your Specialization</h5></Form.Label>
        <Form.Control type="text" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5>Name of the college you studied </h5></Form.Label>
        <Form.Control type="text" />
      </Form.Group>

    </Form>
        </Col>
        </Row>

        <div className='docUpload'>
          <h3>Upload your degree certificate authorised by your college here</h3>
          <Button variant="secondary"><i class="fa-solid fa-cloud-arrow-up"></i> Upload here</Button>
          <h3 className='docUpload'>Upload your Doctor License authorised by the Medical council of India</h3>
          <Button variant="secondary"><i class="fa-solid fa-cloud-arrow-up"></i> Upload here</Button>
          <h3 className='docUpload'>Upload any proof signed by the dean of the hospital your working </h3>
          <Button variant="secondary"><i class="fa-solid fa-cloud-arrow-up"></i> Upload here</Button>
        </div>

        <div className='final'>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I here by agree that the above given information are true to my knowledge and give permission to usethose details for any medical purposes" />
      </Form.Group>
      <Button variant="success" type="submit">
      REGISTER
      </Button>
        </div>

       </Container>
    </div>
  )
}

export default SignDoc

