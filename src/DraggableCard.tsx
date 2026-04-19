import {motion} from 'motion/react'

export default function DraggableCard(){
    return (
        <div className='drag-container'>
            <motion.div className='card' drag dragConstraints={{left:-80, right:80, top:40, bottom:40}}
            dragElastic={0.5}>Drag me!</motion.div>
        </div>
    )
}