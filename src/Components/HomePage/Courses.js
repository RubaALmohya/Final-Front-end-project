import React from 'react';
import {Carousel , Col,Row ,Card } from 'react-bootstrap';
import Course1 from '../Images/course1.jpeg';
import Course2 from '../Images/course2.jpeg';
import Course4 from '../Images/course4.jpeg';
import Course5 from '../Images/course5.jpeg';
import Course6 from '../Images/course6.jpeg';
import Course7 from '../Images/c.jpeg';
import Numbers from '../HomePage/numbers';

function Courses() {
  return (
    <div>
        <h1 id='taqat-header2'> دوراتنا التدريبية  </h1>
       
   
    <div className='Courses'>
       <Carousel fade style={{ margin: '60px' }}>
       <Carousel.Item>
       <Row xs={5} md={3} className="g-5">
        <Col>
      
          <Card style={{ width: '400px', margin:'10px',border:'8px #000'}} >
            <Card.Img variant="top" src={Course1} />
            <Card.Body>
              <Card.Text> الاساسيات المهنية 1 </Card.Text>
            </Card.Body>
          </Card>
         
          </Col>
          <Col>
          <Card style={{ width: '400px' , margin:'10px'}}>
            <Card.Img variant="top" src={Course2} />
            <Card.Body>
              <Card.Text>مقدمة في برنامج Microsoft word</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '400px' , margin:'10px'}}>
            <Card.Img variant="top" src={Course4} />
            <Card.Body>
              <Card.Text>الاساسيات المهنية 2</Card.Text>
            </Card.Body>
          </Card>

        </Col>
    </Row>

   </Carousel.Item>
    <Carousel.Item>
    <Row xs={5} md={3} className="g-5">
        <Col>
          <Card style={{ width: '400px', margin:'10px'}} >
            <Card.Img variant="top" src={Course7} />
            <Card.Body>
              <Card.Text>مهارات التواصل في العمل </Card.Text>
            </Card.Body>
          </Card>
         
          </Col>
          <Col>
          <Card style={{ width: '400px' , margin:'10px'}}>
            <Card.Img variant="top" src={Course6} />
            <Card.Body>
              <Card.Text>مقدمة في برنامج Microsoft Powerpoint</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '400px' , margin:'10px'}}>
            <Card.Img variant="top" src={Course5} />
            <Card.Body>
              <Card.Text>مهارات حل المشكلات في بيئة العمل</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
      </Carousel.Item>
    </Carousel>
    </div>
<Numbers />
    </div>
  )
}

export default Courses