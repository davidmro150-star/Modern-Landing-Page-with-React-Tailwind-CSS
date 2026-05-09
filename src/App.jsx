import React from 'react'
import Navbar from './assets/Components/Navbar'
import Banner from './assets/Components/Banner'
import Experience from './assets/Components/Experience/Experience'
import Service from './assets/Components/Service/Service'
import Latest from './assets/Components/Latest/Latest'
import Project from './assets/Components/Project/Project'
import Business from './assets/Components/Business/Business'
import Client from './assets/Components/Client/Client'


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Experience />
        <Service />
        <Latest />
        <Project />
        <Business />
        <Client/>
      </div>
      
    </>
  )
}

export default App
