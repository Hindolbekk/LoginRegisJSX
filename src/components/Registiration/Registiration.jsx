import React, { useState } from 'react'
import "./Registiration.scss"
import { FaUserTie } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Registiration() {
  const navigate=useNavigate();
  let url="https://6564d612ceac41c0761ee71f.mockapi.io/projectProduct";
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [parol,setParol]=useState("");
  function NavigateLogin() {
    setTimeout(() => {
      navigate('/login')
    }, 1000); 
} 
  async function handlePost(e){
    e.preventDefault();
    let data={
      name:name,
      phone:phone,
      parol:parol
    }
    await axios.post(url,data).then((result)=>{
      console.log(result.status); 
      if(result.status==201){
        setTimeout(()=>{
          navigate("/login")
        },1000);
      }   
    })
  }
  return (
    <div className="registiration">
    <div className='wrapper'>
      <div className='form-box'>
        <form action="#">
          <h1 className='title'>Ro'yxatdan o'tish</h1>
          <div className='input-box'>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Ism kiriting :' required/>
            <FaUserTie className='icon'/>
          </div>
          <div className='input-box'>
            <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Telefon raqam kiriting :' required/>
            <FaPhoneAlt className='icon' />
          </div>
          <div className='input-box'>
            <input onChange={(e)=>setParol(e.target.value)} type="text" placeholder='Parol kiriting :' required/>
            <IoIosLock className='icon'/>
          </div>
          <div className="remember-forgot">
            <label > <input type="checkbox" />Men shartlarga roziman</label>
          </div>
          <button onClick={handlePost} type='submit'>Ro'yxatdan o'tish</button>
          <div className="login-link">
            <p>Allaqachon akkaunt bormi? <a href="#" onClick={NavigateLogin}>Tizimga kirish</a> </p> 
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Registiration