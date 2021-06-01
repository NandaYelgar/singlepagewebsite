import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function Appheader(){
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    return(
       <div className="container-fluid">
           <div className="header">
           <div className="logo">
             
               <a href="home">hORIZON
               <p style={{color:"blue"}}>End-to-End Solutions</p>
               </a>              
           </div>
      <div className="mobileHidden">
       <Anchor targetOffset="65" >
       <Link href="#hero" title="Home" />
       <Link href="#about" title="About" />
       <Link href="#services" title="Services" />
       <Link href="#footer" title="contact" />
       </Anchor>
      </div>
        <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
        <i class="fas fa-bars"></i>
       </Button>
       <Drawer
      
        placement= "right"
        closable={false}
        onClose={onClose}
        visible={visible}
       >
       <Anchor targetOffset="65" >
       <Link href="#hero" title="Home" />
       <Link href="#about" title="About" />
       <Link href="#services" title="Services" />
       <Link href="#footer" title="contact" />
       </Anchor>
      </Drawer>
           </div>

       </div>
       </div>
    );
}

export default Appheader;