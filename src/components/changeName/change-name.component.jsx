import React from "react";


export const ChangeName=({changingName, numOfMonster})=>(
    <div>
         <input type={'text'}
    className="text"
    onChange= {changingName}
    placeholder={"Change monster's number "+ numOfMonster +" name"}
    size={25}
    />
    </div>
   
    

)

