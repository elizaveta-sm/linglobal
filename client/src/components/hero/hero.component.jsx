import Button from '../button/button.component';

import './hero.styles.scss';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src="assets/hero-image.png" alt="" className='hero-image' />
            <div className="hero-content">
                <h3>LINGLOBAL</h3>
                <h1>We bring empowerment to tutoring services</h1>
                <p>With us, dive deeper into the ocean of knowledge</p>
                <Button value={'Become a tutor now!'} />
            </div>
        </div>
    )
};

export default Hero;