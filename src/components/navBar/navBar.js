import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../pages/homepage/homepage.css';
import './navBar.css';

const NavBar = (props) => {
    
    const history = useHistory();
    
    return(
        <div className="homepageComponent">
            <div className="homepageNav">
                <span className={props.active === 'home' ? 'activated' : null} onClick={ () => history.push('/') }>HOME</span>
                <span className={props.active === 'signin' ? 'activated' : null} onClick={ () => history.push('/signin') }>SIGN IN</span>
                <span className={props.active === 'register' ? 'activated' : null} onClick={ () => history.push('/register') }>REGISTER</span>
            </div>
        </div>
    )
}

export default NavBar;