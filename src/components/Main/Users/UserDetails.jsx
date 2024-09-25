import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.css";
import { GET_USER } from "../../../utils/API";
import { status, userType } from "./Users";
 
export default function UserDetails() {
  const { id } = useParams();
  const [user,setUser] = useState(null)
  const[loading, setLoading] = useState(false)
  useEffect(() => {
    async function getUser() {
      setLoading(true)
      const response = await GET_USER(id)
      console.log(response)
      setUser(response)
      setLoading(false)
    }
    getUser()
  }, [id])
  return (
    <section className="section-area">
      <div className="section-container user-details">
        <h1>{user && <>{user.name}</>}</h1>
        <img src={user?.profile_image || "https://randomuser.me/api/portraits/men/32.jpg"}  />
    
        {loading && <span>Carregando...</span>}
      <br />
        {user ? <>
        <p>Email: {user.email}</p>
        <p>Função:{userType[user.user_type]}</p>
        <p>Status: {status[user.account_status]()}</p></> :
        <span>Nenhum Usuario encotrado</span>
        }
      </div>
    </section>
  );
}
