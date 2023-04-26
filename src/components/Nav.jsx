import atendiLogo from '../assets/71.png'
const Nav = () => {
    return (
        <nav>
            <div className='nav-bar'>
                <button className="logo">
                    <img src={atendiLogo} alt="logo" />
                </button>
                {/* <input type="text" className='search' placeholder='search' /> */}
                <div className='nav-link'>
                    <span className='nav-link2'>
                        <button className='nav-links'>Home</button>
                        <button className='nav-links'>About Us</button>
                        <button className='nav-links'>Services</button>
                        <button className='nav-links'>Case-Studies</button>
                        <button className='nav-links'>News</button>
                    </span>
                    <div className='secondary-button'></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav