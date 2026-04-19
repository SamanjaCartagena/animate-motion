import {motion} from 'motion/react'

export default function AnimatedButton({
    children,
    stiffness=400,
    damping=10,
}){
    return(
        <motion.button whileHover={{scale:3, cursor:"pointer"}}
        whileTap={{scale:0.5, backgroundColor:"red", borderRadius:"100%"}}
        transition={{type:"spring", stiffness:400, damping:10}}
        >{children}</motion.button>
    )
}
