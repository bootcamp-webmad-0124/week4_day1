import './Button.css'

const Button = (props) => {

    console.log('Este es el objeto de props:', props)

    const link = props.link
    const text = props.text

    return (
        <a href={link} className='Button'>{text}</a>
    )
}

export default Button