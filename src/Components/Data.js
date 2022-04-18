import React, { useState } from "react";


function Data({firstName, lastName, email, submitted}) {
    const [disable,setDisable] = useState(false)

  return (
    <div>
   { disable ? "":<div><h2>{firstName} {lastName}</h2>
        <h2>{email}</h2></div>}
      <button onClick={()=>setDisable(true)}>Close
</button>
</div> 
      
  );
}
export default Data;
