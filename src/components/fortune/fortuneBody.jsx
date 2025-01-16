import React,{useState} from 'react'
import { createPortal } from 'react-dom';
import Modal from '../ui/modal'
import FortuneForm from './fortuneForm';

const fortuneBody = ({children}) => {

  
  const [openModal, open ]=useState(false);
  
  return (
    <div className='bg-white rounded-xl shadow-2xl border border-gray-300 p-8 w-full max-w-3xl'> 
      {children}
    
  {/*modal이 생성되는 위치*/}
   {openModal && createPortal(
     <Modal>
       <FortuneForm onClose={ ()=>open(false)}>
        New todo
        </FortuneForm>
      
    </Modal>,
    document.body 
   )}

</div>


  )
}
export default fortuneBody