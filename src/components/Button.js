import PropTypes from 'prop-types'

const Button = (props) => 
{
    
    return <button onClick={props.onClick} className="btn" style={{background: props.color}}>{props.text}</button>
}

Button.defaultProps=
{
    color: 'steelblue'
}

Button.propTypes = 
{
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
