import React, {useEffect, useState} from "react";
import axios from "axios";

const HomePage = (props)=>{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/api/restricted/users", { headers:{withCredentials:true}})
            .then(res=>{
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(error=>{
                console.log(error);
            })
    },[])


    return(
        <div className="home">
            {users.map((item)=>(
                <div className="user">
                    <p>{item.username}</p>
                </div>
            ))}
        </div>
    )
}

export default HomePage;