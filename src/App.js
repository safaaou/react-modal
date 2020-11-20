import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';




function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
   
    <div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
          <button type="button" className="btn btn-success btn-lg" onClick={openModal}>My Modal</button>
    </div>
    {showModal && <Modal showModal={showModal} setShowModal={setShowModal}/>}
    </div>

  );
  
}


export default App;
