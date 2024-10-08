import './Contact.css';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const Contact = () => {
    return (
        <div className='contactContainer'>

            <div className="contactHeading">
                <p>Contact</p>
                <h1>Get In Touch With Me</h1>
            </div>

            <div className="contentSection">
                <LeftBox />
                <RightBox />
            </div>
        </div>
    )
}

export default Contact;
