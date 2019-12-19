import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { LoginUser } from '../actions/loginactions';

class Login extends React.Component{
    constructor(props){
        super(props)
    this.GoogleCallBack = this.GoogleCallBack.bind(this)
    }

    GoogleCallBack(response) {
        console.log(response);
        if(!response || !response.accessToken) {
            alert("Sorry, failed to login. Try again.");
            return;
        }

        let user = {
            name: response.profileObj.name,
            token: response.accessToken
        }

        localStorage.setItem('user', JSON.stringify(user));

        this.props.doLogin();
    }

    render(){
        return(
           
            <div className='ml-auto'>
            <div style={{marginLeft:"-70%"}}>
            <GoogleLogin
            clientId="709546667860-v39i5mlao7adj78lht9d2dn5oappqig0.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={this.GoogleCallBack}
            onFailure={this.GoogleCallBack}
            scope="https://www.googleapis.com/auth/books"
          />
          </div>
           </div>
        )
    }
}

function mapActionToProps(dispatch){
    return{
        doLogin : function(){
            dispatch(LoginUser())
        }
    }
}



export default connect(null,mapActionToProps)(Login)