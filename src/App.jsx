import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './component/Heading'
import Description from './Component/Description'
import Instructure from './Component/UserCard'

function App() {
  return (
    <div>
      <div className='Main'>
        <div className='Main-App'>
          <Heading />
          <Description />
          <Instructure id="Instructor" name="Muhammad Ali" mail="alijutt030627@gmail.com " location="Karachi" />

        </div>
        <div className='Main-App'>
          <Heading />
          <Description />
          <Instructure id="Student" name="Bisma Sheikh" mail="bismasheikh5599@gmail.com " location="Lahore" />
        </div>
      </div>
    </div>

  )
}

export default App
