import React, {useEffect, useState} from "react";
import axios from "axios";

const HomePage = (props)=>{
    const [users, setUsers] = useState([]);

    const axiosWithAuth = () =>{
        return axios.create({
            headers: {
              Authorization: `${sessionStorage.getItem("token")}`
            }
          });
    }

    useEffect(()=>{
        axiosWithAuth().get("http://localhost:3300/api/jokes")
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
                <div className="joke">
                    <p>{item.joke}</p>
                </div>
            ))}
        </div>
    )
}

export default HomePage;