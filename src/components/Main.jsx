import React from 'react'
import data from '../data'
import Page from './Page'

const Main = () => {
  return (
    <div id='card'>
        <div id='userContent'>
            <div>
                <p id='name'>Name</p>
                <div id='nameBar'></div>
                <p className='subInfo'>From:</p>
                <p className='subInfo'>Job Title:</p>
                <p className='subInfo'>Employer:</p>
            </div>
            <br></br>
            <div id='movieListHolder'>
            <p id='favMovies'>Favorite Movies:</p>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
        <div id='pageNum'>
            <Page />
        </div>
    </div>
  )
}

export default Main