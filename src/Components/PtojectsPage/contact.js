import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HorSh1 from '../Images/sh2.png';
import HorSh2 from '../Images/sh33.png';
import Popupcom from '../PtojectsPage/popup.js';
import 'reactjs-popup/dist/index.css';


import React, { useState  , useEffect} from "react";
import axios from "axios";
function Contact() {
    const [fristname, setFristname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState();
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
 

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

      
    const handleSubmit = async e => {
        e.preventDefault();
        const user = { fristname, lastname,email,subject,message };
  
        const response = await axios.post(` https://62d3e3655112e98e4846d965.mockapi.io/RubaAPI`,
        user
        );
    
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
  
      };
     
  return (
    <div>
        <div> <img src='https://static.wixstatic.com/media/b512d2_ab8d2bd15ef742ed931148ad83fcb6f5~mv2.jpg/v1/fill/w_1899,h_806,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mode%20header.jpg'/></div>
        <div className='FormContact'>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label className='label-contact'> الاسم الأول</Form.Label>
        <Form.Control type="text" placeholder=" " onChange={({ target }) => setFristname(target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='label-contact'>الاسم الاخير</Form.Label>
        <Form.Control type="text" placeholder=" " onChange={({ target }) => setLastname(target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='label-contact'> البريد الالكتروني</Form.Label>
        <Form.Control type="email" placeholder=" " onChange={({ target }) => setEmail(target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='label-contact'>  الموضوع</Form.Label>
        <Form.Control type="text" placeholder=" " onChange={({ target }) => setSubject(target.value)} />
      </Form.Group>

      <Form.Group className="mb-4" >
        <Form.Label className='label-contact'>  الرسالة</Form.Label>
        <Form.Control type="text" placeholder=" " id='message' onChange={({ target }) => setMessage(target.value) }/>
      </Form.Group>
      <div >
      <Button variant="primary" type="submit" style={{width: '518px', height: '40px',backgroundColor: '#70BF4B' ,border: '#70BF4B'}} onClick={togglePopup}>ارسل</Button>

    {isOpen && <Popupcom className='messSub'
      content={<>
         <b id='contMess'> ...شكراً لتواصك معنا</b> 
      </>}
      handleClose={togglePopup}
    />}
  </div>
      
    </Form>
    </div>
    <div className='contactHeader'> 
    <h1 id='taqat-header2'>تواصل معنا</h1>
    </div>
    <h6 id='h6con'>شكراً على اهتمامك بـ"مكان مسك"! تواصل معنا <br/>وشاركنا أسئلتك واقتراحاتك وافكارك، فتواصلك يسرّنا دوماً:</h6>
    <div className='horShape'>
        <img id='HorTSH1' src={HorSh2} alt='err'/>
    </div>
    <div className='horShape2'>
        <img id='HorTSH2' src={HorSh1} alt='err'/>
    </div>


    </div>

  );
}

export default Contact