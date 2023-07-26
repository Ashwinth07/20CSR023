import React from 'react'
// import Train from './Train.js'
import { Routes,Route } from 'react-router-dom'
import TrainDetails from './TrainDetails/TrainDetails.js'
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TrainDetails/>} />
    </Routes>
  )
}

export default Allroutes