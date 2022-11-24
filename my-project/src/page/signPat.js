import React from 'react'
import './signPat.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignPat() {
  return (
    <Container>
      <Card className='topbag'>
           <Card.Body>
            <Card.Text>
                <h4>Not to worry mate, Welcome to Hello DOC!</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <h3 className='sectop'>We require some information to help you cure to the fullest.</h3>

          <div className='photo'>     
         <Image className='imgUpload' src="http://cdn.onlinewebfonts.com/svg/img_212915.png" alt='Upload Photo'/>
         <p>Upload current photo</p>
          </div>

          <div>
            <Row>
              <Col sm={6}>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter you FullName" />
        <Form.Text className="text-muted">enter your Fullname with inital</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>

      <h5>Gender</h5>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check inline label="Male" name="group1" type={type} id={`inline-${type}-1`}/>
          <Form.Check inline  label="Female" name="group1" type={type} id={`inline-${type}-2`}/>
        </div>
      ))}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Weight in Kgs" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Height in Cm" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Contact Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Profession" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="number" placeholder="Postal Code" />
              </Form.Group>
    </Form>
        </Col>




              <Col sm={6}>
              <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your RFID Code" />
                <Form.Text className="text-muted"> ex: RFID Code / Patient ID: 0648 1243 6825</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Address line1" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Address line2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Address line3" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="number" placeholder="Pincode" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Aadhar Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Parents / Guardians Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="number" placeholder="Parents / Guardians Contact Number" />
              </Form.Group>
              </div>
              </Col>
            </Row>
            <h3>Marital Status</h3>
            {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check inline label="Married" name="group1" type={type} id={`inline-${type}-1`}/>
          <Form.Check inline  label="Single" name="group1" type={type} id={`inline-${type}-2`}/>
          <Form.Check inline  label="Divorced" name="group1" type={type} id={`inline-${type}-2`}/>
          <Form.Check inline  label="Widowed" name="group1" type={type} id={`inline-${type}-2`}/>
        </div>
      ))}
          </div>
          <div className='final'>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I hereby agree that the above given information are true to my knowledge and give permission to use those details for any medical purposes" />
        <Form.Check type="checkbox" label="I agree to the Privacy terms of the Hello DOC! platform ( Read our Privacy Term )" />
      </Form.Group>
      <Button variant="success" type="submit">
      REGISTER
      </Button>
        </div>
    </Container>
  )
}

export default SignPat