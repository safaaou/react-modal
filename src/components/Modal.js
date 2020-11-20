import React, {useRef, useCallback, useEffect, useState} from 'react';
import '../App.css';



function ButtonList(props) {
  const buttons = props.buttons;
  const listItems = buttons.map((btn, index) =>    <button type="button" value={btn}className="btn btn-outline-success" 
                                                      key={index} onClick={props.onValue}>{btn}</button> );  
  return (
          <div >{listItems}</div>
        );
}

function ModalName(props) {
  const name = props.name;
  return (
     <h2>{name}</h2>
  );
}

function FirstTitle(props) {
  const name = props.name;
  return (
    <h3>{name}</h3>
  );
}

function SecondTitle(props) {
  const name = props.name;
  return (
    <h3>{name}</h3>
  );
}

function ButtonSubmit(props) {
  const name = props.name;
  return (
    <button type="button" className="btn btn-success" onClick={props.onConfirm}>{name}</button>
  );
}





function Modal({showModal,setShowModal}){
  const buttons1 = ["Monday", "tuesday", "wednesday"];
  const buttons2 = ["00:12", "12:23", "23:11","10:46"];
  const modalRef = useRef();
  const [statut1, setStatut1] = useState('');
  const [statut2,setStatut2] = useState('');

  const handleClick = e => {    
    e.preventDefault();  
    console.log("Button clicked !");
  }

  const handleConfirm = e => {
    e.preventDefault();
    console.log('Confirmation.');  
  }

  //if we click the background
  const closeModal = e => {
    if ( modalRef.current === e.target){
      setShowModal(false);
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal){
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown',keyPress);
    }, 
    [keyPress]
  );

    return (
      
      <div className="modal" style={{display: "block"}}>
      <div className="modal-backdrop" ref={modalRef} onClick={closeModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <ModalName name="Test de notre modal" />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(prev => !prev)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <FirstTitle name="title 1" />
                <ButtonList buttons={buttons1} onValue={e => setStatut1(e.target.value)}/>
                {statut1}
                <SecondTitle name="title 2" />
                <ButtonList buttons={buttons2} onValue={e => setStatut2(e.target.value)}/>
                {statut2}
            </div>
            <div className="modal-footer">
              <ButtonSubmit name="Confirm" onConfirm={handleConfirm}/>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(prev => !prev)}>Close</button>
            </div>
          </div>
        </div>
    </div>
  </div>

      );

}

export default Modal;