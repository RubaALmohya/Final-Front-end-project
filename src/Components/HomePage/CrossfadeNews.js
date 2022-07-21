import React from 'react'
import{ Carousel,Button , Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SteperCards from './SteperCards';
import Sh0 from '../Images/sh0.png';
import Sh00 from '../Images/sh00.png';
function CrossfadeNews() {
  return (
    <div>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/FWzeeZZXwAAZJAK?format=jpg&name=4096x4096"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>مبادرة توطين عقود التشغيل و الصيانة</h3>
          <p> زيادة نسب التوطين في هذا القطاع الهام والذي يحتوي على العديد من الوظائف المميزة نسبياً، ولغرض تحقيق أفضل الممارسات وطموحات العاملين في القطاع فقد تم اعتماد وتعميم دليل توطين عقود التشغيل والصيانة في الجهات العامة وذلك لتطبيقه على جميع عقود الجهات الحكومية، وقد تضمن الدليل عدداً من العناصر الهامة التي تسهم في زيادة جاذبية الوظائف في هذا القطاع</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.mt.gov.sa/hcdp/Content/images/STA-Hotel-Supervisor.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>100 ألف فرصة عمل في القطاع السياحي لعام 2021</h3>
          <p>برنامج وطني لتوفير 100 ألف فرصة عمل في القطاع السياحي لعام 2021م منبثق من استراتيجية وزارة السياحة في تطوير رأس المال البشري خلال العشر سنوات القادمة، وتمكين الكفاءات الوطنية المؤهلة من شغلها بما يتناسب مع احتياجات سوق العمل السياحي.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/FTdCiCcXsAAnTZu?format=jpg&name=4096x4096"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='about-taqat'>
       <h2 id='taqat-header'> عن طاقات</h2>
       <div className='Shape'></div>
       <div id='divTIS'>
       <p id='taqatIS'>  إحدى مبادرات صندوق تنمية الموارد البشرية وبدعم من وزارة الموارد البشرية والتنمية الاجتماعية ووزارة الخدمة المدنية، توفر منصة الكترونية شاملة لسوق العمل في المملكة العربية السعودية بشقيه العام والخاص ومزودي خدمات التوظيف، تجمع بين الباحثين عن العمل وأصحاب الأعمال وتتيح تقديم وتبادل خدمات التوظيف والتدريب بكفاءة وفعالية لزيادة استقرار وتطوير القوى العاملة في سوق العمل السعودي والمساهمة بعرض الفرص الوظيفية بشكل عادل للجميع.</p>
       <div className='Shape2'></div>
       </div>    
    </div>
<div className='CardsProject'>

<div class="general-container3">

  <input class="radio" type="radio" name="card" id="card-1" checked />
  <label class="content" for="card-1">
    <span class="icon">
    
    </span>
    <div className='CardsShape'><img src={Sh0}/></div>
    <h3 class="card-title">ممكن
      <p class="subtitle">هو برنامج لتقديم دعم التدريب لمنشآت القطاع الخاص من خلال برامج تدريبية متخصصة لرفع مهارات موظفيهم<br/> لتواكب الاحتياج الحالي في القطاع الخاص من خلال التدريب الإلكتروني والذي سوف يتم بالتعاون مع الهيئات والأكاديميات الحكومية من تقديم <br/>برامجهم التدريبية للمستفيدين إلكترونياً.</p>
      <div className='buttonsCards'>
      <Button variant="light">للمزيد </Button>
      </div>
    </h3>
    <div className='CardsShape2'><img src={Sh00} style={{height: '56px', width: '348px'}}/></div>
  </label>

  <input class="radio" type="radio" name="card" id="card-2" />
  <label class="content" for="card-2">
    <span class="icon"></span>
    <div className='CardsShape'><img src={Sh0}/></div>
    <h3 class="card-title">
      تمهير
    <p class="subtitle"> هو برنامج تدريب على رأس العمل موجَّه للخريجين والخريجات السعوديين من الجامعات المحلية والخارجية، <br/>وخريجي المعاهد والكليات حملة الدبلومات الفنية والصحية والإدارية، يهدف إلى تدريبهم في المؤسسات الحكومية والشركات المتميزة في القطاع الخاص،<br/> ليتمكنوا من اكتساب الخبرات والمهارات اللازمة لإعدادهم وتهيئتهم للمشاركة في سوق العمل </p>
    <div className='buttonsCards'>
      <Button variant="light">للمزيد </Button>
    </div>
    </h3>
    <div className='CardsShape2'><img src={Sh00} style={{height: '56px', width: '348px'}}/></div>
  </label>


  <input class="radio" type="radio" name="card" id="card-3" />
  <label class="content" for="card-3">
    <span class="icon">

    </span>
    <div className='CardsShape'><img src={Sh0}/></div>
    <h3 class="card-title" style={{fontSize:'20px'}}>
    برنامج حافز 
      <p class="subtitle"> يقدم برنامج حافز البحث عن عمل مخصصاً مالياً قدره 2000 ريال لمدة 12 شهرا للباحثين <br/>الجادين في البحث عن عمل من أجل تحفيز وتعزيز فرص  الحصول على وظائف مستدامة ومناسبة، <br/>وتزويدهم بالمهارات والموارد اللازمة للانضمام إلى سوق العمل.</p>
      <div className='buttonsCards'>
      <Button variant="light">للمزيد </Button>
      </div>
      </h3>
      <div className='CardsShape2'><img src={Sh00} style={{height: '56px', width: '348px'}}/></div>
  </label>
  
  <input class="radio" type="radio" name="card" id="card-4" />
  <label class="content" for="card-4">
    <span class="icon">

    </span>
    <div className='CardsShape'><img src={Sh0}/></div>
    <h3 class="card-title">
     دروب
      <p class="subtitle">"دروب" منصة وطنية للتدريب الإلكتروني، وهي إحدى مبادرات صندوق تنمية الموارد البشرية "هدف" التي تسعى إلى تطوير قدرات ورفع مهارات القوى <br/>الوطنية من الذكور والإناث، <br/>وإكسابهم المهارات الوظيفية التي تدعم حصولهم على الوظيفة المناسبة والاستقرار فيها وفق متطلبات سوق العمل السعودي</p>
      <div className='buttonsCards'>
      <Button variant="light">للمزيد </Button>
      </div>
      </h3>
      <div className='CardsShape2'><img src={Sh00} style={{height: '56px', width: '348px'}}/></div>
  </label>
  <input class="radio" type="radio" name="card" id="card-5" />
  <label class="content" for="card-5">
    <span class="icon">
    </span>
    <div className='CardsShape'><img src={Sh0}/></div>
    <h3 className="card-title">
      تمهير
      <p class="subtitle"> هو برنامج تدريب على رأس العمل موجَّه للخريجين والخريجات السعوديين من الجامعات المحلية والخارجية، <br/>وخريجي المعاهد والكليات حملة الدبلومات الفنية والصحية والإدارية، يهدف إلى تدريبهم في المؤسسات الحكومية والشركات المتميزة في القطاع الخاص،<br/> ليتمكنوا من اكتساب الخبرات والمهارات اللازمة لإعدادهم وتهيئتهم للمشاركة في سوق العمل </p>
      <div className='buttonsCards'>
      <Button variant="light">للمزيد </Button>
      </div>
      </h3>
      <div className='CardsShape2'><img src={Sh00} style={{height: '56px', width: '348px'}}/></div>
  </label>
</div>
</div>


<SteperCards />
    </div>

   
  )
}

export default CrossfadeNews