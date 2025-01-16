import React from "react";

const FortuneButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600"
    >
      운세 확인하러 가기
    </button>
  );
};

export default FortuneButton;