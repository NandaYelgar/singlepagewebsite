import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Appheader from './components/common/header';
import AppFooter from './components/common/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services'; 



import { Layout } from 'antd';

const { Header , Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
     <Appheader />
    </Header>
    <Content>
      <Home/>
      <About />
      <Services />
    </Content>
    <Footer>
     <AppFooter/>
    </Footer>
   
  </Layout>
  );
}

export default App;
