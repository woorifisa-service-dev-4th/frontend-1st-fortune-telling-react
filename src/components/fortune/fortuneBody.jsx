import React from "react";


const FortuneBody = ({ children }) => {



  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-300 p-8 w-full max-w-3xl">
      {children}
    </div>
  );
};

export default FortuneBody;