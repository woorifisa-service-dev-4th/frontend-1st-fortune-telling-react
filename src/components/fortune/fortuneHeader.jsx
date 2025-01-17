import React from 'react'
import fortuneImage from '../../assets/img/fortune.png';
const fortuneHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between mb-2">
      <header>
        <h1 className="pt-8 mx-auto text-white max-w-max text-7xl">
          <img
            className="ml-4"
            src="src/assets/img/fortune.png"
            alt="woman"
            width="200"
            height="200"
          />
        </h1>
      </header>
    </div>
  )
}


export default fortuneHeader