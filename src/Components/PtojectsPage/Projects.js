import React from 'react';
import { Button } from 'react-bootstrap';
import ProjectsV from '../Images/proVed.mp4';
import Wonen from '../Images/course3.jpeg';
import Mans from '../Images/course9.jpeg';
import Sh1 from '../Images/sh1.png';
import Sh2 from '../Images/sh2.png';
import Sh3 from '../Images/sh33.png';

function Projects() {
  return (
    <div>
        <div className='ProjectVied'>
        <video width="100%" autoplay controls muted >
            <source src={ProjectsV} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
        </div>
        <div className='HeaderP'>
        <h2 id='taqat-header'> برامجنا</h2>
        </div>

        <div className='CardeProject'>
            <img className='projectLeft' src="https://cdn.mt.gov.sa/hcdp/Content/images/STA-Hotel-Supervisor.png"/>
            <h1 className='headerLeft' id='headerGreen'>برنامج توطين المسار السياحى</h1>
            <p className='paragrafLeft'> 
            مشروع وطني لتوفير 100 ألف فرصة عمل في القطاع السياحي لعام 2021 م<br/> 
            منبثق من استراتيجية وزارة السياحة في تطوير رأس المال البشري خلال العشر سنوات القادمة
            </p>
            <a href="https://eservices.taqat.sa/Eservices_Individual/ProgramDetails.aspx?Id=9" target="_blank" rel="noreferrer">
            <div className='ProjectCardsButton'><Button variant="primary" style={{width: '225px', height: '55px',backgroundColor: '#70BF4B' ,border: '#70BF4B'}} >اكتشف البرنامج</Button></div>
            </a>
            <div class="wSet1">
                <img className='shapes1' src={Sh1}/>
            </div>

            <hr/>
            <div  className='Card3'>
            <img className='projectRight' src={Wonen}/>
            <h1 className='headerRight' id='headerOrange'>برنامج دعم ضيافات الأطفال للمرأة العاملة (قرة)</h1>
            <p className='paragrafRight'> 
            يدعم تمكين المرأة العاملة السعودية من الالتحاق بسوق العمل <br/> 
            والاستمرار فيه وهي مطمئنة على الرعاية المقدمة لأطفالها<br/> 
             ويتكفل البرنامج بتغطية جزء من رسوم تسجيل طفلين في مراكز ضيافة
            </p>
            <a href="https://eservices.taqat.sa/Eservices_Individual/ProgramDetails.aspx?Id=12" target="_blank" rel="noreferrer">
            <div className='ProjectCardsButtonR'> <Button variant="primary" style={{width: '225px', height: '55px',backgroundColor: '#F27329' ,border: '#F27329'}}>اكتشف البرنامج</Button></div>
            </a>
            <div class="wSet2">
                <img className='shapes2' src={Sh3}/>
            </div>
            </div>
            <hr/>

            <div  className='Card2'>
            <img className='projectLeft' src={Mans}/>
            <h1 className='headerLeft' id='headerBlue'>برنامج دعم النقل الموجه</h1>
            <p className='paragrafLeft'> 
            يأتي برنامج دعم النقل الموجه ضمن سياق مبادرات منظومة الموارد البشرية والتنمية <br/> 
            الاجتماعية الهادفة إلى التوسع وإيجاد أساليب مختلفة للتوطين ولمعالجة الانكشاف المهني
            </p>
            <a href="https://eservices.taqat.sa/Eservices_Individual/ProgramDetails.aspx?Id=7" target="_blank" rel="noreferrer">
            <div className='ProjectCardsButton'> <Button variant="primary"style={{width: '225px', height: '55px',backgroundColor: '#00958F' ,border: '#00958F'}}>اكتشف البرنامج</Button></div>
            </a>
            <div class="wSet3">
                <img className='shapes3' src={Sh2}/>
            </div>
            <hr/>
        </div>
        
        </div>
  
    </div>
  )
}

export default Projects