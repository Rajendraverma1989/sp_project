import React from 'react';
import './styles.css';

 class Header extends React.Component {

     render() {
    return(
            <nav className="nav-wrapper">
            <span className={'headertext'}> 
                SpaceX Launch Program              
                </span>  
            </nav>  
    )
}
 }

export default Header;
