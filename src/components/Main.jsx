import React, {useState} from 'react'
import data from '../data'
import Page from './Page'
// import Footer from './Footer'

const Main = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

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

  return (
    <div>
        <div id='card'>
            <div id='userContent'>
                <div>
                    <p id='name'>{data[selectedIndex].name.first} {data[selectedIndex].name.last}</p>
                    <div id='nameBar'></div>
                    <p className='subInfo'>From: {data[selectedIndex].city}, {data[selectedIndex].country}</p>
                    <p className='subInfo'>Job Title: {data[selectedIndex].title}</p>
                    <p className='subInfo'>Employer: {data[selectedIndex].employer}</p>
                </div>
                <br></br>
                <div id='movieListHolder'>
                <p id='favMovies'>Favorite Movies:</p>
                    <ol>
                        <li>{data[selectedIndex].favoriteMovies[0]}</li>
                        <li>{data[selectedIndex].favoriteMovies[1]}</li>
                        <li>{data[selectedIndex].favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
            <div id='pageNum'>
            <Page setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex}/>
            </div>
        </div>
        {/* <Footer /> */}
        <div id='footer'>
            <button className='navButton' onClick={() => previous()}>Previous</button>
            <div>
                <button className='cardButton'>Edit</button>
                <button className='cardButton'>Delete</button>
                <button className='cardButton'>New</button>
            </div>
            <button className='navButton' onClick={() => next()}>Next</button>
        </div>
    </div>
  )
}

export default Main