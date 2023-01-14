import React from 'react'
import './Hspmkn.css'

function Hspmkn({text,result}) {
  return (
    <div className='hspmkn-wrapper'>
      <div className='result'>
      <h1>{result}</h1>
      </div>
      <div className='text'>
      <h3>{text}</h3>
      </div>
    </div>
  )
}

export default Hspmkn
