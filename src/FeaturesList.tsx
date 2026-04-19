import {motion} from "motion/react"

const container = {
    hidden: {opacity:0},
    visible: {opacity:1, transition:{staggerChildren: 1}}
}
const item={
    hidden: {opacity:0, y:20},
    visible: {opacity:1, transition:{staggerChildren: 0.15, delayChildren: 1}}
}

export function FeaturesList() {
    const features =["Fast","Declarative","Powerful","Fun"]
    return (
        <motion.ul variants={container} initial="hidden" animate="visible">
            {features.map((feature) => (
                <motion.li key={feature} variants={item}>
                    {feature}
                </motion.li>
            ))}
        </motion.ul>
    );
}