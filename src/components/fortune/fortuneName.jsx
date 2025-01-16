import React from 'react'

export const fortuneName = () => {
  return (
    <div className="mb-6">
      <label for="name" className="block text-lg font-bold text-gray-700">
        이름
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="이름을 입력해주세요."
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
      ></input>
    </div>
  );
};

export default fortuneName;