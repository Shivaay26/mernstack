import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Forms from './Forms';
import Crads from './Crads';

function App() {

  const [data, setdata] = useState([])
  useEffect(() => 
  { axios.get('http://localhost:5000').then((res)=>{setdata(res.data)})}, [])

  const deletefunc=(_id)=>{
    setdata( data.filter(idata=>{return idata._id!==_id})  )
    axios.delete("http://localhost:5000/"+_id); 
  }

  return (
    <div className="App">
    <Forms data={data} setdata={setdata}/>
    <Crads data={data} deletefunc={deletefunc}/>
    </div>
  );
}

export default App;

// window.location.reload()