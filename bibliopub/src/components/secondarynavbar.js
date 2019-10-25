import React from 'react';
// import { connect } from 'react-redux';

class SecondaryNavbar extends React.Component{
    render(){
        return(
            <div id='navigation' >
                <ul>
                <li>Fiction</li>
                <li>Religion</li>
                <li>Health</li>
                <li>Business&Economics</li>
                <li>computers</li>
                <li>Science</li>
            </ul>
            </div>
        )
    }
}

export default SecondaryNavbar