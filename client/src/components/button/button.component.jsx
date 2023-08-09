import './button.styles.scss';

const Button = (props) => {

    const { value } = props;

    return (
        <button className='button-container'>
            {value}
        </button>
    )
};

export default Button;