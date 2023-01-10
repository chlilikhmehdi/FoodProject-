import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Btnn = ({dataAfficher , maping }) => {
  const expect = (cat)=>{
    dataAfficher(cat)
  }
  return (
    <Row className='my-3 '>
        <Col sm='12' className='d-flex justify-content-center' >
          {
            maping.length>0?(maping.map((item)=>{//dak maping fih riir l category sff
              return(
            <div>
            <button onClick={()=>expect(item)} style={{ border:'1px solid #b45b35'}} className='btn me-4' >
               {item}
            </button>
          
            </div>
              )
            })):(<h1>aucun resultat</h1>)
          }
          
            
        </Col>
    </Row>
  )
}

export default Btnn