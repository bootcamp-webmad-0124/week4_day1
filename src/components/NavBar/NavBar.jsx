import './NavBar.css'
import logo from './../../assets/Legologo.png'
import Button from '../Button/Button'


const NavBar = () => {

    const styleObject = {
        backgroundColor: 'red',
        color: 'white'
    }

    return (
        <header className='NavBar' style={styleObject}>
            <img src={logo} alt="logo" />
            <Button text={'salir'} link={'/logout'} />
        </header>
    )
}

export default NavBar