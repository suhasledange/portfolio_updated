import React from 'react'
import { TailSpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#1E22A0"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader
