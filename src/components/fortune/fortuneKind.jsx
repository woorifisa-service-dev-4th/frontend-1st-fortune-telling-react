import React,{useState} from 'react'

export const fortuneKind = () => {


  const [selected, setSelected] = useState(""); // 클릭된 버튼 상태 관리

  const handleClick = (type) => {
    setSelected(type); // 클릭된 버튼의 종류 업데이트
    console.log(`${type} 버튼이 클릭되었습니다.`);
  };



  return (
    <form>
      <label className="text-lg font-bold text-gray-700 block">운세종류</label>
      <div className="mt-2 flex space-x-2">
      <button
        type="button"
        onClick={() => handleClick("운세")}
        className={`flex-1 px-4 py-2 rounded-md ${
          selected === "운세"
            ? "bg-purple-700 text-white"
            : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
      >
        운세
      </button>
      <button
        type="button"
        onClick={() => handleClick("건강운")}
        className={`flex-1 px-4 py-2 rounded-md ${
          selected === "건강운"
            ? "bg-purple-700 text-white"
            : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
      >
        건강운
      </button>
      <button
        type="button"
        onClick={() => handleClick("금전운")}
        className={`flex-1 px-4 py-2 rounded-md ${
          selected === "금전운"
            ? "bg-purple-700 text-white"
            : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
      >
        금전운
      </button>
    </div>
    </form>
  )
}


export default fortuneKind