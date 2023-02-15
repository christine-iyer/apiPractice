import React from "react";
import Card from 'react-bootstrap/Card'




const DisplayItem = ({ result}) => {
     return (
          <div className="card">
               <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{result.longName}</Card.Title>
    <Card.Text>
    <h1>{result.symbol}</h1>
     <h1>{result.regularMarketDayHigh}</h1>
    </Card.Text>
    
  </Card.Body>
  </Card>
               

          </div>     
     )
}
export default DisplayItem;









