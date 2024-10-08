import './Contact.css';

const RightBox = () => {
  return (
    <div className='rigthSide'>

      <div className="layer1">

        <div className="nameInput">
          <label htmlFor="Full Name">Full Name:</label>
          <input type="text" placeholder='Steve Harvie' />
        </div>

        <div className="emailInput">
          <label htmlFor="Email Address">Email Address:</label>
          <input type="text" placeholder='hello@kuchbhi.com' />
        </div>

      </div>

      <div className="layer2">
        <div className="textArea">
          <label htmlFor="Your Message">Your Message</label>
          <textarea name="message" id="msg" placeholder='Write Your Message'></textarea>
        </div>
      </div>

      <div className="layer3">
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default RightBox;
