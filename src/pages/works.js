import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Works = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
      
    return(
    <div id="works" className="block worksBlock">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>How It Works?</h2>
                <p>subtitle</p>
            </div>
          <div className="contentHolder">
            <Button type="primary" onClick={showModal}>
        <i class="fas fa-play"></i>
      </Button>
      </div>
      <Modal title="Our Works"
      visible={isModalVisible} 
      footer={null}
      onCancel={handleCancel}>
       <iframe title="videos" width="100%" height="360" src="https://www.youtube.com/channel/UCsP_Yh_bBEWeHt94GieeBeA"></iframe>
      </Modal>
        </div>
    </div>
    );
}

export default Works;