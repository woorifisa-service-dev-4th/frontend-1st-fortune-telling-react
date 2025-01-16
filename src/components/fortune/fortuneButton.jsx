import React from "react";

const FortuneButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 mt-3"
    >
      운세 확인하러 가기
    </button>
  );
};

export default FortuneButton;