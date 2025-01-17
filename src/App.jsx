import { DefaultLayout } from "./layouts/DefaultLayout";
import FortuneHeader from "./components/fortune/FortuneHeader";
import FortuneBody from "./components/fortune/FortuneBody";
import FortuneName from "./components/fortune/FortuneName";
import FortuneKind from "./components/fortune/FortuneKind";
import FortuneBirth from "./components/fortune/FortuneBirth";
import FortuneButton from "./components/fortune/FortuneButton";
import Modal from "./components/ui/Modal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FortuneForm from "./components/fortune/FortuneForm";


import mouseImg from "./assets/img/mouse.png";
import oxImg from "./assets/img/ox.png";
import tigerImg from "./assets/img/tiger.png";
import rabbitImg from "./assets/img/rabbit.png";
import dragonImg from "./assets/img/dragon.png";
import snakeImg from "./assets/img/snake.png";
import horseImg from "./assets/img/horse.png";
import sheepImg from "./assets/img/sheep.png";
import monkeyImg from "./assets/img/monkey.png";
import roosterImg from "./assets/img/rooster.png";
import dogImg from "./assets/img/dog.png";
import pigImg from "./assets/img/pig.png";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const [fortuneData, setFortuneData] = useState("ㄹㅇㄹ러아널");

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(""); // 이름 상태
  const [luck, setLuckType] = useState(""); // 운세 종류 상태
  const [year, setBirthYear] = useState(""); // 생년 상태
  const [month, setBirthMonth] = useState(""); // 생월 상태
  const [day, setBirthDay] = useState(""); // 생일 상태

  const [zodiac, setZodiac] = useState(""); // 띠 상태
  const [imageSrc, setImageSrc] = useState(""); // 띠 이미지 상태

  // 띠 계산 함수
  const calculateZodiac = (year) => {
    const zodiacSigns = [
      "원숭이",
      "닭",
      "개",
      "돼지",
      "쥐",
      "소",
      "호랑이",
      "토끼",
      "용",
      "뱀",
      "말",
      "양",
    ];
    const zodiacImages = {
      쥐: mouseImg,
      소: oxImg,
      호랑이: tigerImg,
      토끼: rabbitImg,
      용: dragonImg,
      뱀: snakeImg,
      말: horseImg,
      양: sheepImg,
      원숭이: monkeyImg,
      닭: roosterImg,
      개: dogImg,
      돼지: pigImg,
    };

    const calculatedZodiac = zodiacSigns[year % 12];
    setZodiac(calculatedZodiac);
    setImageSrc(zodiacImages[calculatedZodiac]);
    return calculatedZodiac;
  };

  // 데이터 요청 및 모달 열기
  const handleFetchAndOpenModal = async () => {
    if (!name || !luck || !year || !month || !day) {
      alert(`내용을 입력해 주세요`); // 사용자에게 알림
      return;
    }

    setModalOpen(true); // 모달 열기
    setIsLoading(true); // 로딩 시작
    setFortuneData(""); // 이전 데이터 초기화

    // 띠 계산 후 데이터 요청
    const calculatedZodiac = calculateZodiac(year);
    try {
      await fetchFortuneData(calculatedZodiac, year, luck, month, day);
    } catch (error) {
      console.error("운세 데이터를 가져오는 중 오류 발생:", error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  const BASE_URL = "http://localhost:3000";

  const fetchFortuneData = async (zodiac, year, luck, month, day) => {
    try {
      const response = await fetch(`${BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ zodiac, year, luck, month, day }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "서버 요청 오류");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let fullMessage = "";

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim() !== "");

        for (const line of lines) {
          if (line === "data: [DONE]") {
            // 스트리밍 종료 신호 처리
            setFortuneData(fullMessage);
            setIsLoading(false); // 로딩 종료
            return;
          }

          try {
            const json = JSON.parse(line.replace(/^data: /, ""));
            const content = json.content || "";
            if (content.trim()) {
              fullMessage += content;
    
              // 사용자 경험 개선: 처리 간격 조절
              await new Promise((resolve) => setTimeout(resolve, 50)); // 100ms 대기
              setFortuneData((prev) => prev + content);
            }
          } catch (parseError) {
            console.error("JSON 파싱 오류:", parseError, "원본 데이터:", line);
          }
        }
      }
    } catch (error) {
      console.error("운세 데이터를 가져오는 중 오류가 발생했습니다.", error);
      setFortuneData("운세 데이터를 가져오는 중 문제가 발생했습니다.");
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <DefaultLayout>
      <FortuneHeader />
        <FortuneBody>
          <FortuneName onChange={(value) => setName(value)} />
          <FortuneKind onChange={(value) => setLuckType(value)} />
          <FortuneBirth
            onYearChange={(value) => setBirthYear(value)}
            onMonthChange={(value) => setBirthMonth(value)}
            onDayChange={(value) => setBirthDay(value)}
          />
          <FortuneButton onClick={handleFetchAndOpenModal} />
        </FortuneBody>

        {isModalOpen &&
          createPortal(
            <Modal>
              <FortuneForm
                onClose={() => setModalOpen(false)}
                fortuneData={fortuneData} // API 데이터 전달
                imageSrc={imageSrc}
                zodiac={zodiac}
                name={name}
              />
            </Modal>,
            document.body
          )}
    </DefaultLayout>
  );
}
