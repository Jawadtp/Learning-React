import Button from './Button'

// rafce
const Header = (props) => 
{
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color={props.show?'red':'green'} text={props.show?'Close':'Add'} onClick={props.onClick}/>
        </header>
    )
}

Header.defaultProps = {title: "Task Tracker"}

export default Header
