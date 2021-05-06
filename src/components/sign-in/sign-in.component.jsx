 import React ,{useState} from 'react';
const SignInComponent=()=>{
    const [email]=useState();
    const [password]=useState();

    return(
        <div className="sign-in">
            <h2>I have Already Acount</h2>
        </div>
    )

}
export default SignInComponent;