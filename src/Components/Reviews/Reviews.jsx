import './Reviews.css';
import Slider from './Slider';

const Reviews = () => {

    return (
        <div className="reviewContainer">
            <div className="heading">
                <p>Reviews</p>
                <h1>User Experience</h1>
            </div>

            <div className="sliderContainer">
                <Slider />
            </div>
        </div>


    )
}

export default Reviews;
