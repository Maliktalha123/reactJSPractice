import React, { useState } from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/MyHeader";

function App() {
  const [bulbOn, setBullbOn] = useState(false);
 
  const [homePage, setHomePage] = useState();
 
  let arr =["Muhammad Talha","Muhammad Aadil","Janzaib","Adeel Jutt","MalikTalha"]; 
  
  
  return (
    <div>

      { <Header />}
    
   { <AppRouter /> }

      {bulbOn === true ? (
        <img src="/bulbOn.jpg" border="2px solid black" />
      ) : (
        <img src="/bulbOff.jpg" border="2px solid black"></img>
      )}

      <br />

      <button
        style={{ color: "blue", backgroundColor: "black", width: "75px" }}
        onClick={() => setBullbOn(true)}
      >
        On
      </button>

      <button
        style={{ color: "blue", backgroundColor: "black", width: "75px" }}
        onClick={() => setBullbOn(false)}
      >
        Off
      </button> 

{homePage === true ?<> <h1>Welcome User</h1><h1>Dashboard</h1></> : <h1>Home Page</h1>}

<button onClick={()=>setHomePage(true)}>Log In</button>
<button onClick={()=>setHomePage(false)}>Home Page</button> 

{
 arr.map((element,index)=>{ 

   return(
<>
     <ul>
       <li>{element}</li>
     </ul>
     </>
   )
 })
  }






    </div>
  );
}

export default App;
