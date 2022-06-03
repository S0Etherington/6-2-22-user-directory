import React from 'react'

const Footer = (props) => {
    const {selectedIndex, setSelectedIndex} = props

    const previous = () => {
        if(selectedIndex === 0){
            setSelectedIndex(24)
        }
        else {
            setSelectedIndex(selectedIndex - 1)
        }
    }

    const next = () => {
        if(selectedIndex === 24){
            setSelectedIndex(0)
        }
        else {
            setSelectedIndex(selectedIndex + 1)
        }
    }

    console.log(selectedIndex)
    
  return (
    <div id='footer'>
        <button className='navButton' onClick={() => previous()}>Previous</button>
        <div>
            <button className='cardButton'>Edit</button>
            <button className='cardButton'>Delete</button>
            <button className='cardButton'>New</button>
        </div>
        <button className='navButton' onClick={() => next()}>Next</button>
    </div>
  )
}

export default Footer