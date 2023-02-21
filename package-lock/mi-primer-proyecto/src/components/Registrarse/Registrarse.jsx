//import '../../services/Api/Registrarse'
//import { registro } from '../../services/Api/Registrarse'

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';


const  Registrarse = () => {


return(

<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center'>
  <MDBCol lg='9' className='my-5'>

    <h1 class="text-white mb-4">Registrarse</h1>

    <MDBCard>
      <MDBCardBody className='px-4'>

        <MDBRow className='align-items-center pt-4 pb-3'>

          <MDBCol md='3' className='ps-5'>
            <h6 className="mb-0">Usuario</h6>
          </MDBCol>

          <MDBCol md='9' className='pe-5'>
            <MDBInput label='Usuario' size='lg' id='form1' type='text'/>
          </MDBCol>

        </MDBRow>

        <hr className="mx-n3" />

        <MDBRow className='align-items-center pt-4 pb-3'>

          <MDBCol md='3' className='ps-5'>
            <h6 className="mb-0">Password</h6>
          </MDBCol>

          <MDBCol md='9' className='pe-5'>
            <MDBInput label='Pasword' size='lg' id='form2' type='password'/>
          </MDBCol>

        </MDBRow>

        <hr className="mx-n3" />

        <MDBRow className='align-items-center pt-4 pb-3'>
        <h6 className="mb-0">Deparamento</h6>

          <MDBCol md='3' className='ps-5'>
            <select>
                <option></option>
            </select>
          </MDBCol>

        </MDBRow>

        <hr className="mx-n3" />
        <h6 className="mb-0">Ciudad</h6>

        <MDBRow className='align-items-center pt-4 pb-3'>

            <MDBCol md='3' className='ps-5'>
                <select>
                    <option></option>
                </select>
            </MDBCol>

        </MDBRow>

<hr className="mx-n3" />

        <MDBBtn className='my-4' size='lg'>Registrarse</MDBBtn>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>



);

}
export default Registrarse;