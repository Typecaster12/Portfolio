import { IoLocationSharp } from 'react-icons/io5';
import './Contact.css';
import { MdCall, MdEmail } from 'react-icons/md';

const LeftBox = () => {
    return (
        <div className="leftSide">

            <div className="infoSection1">
                <div className="locationLogo">
                    <IoLocationSharp />
                </div>

                <p className='p1'>Our Address:</p>
                <p className='p2'>Kanpur,Uttar Pradesh, India</p>
            </div>


            <div className="infoSection2 infoSection1">
                <div className="numberLogo locationLogo">
                    <MdCall />
                </div>

                <p className='p1'>Phone Number:</p>
                <p className='p2'>+91 1234567890</p>
            </div>


            <div className="infoSection3 infoSection1">
                <div className="emailLogo locationLogo">
                    <MdEmail />
                </div>

                <p className='p1'>Email Us:</p>
                <p className='p2'>something@kuchbhi.com</p>
            </div>
        </div>
    )
}

export default LeftBox;