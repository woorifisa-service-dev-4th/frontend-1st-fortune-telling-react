import React from 'react'

export const DefaultLayout = ({children}) => {
  return (
    <div className=' w-full h-full overflow-y-scroll bg-custom-gradient'>
        <div className='max-w-xl mx-auto min-w-[20rem]'>
       {children}
       </div>
    </div>
  )
}
