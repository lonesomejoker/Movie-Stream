import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='flex items-center gap-1.5 text-lg hover:underline 
    underline-offset-8 mb-2'>
      <Icon/>
     <h1 className=' font-bold text-[10px] md:text-[16px] font-varela'>{name}</h1>
    </div>
  )
}

export default HeaderItem
