import React from 'react'

const Footer = () => {
  return (
    <div>
        <button className='navButton'>Previous</button>
        <div>
            <button className='cardButton'>Edit</button>
            <button className='cardButton'>Delete</button>
            <button className='cardButton'>New</button>
        </div>
        <button className='navButton'>Next</button>
    </div>
  )
}

export default Footer