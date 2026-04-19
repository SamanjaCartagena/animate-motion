import { useState } from 'react'
import { motion } from 'motion/react'
import './App.css'
import AnimatedButton from './AnimatedButton'
import { FeaturesList } from './FeaturesList'
import  DraggableCard from './DraggableCard'


function App() {
 
  return (
    <>
    <AnimatedButton>Click Me</AnimatedButton>
    <FeaturesList />
    <AnimatedButton damping={0}>Fuck me</AnimatedButton>
    <br/>
    <DraggableCard/>
    </>
  )
}

export default App
 