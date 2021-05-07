import React from 'react';
import './authentication-page.component.scss';
import SignInComponent from '../../components/sign-in/sign-in.component';

const AuthenticationPage=()=>{
    return(
        <div className="sign-in and sign-up">
           <SignInComponent></SignInComponent>
        </div>
    )
}
export default AuthenticationPage;