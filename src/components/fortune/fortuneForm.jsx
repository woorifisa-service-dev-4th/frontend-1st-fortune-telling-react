import React, { useState } from "react";

const fortuneForm = ({ onClose, zodiac, fortune, imageSrc }) => {
  // if (!isOpen) return null; // 모달이 닫혀 있을 때 아무것도 렌더링하지 않음

  const copyLink = () => {
    const dummy = document.createElement("textarea");
    dummy.value = window.location.href;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("링크가 복사되었습니다!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
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
          <label className="block text-lg font-semibold mb-2">나의 운세</label>
          <div className="" id="result">
            <h2 id="fortune-title" className="text-xl font-bold text-gray-800">
              {zodiac}띠 운세
            </h2>
            <p id="fortune-content" className="text-gray-600">
              {fortune}
            </p>
          </div>
        </div>
        <div className="flex-col share-section mt-6">
          <label className="block text-lg font-semibold mb-2">
            친구에게 공유하기
          </label>
          <button
            onClick={copyLink}
            className=" w-full bg-purple-600 text-white px-4 py-2 rounded-md shadow hover:bg-purple-700"
          >
            링크 복사하기
          </button>
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
