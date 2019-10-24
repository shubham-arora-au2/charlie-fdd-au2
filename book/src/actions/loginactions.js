export function LoginUser(){
    console.log('LOGIN_USER')
    return{
        type : 'LOGIN_USER'
    }
}

export function LogoutUser(){
    console.log('LOGOUT_USER')
    return{
        type : 'LOGOUT_USER'
    }
}
