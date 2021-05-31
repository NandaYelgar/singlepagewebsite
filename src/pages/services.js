import React from 'react';
import { Row, Col, Button} from 'antd';
import image1 from '../assets/images/civil.png';

import image3 from '../assets/images/building.png';
import image4 from '../assets/images/cim.png';
import image5 from '../assets/images/arch.png';
import image6 from '../assets/images/cad.png';
import image7 from '../assets/images/struct.png';
import { Card } from 'antd';


const { Meta } = Card;

function Services(){
    return(
        <>
        <div id="services" className="block featureBlock bgGray">
            <div className="container-fluid">  
             <div className="titleHolder">
                 <h2>Services </h2>
                 <p>End-to-End Solutions</p>
                
             </div>         
                <Row gutter={[16, 16]}>
                <Col md={{ span: 8 }} >
                 
                    <Card 
                 
                    style ={{height: 250}}
                    cover={<img id="imgstyle" alt="example" src={image1} />}
                    >
                    <Meta title="Civil & Structural Engineering" description="We employ best universally accepted simulation techniques and software to perform Structural analysis and design" style={{textAlign : 'center'}} />
                    </Card>
                </Col>
               
                <Col  md={{ span: 8 }} >
                 
                    <Card
                
                    style ={{height: 250}}
                    cover={<img  id="imgstyle" alt="example" src={image3} />}
                    >
                    <Meta title="Building Information Modelling" description="hORIZON consists of team members who have a strong association with BIM concept from the time BIM was invented." style={{textAlign : 'center'}}/>
                    </Card>
                </Col>
               
                <Col  md={{ span: 8 }} >
                 
                    <Card
                 
                    style ={{height: 250}}
                    cover={<img  id="imgstyle" alt="example" src={image4} />}
                    >
                    <Meta title="Civil Information Modelling" 
                     description="We employ best universally accepted simulation techniques and software to perform Structural analysis and design."
                    style={{textAlign : 'center'}}/>
                    </Card>
                </Col>
               
                <Col  md={{ span: 8 }} >
                 
                    <Card
                   
                   
                    cover={<img  id="imgstyle" alt="example" src={image5} />}
                    >
                    <Meta title="Architectural Services"         description=" Support architects services for their design development, landscaping projects, and 2D to 3D modelling for furniture’s, building components." style={{textAlign : 'center'}}/>
                    </Card>
                </Col>
               
                <Col  md={{ span: 8 }} >
                 
                    <Card
                   
                   
                    cover={<img  id="imgstyle" alt="example" src={image6} />}
                    >
                    <Meta title="CAD Services"  description="All the engineering, conceptual studies finally need to be presented to the construction site with zero errors." style={{textAlign : 'center'}} />
                    </Card>
                </Col>
                <Col  md={{ span: 8 }} >
                 
                 <Card
             
                 style ={{height: 250}}
                 cover={<img  id="imgstyle" alt="example" src={image7} />}
                 >
                 <Meta title="Structural Assessment and Rehabilitation" 
                 description="Structural assessment of old and heritage buildings which have been subjected to fatigue stresses."
                 style={{textAlign : 'center'}}/>
                 </Card>
             </Col>
            
            
              
                </Row>
                <Button type="primary"><a href="./subpages/servicepage">Know More</a></Button>
               
            </div>
        </div>
       
       </>
    );
}


export default Services;