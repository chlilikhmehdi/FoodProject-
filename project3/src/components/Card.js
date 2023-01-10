import React from 'react'
import { Col, Row , Card } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
const Card1 = ({itemsdata}) => {
 
  return (

     <Row>
           <Zoom left>

            {
              itemsdata.length>=1?(itemsdata.map((item)=>{
                return(
                  <Col sm='12'>
                  <Card key={item.id}  className='d-flex flex-row' style={{backgroundColor:'white'}}>
                      <Card.Img className='img-item' variant="top" src={item.img} />
                      <Card.Body className='my-2 '>
                        <Card.Title className='d-flex justify-content-between '>
                          <div className='item-title'>{item.title} </div>
                          <div style={{color:'brown'}}>{item.price}</div>
                        </Card.Title>
                        <Card.Text className='my-3'>
                             {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
                )
              })):(<h1>no data found</h1>)
            }
    
      
          </Zoom>
   </Row>
   
  )  
}

export default Card1