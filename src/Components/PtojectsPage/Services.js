import React from 'react';
import Button from 'react-bootstrap/Button';
import VerSh1 from '../Images/verSh1.png';
import HorSh1 from '../Images/sh33.png';


function Services() {
  return (
    <div className='SerPage'>
    <img src='https://static.wixstatic.com/media/b512d2_ab8d2bd15ef742ed931148ad83fcb6f5~mv2.jpg/v1/fill/w_1899,h_806,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mode%20header.jpg'/>
    <div className='services'>
    <div id="comp-kqjeh2ma" class="_2UdPt">
        <div class="grid-container">
                <div class="grid-item-1">
                                <div class="grid-container2">
                                    <div class="grid-item2"><h4 id='headerGreen'>منصة دروب</h4>
                                    <hr className='hrW'/>
                                    <h6 className='subSer'>منصة "دروب" على العديد من البرامج <br/> التدريبية الإلكترونية والمسارات التدريبية المجانية</h6>
                                    <a href="https://doroob.sa/ar/" target="_blank" rel="noreferrer">
                                    <Button variant="primary"  style={{width: '120px', height: '40px',backgroundColor: '#70BF4B' ,border: '#70BF4B'}} >اكتشف دروب</Button>
                                    </a>
                                    </div>
                                    <div class="grid-item2"><h4 id='headerOrange'> البحث عن الوظائف</h4>
                                    <hr className='hrW2'/>
                                    
                                    <h6 className='subSer'>نتيحل لك فرص البحث عن وظائف<br/>  عن طريق برامجنا</h6>
                                    <Button variant="primary" style={{width: '120px', height: '40px',backgroundColor: '#F27329' ,border: '#F27329'}}>ابحث لفرصتك</Button>
                                    </div>
                                    <div class="grid-item2"><h4 id='headerBlue'>تحديث السيرة الذاتيه </h4>
                                    <hr className='hrW'/>
                                    <h6 className='subSer'> حدث سيرتك الذاتيه لتقديم للوظائف و التدريب {' '}<br/> </h6>
                                    <a href="https://www.taqat.sa/web/guest/individual?p_p_id=matchAndSearch_WAR_matchAndSearch100SNAPSHOT&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=1&_matchAndSearch_WAR_matchAndSearch100SNAPSHOT_action=searchJob" target="_blank" rel="noreferrer">
                                    <Button variant="primary" style={{width: '120px', height: '40px',backgroundColor: '#00958F' ,border: '#00958F'}}>حدث سيرتك</Button>
                                    </a>
                                    </div>
                                    
                                    <div class="grid-item2"> <h4 style={{color:'#051F40'}}>تعرف على ميولك الهمني</h4>
                                    <hr className='hrW2'/>
                                    <h6 className='subSer'>أكتشف ميولك المهنية وتعرف على شخصيتك من <br/> خلال مقياس الميول المهنية
                                    </h6>
                                    <a href="https://subol.sa/Dashboard/TendencyScale/Index?isInJourney=false" target="_blank" rel="noreferrer">
                                    <Button variant="primary"  style={{width: '120px', height: '40px',backgroundColor: '#051F40' ,border: '#051F40'}} >اكتشف نفسك</Button>
                                    </a>
                                    </div>
                                    
                                </div>
                            </div>
                <div class="grid-item-2">خدماتنا</div>
                    
                </div>
        </div>
    </div>
    <div className='verticalShape'>
        <img id='VerTSH' src={VerSh1} alt='err'/>
    </div>

    <div className='horShape'>
        <img id='HorTSH' src={HorSh1} alt='err'/>
    </div>

    </div>
  )
}

export default Services