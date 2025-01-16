import React from 'react'

export const fortuneName = () => {
  return (
    <div>
    <label for="name">이름</label>
    <input type="text" id="name" name="name" placeholder="이름을 입력해주세요." required>
    </input>
    </div>
  )
}

export default fortuneName;