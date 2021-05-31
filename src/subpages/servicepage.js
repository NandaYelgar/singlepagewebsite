import React from 'react'
import Appheader from './components/common/header';
import AppFooter from './components/common/footer';

import { Layout } from 'antd';

const { Header ,  Footer } = Layout;

const servicepage = () => {
    return (
        
        <Layout className="mainLayout">
       <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Appheader />
      </Header>


       <Footer>
       <AppFooter/>
       </Footer>
   
        </Layout>
 

    )
}

export default servicepage
