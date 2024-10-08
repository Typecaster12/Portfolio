import './Service.css';
import { RiGlobalFill } from "react-icons/ri";
import ServiceBox from './serviceBox';
import { AiFillAndroid } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";
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

const Service = () => {

    const cardData = [
        {
            logo: <RiGlobalFill />,
            logoHeading: 'Brand Identity Design',
            logoAbout: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, necessitatibus!'
        },
        {
            logo: <DiCodeBadge />,
            logoHeading: 'Website Design',
            logoAbout: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, necessitatibus!'
        },

        {
            logo: <AiFillAndroid />,
            logoHeading: 'Application Design',
            logoAbout: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, necessitatibus!'
        }
    ];


    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className="serviceContainer">

            <motion.div variants={fadeInUpAnimation} className="heading">
                <p>Service</p>
                <h1>Quality Services</h1>
            </motion.div>

            <motion.div variants={fadeInUpAnimation} className="services">
                {/* rendering the cards */}
                {
                    cardData.map((curItem, index) => (
                        // <Tilt key={index}>
                        <ServiceBox key={index} data={curItem} />
                        // </Tilt>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Service;
