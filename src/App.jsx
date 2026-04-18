import { useState } from 'react'
import { motion } from 'motion/react'
import './App.css'

function App() {
 
  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 2}}>
      <h1>Hello World</h1>
    </motion.div>
  
    </>
  )
}

export default App
