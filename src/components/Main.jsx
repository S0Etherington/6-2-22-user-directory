import React, {useState} from 'react'
import data from '../data'
import Page from './Page'
import Footer from './Footer'

const Main = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

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
        <Footer setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex}/>
    </div>
  )
}

export default Main