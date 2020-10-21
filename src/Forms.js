import Axios from 'axios';
import React,{useState} from 'react'

const Forms = ({data,setdata}) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const formsubmit=async (e)=>{
        e.preventDefault();
        if(name!=="" && email!=="" && password!==""){
            setdata([...data,{name:name,email:email,password:password}])
            await Axios.post('http://localhost:5000',{name:name,email:email,password:password})
            }
        else{alert('please fill all the fields')}
    }   

    return (
        <div className="formdiv">
            <form onSubmit={formsubmit}>
             <h2>CREATE ACCOUNT</h2>
              <div className="form">NAME:- <input onChange={(e)=>{setname(e.target.value)}}/> </div>
              <div className="form"> EMAIL:- <input type="email" onChange={(e)=>{setemail(e.target.value)}}/></div>
              <div className="form"> PASSWORDS:- <input type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
              <button type="submit">submit</button>  </div>
            </form>
        </div>
    )
}

export default Forms
