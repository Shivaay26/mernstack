import React from 'react'

const Crads = ({data,deletefunc}) => {
    return (
        <div>
            {data.map(idata=>
             <div className="cards">

            <table style={{width:"100%"}}>
            <tr>
                <td className="contenttable">
                    <tr style={{width:"100%"}}> the student name is:<b> {idata.name}</b></tr>
                    <tr>the email is :- <b>{idata.email}</b> </tr>
                    <tr>the password is :- <b>{idata.password}</b></tr> 
                </td>
                <td>
                    <tr><button className="remove" onClick={()=>{deletefunc(idata._id)}}>REMOVE</button></tr>
                </td>
            </tr>
            </table>

            </div>)}
        </div>
    )
}

export default Crads

// onClick={()=>deletefunc(idata._id)}
