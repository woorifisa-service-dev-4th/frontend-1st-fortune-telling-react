import React from 'react'

export const fortuneKind = () => {
  return (
    <form>
      <label className="text-lg font-bold text-gray-700 block">운세종류</label>
      <div className=" mt-2 flex space-x-2">
        <button
          type="button"
          className="flex-1 px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600"
        >
          운세
        </button>
        <button
          type="button"
          className="flex-1 px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600"
        >
          건강운
        </button>
        <button
          type="button"
          className="flex-1 px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600"
        >
          금전운
        </button>
      </div>
    </form>
  )
}


export default fortuneKind