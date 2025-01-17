import React, { useState } from "react";

const fortuneForm = ({onClose, fortuneData,imageSrc, zodiac ,name}) => {
  console.log("fortuneData 상태:", fortuneData); 
  const isValidData = fortuneData && fortuneData.trim() !== "" && fortuneData !== "null";


  return (
    <div className="flex inset-0 justify-center items-center">
      <div className="bg-white rounded-lg   p-6 w-96">
        <header className="text-center">
          <h1 className="text-2xl font-bold mb-4">2025년 신년운세</h1>
          <div className="fortune-teller flex justify-center">
            <img
              id="zodiac-im"
              src={imageSrc}
              alt="십이지신 이미지"
              className="h-32 w-32"
            />
          </div>
        </header>
        <div className="mt-6">
          <label className="block text-lg font-semibold mb-2">{name}님의 운세</label>
          <div id="result">
            <h2 id="fortune-title" className="text-xl font-bold text-gray-800">
              {zodiac}띠 운세
            </h2>
            <div>
            {isValidData ? (
            <p>{fortuneData}</p>
          ) : (
            <p className="text-gray-500">운세를 불러오는 중입니다...</p>
          )}
          </div>
            {/* <p id="fortune-content" className="text-gray-600">
              {fortuneData}
            </p> */}
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default fortuneForm;