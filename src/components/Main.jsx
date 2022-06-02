import React from 'react'
import data from '../data'
import Page from './Page'

const Main = () => {
  return (
    <div>
        <Page />
        <div>
            <p>Name</p>
            <p>From</p>
            <p>Job Title</p>
            <p>Employer</p>
        </div>
        <br></br>
        <div>
        <p>Favorite Movies</p>
            <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    </div>
  )
}

export default Main