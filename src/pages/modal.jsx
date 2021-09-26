import React, { useEffect } from 'react';
import './modal.css';
import Camisa from './../Camisa';
import Terno from './../Terno';
import Oculos from './../Oculos';

const Modal = ({ modal, screen }) => { 
  useEffect(() => { 
    if (!modal === false) { 
      acao()
    } else 
      fechar()
  }, [modal])

  function ModalContent() {
    switch (screen) {
      case 1:
        return <Camisa/>

      case 2:
        return <Terno/>

      case 3:
        return <Oculos/>

    }
  }



  function acao() {

    let modal = document.querySelector('.modal')

    modal.style.display = 'block'; //estou mudando minha ação de no para block
  }


  function fechar() {
    let modal = document.querySelector(".modal")

    modal.style.display = 'none';
  }


  return (
    <div>

      <div class="modal">
        <div onClick={() => { acao() }} class="box-btn">
        {ModalContent()}
        </div>

        <div onClick={() => { fechar() }} class="fechar">

        </div>
      </div>

    </div>


  );


}


export default Modal;

