import {createStore} from 'redux' ;
import loginReducer from "./reducers/loginreducer";


function Store (){

     return createStore(
        loginReducer,
        window.devToolsExtension && window.devToolsExtension()
     )
}

export default Store;