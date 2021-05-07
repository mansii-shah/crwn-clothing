 import React ,{useState} from 'react';
const SignInComponent=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

   function handleSubmit(event){
        event.preventDefault();
        
    }
    function handleChange(event){
        if(event.target.name==='email'){
                setEmail(event.target.value);
        }else{
            setPassword(event.target.value);
        }

    }
    return(
        
        <div className="sign-in">
            <h2>I have Already Acount</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <label>Enter Email</label>
                <input type="email" name="email" onChange={handleChange} value={email} placeholder="email"></input>
                <label>Enter Password</label>
                <input type="password" name="password" onChange={handleChange} value={password} placeholder="Password"></input>
               
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}
export default SignInComponent;