import './feature.styles.scss';

const Feature = ({ info }) => {
    const { name, title, description } = info;

    return (
        <div className="feature-container">
            <img src={`assets/${name}-icon.png`} alt={`${name} icon`} className='feature-icon' />
            <h3 className='feature-title'>{title}</h3>
            <p className='feature-description'>{description}</p>
        </div>
    )
};

export default Feature;