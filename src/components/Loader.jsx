import React from 'react'
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Loader = () => {
  return (
    <div className=' flex justify-center'>
       <CgSpinnerTwoAlt color="white" className=' animate-spin' size={50}/>
    </div>
  )
}

export default Loader
