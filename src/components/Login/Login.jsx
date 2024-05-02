import React, { useState } from 'react'
import "./Login.scss"
import { FaUserTie } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate=useNavigate();
  let url="https://6564d612ceac41c0761ee71f.mockapi.io/projectProduct";
  const [name,setName]=useState("");
  const [parol,setParol]=useState("");
  function NavigateRegis(){
    setTimeout(()=>{
      navigate("/regis");
    },1000)
  }
  async function handlePostLogin(e){
    e.preventDefault();
    let data={
      username:name,
      password:parol
    }
    await axios.post(url,data).then((result)=>{
      console.log(result.status);
      if(result.status==201){
        setTimeout(()=>{
          navigate("/regis")
        },1000);
      } 
    })
  }
  return (
    <div className="login">
    <div className='wrapper'>
      <div className='form-box'>
        <form action="#">
          <h1 className='title'>Tizimga kirish</h1>
          <div className='input-box'>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Ism kiriting :' required/>
            <FaUserTie className='icon'/>
          </div>
          <div className='input-box'>
            <input onChange={(e)=>setParol(e.target.value)} type="text" placeholder='Parol kiriting :' required/>
            <IoIosLock className='icon'/>
          </div>
          <div className="remember-forgot">
            <label > <input type="checkbox" />Meni eslab qol</label>
          </div>
          <button onClick={handlePostLogin} type='submit'>Kirish</button>
          <div className="register-link">
            <p>Akkaunt yo'qmi ?  <a onClick={NavigateRegis} href="#"> Ro'yxatdan o'tish</a></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login