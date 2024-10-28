import React, { useState } from "react";

function Transformationtoggle() {
    const[transformation,setTransformation] = useState('Kaioken');

    const toggleTransformation = () => {
        setTransformation((prevTransformation)=>
        prevTransformation ==='Kaioken'? 'SuperSaiyan' : 'SuperSaiyan'
        );
    };
    return((
        <div>
            <h1>Current Transformation: {transformation}</h1>
            <button onClick={toggleTransformation}>Toggle</button>
        </div>
    ))

}

export default Transformationtoggle;
