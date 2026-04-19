import { useState } from 'react'
import { motion } from 'motion/react'
import './App.css'

function App() {
 
  return (
    <>
    <motion.button whileHover={{scale:3, cursor:"pointer"}}
    whileTap={{scale:0.5, backgroundColor:"red", borderRadius:"100%"}}
    transition={{type:"spring", stiffness:400, damping:10}}
    >Get Started</motion.button>
  
    </>
  )
}

export default App
