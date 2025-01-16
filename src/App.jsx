import { DefaultLayout } from "./layouts/DefaultLayout";
import  FortuneHeader  from "./components/fortune/fortuneHeader"
import FortuneBody from "./components/fortune/fortuneBody";
import FortuneName from "./components/fortune/fortuneName";
import FortuneKind from "./components/fortune/fortuneKind";
import FortuneBirth from "./components/fortune/fortuneBirth";
import FortuneButton from "./components/fortune/fortuneButton";
import Modal from "./components/ui/modal";
import { useState } from "react";
import { createPortal } from "react-dom";
import FortuneForm from "./components/fortune/fortuneForm";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);



  return (

    <DefaultLayout>
      <FortuneHeader/>
      <FortuneBody>
      <FortuneName/>
      <FortuneKind/>
      <FortuneBirth/>
      <FortuneButton onClick={openModal} />
      </FortuneBody>
    </DefaultLayout>
  )
}