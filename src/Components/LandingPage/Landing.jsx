/* eslint-disable react/no-unescaped-entities */
import './Landing.css';
import { motion } from 'framer-motion';

//fadein animation's variable;
const fadeInUpAnimation = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.5,
            duration: 1.2,
        },
    }
}

const Landing = () => {
    return (
        <div className="container">
            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className="containt">

                <motion.div
                    // initial="hidden"
                    // animate="show"
                    variants={fadeInUpAnimation}
                    className="intro">
                    <span className="text">I'M</span>
                    <span className="text">HARSH</span>
                    <span className="text">MISHRA</span>
                </motion.div>


                <motion.div
                    // initial="hidden"
                    // animate="show"
                    variants={fadeInUpAnimation}
                    className="box">
                    <span className="box-text">Web Developer</span>
                    <span className='dots'>.</span>
                    <span className="box-text">Video Editior</span>
                    <span className='dots'>.</span>
                    <span className="box-text">Student</span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Landing;
