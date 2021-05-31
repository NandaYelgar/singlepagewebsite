import React from 'react';

{/*
const items = [
    {
        key:'1',
        icon: <i class="fas fa-chart-pie"></i>,
        title:"High Performance",
        content:"sometext goes here"

    },
    {
        key:'2',
        icon: <i class="fas fa-desktop"></i>,
        title:"High Performance",
        content:"sometext goes here"

    },
    {
        key:'3',
        icon: <i class="fas fa-database"></i>,
        title:"High Performance",
        content:"sometext goes here"

    }
]*/}
function About(){
    return(
      
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                   
                </div>
                <div className="contentHolder">
                    <p>hORIZON company formed by a team of highly competent engineering professionals in strong collaboration with experienced professional engineers. The main objective in this collaboration is to transform nation construction industry using high end design and construction technology.
                    We are a full-fledged Architecture, interior, civil & structural engineering consultants We offer wide-ranging design services to building architects, business owners, developers, home owner, contractors. We have extensive experience with all types of residential, commercial, industrial and infrastructure projects.
                    We provide best architectural 3D visualization and rendering high end modelling services. We develop high quality 3d models and try to make and bring<strong> 5D BIM, 6D BIM </strong>virtual designs.

                    </p>
                </div>
              {/*  <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8}} key={item.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                            </Col>
                        );
                    })}
               
               
                </Row>*/}
            </div>
         
        </div>
    );
}

export default About;