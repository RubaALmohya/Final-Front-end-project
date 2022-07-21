import React from 'react';
import '../Style/Style.scss';
import Sh1 from '../Images/sh1.png'
function numbers() {
  return (
    <div className='numMarg'>
        <div className='shapNum' >
        <div class="wSet1">
                <img className='shapes1' src={Sh1}/>
            </div>
        </div>
     
        <h1>طاقات في ارقام </h1>
        <ul style={{ alignItems:'center' ,backgroundColor:'white' ,margin:'aute'}}>
            <li className='numli'><h4>وظيفة متاحة جديدة</h4><br/><div id='numbers'></div></li>
         
            <li className='numli'><h4>منشأة مسجلة جديدة</h4><br/><div id='numbers2'></div></li>
            
            <li className='numli' ><h4>طلب توظيف جديد</h4><br/><div id='numbers3'></div></li>
           
        </ul>
        <ul  style={{ alignItems:'center' ,backgroundColor:'white' ,margin:'aute'}}>
            <div className='countNum'>
            <li> <div className='A' id='new'></div></li>
            <li> <div className='B' id='new'></div></li>
            <li> <div className='C' id='new'></div></li>
            </div>
        </ul>
    
    </div>
  )
}

export default numbers