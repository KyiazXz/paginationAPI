import React from 'react'
import { Card , CardBody , CardTitle , CardSubtitle , CardText , }  from 'reactstrap'
export default function Cards({item}) {
  return (
    <div>
        <Card
  style={{
    width: '18rem',
  }}
>
  <CardBody>
    <CardTitle tag="h5">
     {item.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     
    </CardSubtitle>
  </CardBody>
  <img
    alt={item.title}
    src={item.image}
    width="100%"
    height="250px"
  />
  <CardBody>
    <CardText  style={{
    height: '150px'
  }}
  tag="h6"> 
    {item.description}
    </CardText>
  </CardBody>
</Card>
    </div>
  )
}
