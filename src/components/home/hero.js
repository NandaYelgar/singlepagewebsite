import React from 'react';
import { Carousel, Button } from 'antd';
  
const items = [
    {
        id: '1',
        breakpoint: { max: 3000, min: 1024 },
        title:'Pioneer Structural & BIM Consultancy',
        content:''
    },
    {
        id: '2',
        breakpoint: { max: 3000, min: 1024 },
        title:'Experts in Building Information Modelling',
        content:''
    },
    {
        id: '3',
        breakpoint: { max: 3000, min: 1024 },
        title:'Structural, Architectural & MEP',
        content:''
    }
]

function Hero(){
    return(
       <div id="hero" className="heroBlock">
            <Carousel autoplay>
                      {items.map(item => {
                          return(
                              <div className="container-fluid">
                                  <div className="content">
                                      <h3 style={{color:"black", height:"8vh", textAlign:"center"}}>{item.title}</h3>
                                     <p>{item.content}</p>
                                     <div className="btnHolder">
                                     <Button size="link">
                                     <i class="fas fa-desktop"></i>
                                     <a href="https://www.youtube.com/watch?v=hbSWRNF8MPA&t=9s">Watch Video</a>
                                     </Button>
                                     </div>
                                  </div>
                              </div>
                          );
                          })}
            </Carousel>
       </div>
    );
}

export default Hero;
