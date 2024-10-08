/* eslint-disable react/prop-types */

const ServiceBox = ({ data }) => {
    return (
        <div className="serviceBox1">
            <div className="logo">
                {data.logo}
            </div>

            <div className="logoHeading">
                <p>{data.logoHeading}</p>
            </div>

            <div className="logoAbout">
                {data.logoAbout}
            </div>
        </div>
    )
}

export default ServiceBox;
