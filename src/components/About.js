import React from 'react'

export default function About(props) {
  return (
    <div className={`container my-3 p-3 border border-dark rounded-3 bg-${props.mode} text-${props.altMode}`}>
        <h1 className='text-center'>About</h1>
    </div>
        
    
  )
}
