/* eslint-disable react/no-unescaped-entities */
import './About.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from 'react-icons/md';
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

const About = () => {
    return (
        <div className="aboutContainer">
            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className="profile">

                <motion.div variants={fadeInUpAnimation} className="image-section">
                    <img src="public/profile.jpeg" alt="myImage" />
                </motion.div>

                <motion.div variants={fadeInUpAnimation} className="name">
                    <span className='name-text'>Harsh</span>
                    <span className='name-text'>Mishra</span>
                </motion.div>

                <motion.div variants={fadeInUpAnimation} className="btn">
                    Available For Work
                </motion.div>

                <motion.div variants={fadeInUpAnimation} className="social-icons">
                    <a className="facebook">
                        <FaFacebook />
                    </a>

                    <a className="github facebook">
                        <FaGithub />
                    </a>

                    <a className="instagram facebook">
                        <FaInstagram />
                    </a>

                    <a className="linkedin facebook">
                        <FaLinkedin />
                    </a>
                </motion.div>

            </motion.div>


            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className="about">


                <motion.div variants={fadeInUpAnimation} className="para">
                    <p>Hello I'M Harsh Mishra,</p>
                    <p>FrontEnd Developer And UX/UI,</p>
                    <p>Designer And Instructor</p>
                </motion.div>

                <motion.div variants={fadeInUpAnimation} className="aboutBtn">
                    <button className='cvbtn'>Download CV</button>
                </motion.div>

                <motion.div variants={fadeInUpAnimation} className="roles">

                    <div className="role1">
                        <div className='icon-role'>
                            <div className="icon"><MdArrowOutward /></div>
                            <div className="role">FrontEnd</div>
                        </div>

                        <div className='icon-role'>
                            <div className="icon"><MdArrowOutward /></div>
                            <div className="role">Logo Designer</div>
                        </div>
                    </div>

                    <div className="role1">
                        <div className='icon-role'>
                            <div className="icon"><MdArrowOutward /></div>
                            <div className="role">BackEnd</div>
                        </div>

                        <div className='icon-role'>
                            <div className="icon"><MdArrowOutward /></div>
                            <div className="role">Problem Solving</div>
                        </div>
                    </div>

                    <div className="role1">
                        <div className='icon-role'>
                            <div className="icon"><MdArrowOutward /></div>
                            <div className="role">Figma Design</div>
                        </div>

                        <div className='icon-role'>
                            <div className="icon"><MdArrowOutward /></div>
                            <div className="role">FrontEnd Games</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About;