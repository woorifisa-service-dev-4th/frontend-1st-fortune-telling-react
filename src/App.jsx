import { DefaultLayout } from "./layouts/DefaultLayout";
import  FortuneHeader  from "./components/fortune/fortuneHeader"
import FortuneBody from "./components/fortune/fortuneBody";
import FortuneName from "./components/fortune/fortuneName";
import FortuneKind from "./components/fortune/fortuneKind";
import FortuneBirth from "./components/fortune/fortuneBirth";
import FortuneButton from "./components/fortune/fortuneButton";
import Modal from "./components/ui/modal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FortuneForm from "./components/fortune/fortuneForm";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const [fortuneData, setFortuneData] = useState(null);






  

  const fetchFortuneData = async (zodiac, year, luck, month, day) => {
    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ zodiac, year, luck, month, day }),
      });
      const data = await response.json();
      setFortuneData(data); // 운세 데이터 저장
      setError(null);
    } catch (err) {
      console.error("운세 데이터를 불러오는 중 오류가 발생했습니다.", err);
      setError("운세 데이터를 가져오는 중 오류가 발생했습니다.");
    }
  };


    useEffect(() => {
      const fetchFortuneData = async () => {
        try {
          const response = await fetch("/api/fortune"); // 실제 API 엔드포인트로 변경
          const data = await response.json();
          setFortuneData(data);
        } catch (error) {
          console.error("운세 데이터를 불러오는 중 오류가 발생했습니다.", error);
        }
      };
  
      fetchFortuneData();
    }, []);



  return (
    <DefaultLayout>
      <header>
        <h1 className="pt-8 mx-auto text-red-200 max-w-max text-7xl">
          <img
            className="ml-4"
            src="src/assets/img/fortune.png"
            alt="woman"
            width="200"
            height="200"
          />
        </h1>
      </header>
      <section className="max-w-xl m-4 mx-auto">
      <FortuneHeader />
        <FortuneBody>
         <FortuneName/>
         <FortuneKind/>
        <FortuneBirth/>
       <FortuneButton onClick={openModal} />
      </FortuneBody>
    
      {isModalOpen &&

createPortal(
  <Modal>
    <FortuneForm
      onClose={()=>setModalOpen(false)}
      fortuneData={fortuneData} // API 데이터 전달
    />
   
  </Modal>,
  document.body
)}
    </section>
    </DefaultLayout>
  )
}