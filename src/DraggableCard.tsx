import {motion} from 'motion/react'

export default function DraggableCard(){
    return (
        <div className='drag-container'>
            <motion.div className='card'>Drag me!</motion.div>
        </div>
    )
}