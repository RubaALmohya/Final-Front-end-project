import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox,CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import Logo from '../Images/logo_taqat.png';

function Footer() {
  return (
    <div>

    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%'  }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
          <div className="logo-image">
         <img src={Logo} class="img-fluid"  style={{ width: '200px'  }}/>
         </div>
  
            <span className="ml-4 h5 mb-0 font-weight-bold"></span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2"> tuwaiq.edu.saجميع الحقوق محفوظة © 2022</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%'  }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
          <div className="logo-image2">
         <img src="https://eservices.taqat.sa/Eservices_Individual/img/footerlogos3.svg?32910"className="img-fluid" />
         </div>
          </a>
        </CDBBox>

      </CDBBox>
    </CDBFooter>
    </div>
  )
}

export default Footer