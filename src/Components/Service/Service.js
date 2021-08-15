import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Service.css';

const style = {
    maxWidth: '300px',
    marginLeft: '70px',
    textAlign: 'center',
    marginTop: '40',
    marginBottom: '40px'
 
 }

const serviceDetails = [
    {
        id:1,
        title:'Fast Delivery',
        imgUrl: 'image/Man/man1.png',
        description:`Keep your systems in sync with automated web hook
        based notification each time link is paid and how we dream about our future
        `,
        shortDescription:'keep more'
    },
    {
        id:2,
        title:'A Good Auto Responder',
        imgUrl: 'image/Man/man2.png',
        description:`Keep your systems in sync with automated web hook
        based notification each time link is paid and how we dream about our future
        `,
        shortDescription:'keep more'
    },
    {
        id:3,
        title:'Home Delivery',
        imgUrl: 'image/Man/man3.png',
        description:`Keep your systems in sync with automated web hook
        based notification each time link is paid and how we dream about our future
        `,
        shortDescription:'keep more'
    }
]



const Service = () => {
 
    return(
        <>
        <div>
            <h2 className="mt-5 text-center main-heading">Why you choose us</h2>
            <p className="text-center"> Lorem ipsum dolor sit amet consec consectetur dolorum min</p>
            <hr/>
            </div>
            {
                        serviceDetails.map((task) => {
                           const {id, title,description,imgUrl,shortDescription } = task;
                           return (
                              <div className="box" key={id}>
                                 <CardGroup style={style} >
                                    <Card style={{ border: 'none' }}>
                                       

                                       <Card.Img variant="top" style={{width:'260px'}} src={imgUrl} />

                                       <Card.Body>
                                          <h6 className="main-heading">{title}</h6>
                                          <small>{description}</small>
                                           <span className="show-more"> {shortDescription} ></span>
                                        
                                        
                                       </Card.Body>
                                    </Card>
                                 </CardGroup>
                              </div>
                           )
                        })
                     }
          </>
    )
}

export default Service;