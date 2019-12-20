import React, {useEffect, useState} from "react";
import axios from "axios";

const RegisterPage = (props)=>{
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
    
    const usernameChange = (e)=>{
        setUsername(e.target.value);
    }
    
    const passwordChange = (e)=>{
        setPassword(e.target.value);
    }

    const submitForm = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/api/register',{username:username,password:password})
            .then(data=>{
                console.log('register successful');
                props.history.push("/login");
            })
            .catch(error=>{
                console.log(error);
            })
    }


    return(
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={submitForm}>
                <input name="username" value={username} onChange={usernameChange}/>
                <input name="password" value={password} onChange={passwordChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterPage;