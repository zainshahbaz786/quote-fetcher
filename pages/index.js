
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useState } from 'react';

export default function Home() {
const [quote,setQuote]=useState("");
const [counting,setcounting]=useState(0);



const getQuote=()=>{
  axios.get('http://api.quotable.io/random').then(res=>{console.log(res.data.content);setQuote(res.data.content);setcounting(counting=counting+1);}).catch(err=>{console.log(err)})


}


  return (
   <div className='main'>
   <h1 style={{justifyContent:"center",textAlign:"center"}}>Quote Fetching Using AXIO API</h1>
   <div style={{textAlign:"center",justifyContent:"center"}}>
   <button  className=" button5" onClick={getQuote} style={{textAlign:"center",justifyContent:"center"}}>Get Quote</button>
   </div>
<br/>
<br/>

    <h2 style={{textAlign:"center",justifyContent:"center",backgroundColor:"#FAF8A7   ",color:"#39E944  " }}>{quote}</h2>
   <br/>
   <br/>
   <br/>
   <p style={{justifyContent:"center",textAlign:"center"}}>This Web Application is renderd {counting} times.</p>
   
   
   </div>
  )
}
