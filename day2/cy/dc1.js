import React from "react";

const Car = () => {
    return(
        <>
        <div style={{background:"lightblue",height:"550px",width:"380px"}}>
            <h1>Car and Location Info</h1>
            <div style={{background:"lightgrey",borderRadius:"10px",alignContent:"center",display:"flex",flexDirection:"column",
                alignItems:"center",justifyContent:"center",height:"450px",width:"320px",border:"solid grey 1px"}}>
            <p>Tesla Model S</p><br></br>
            <img src="https://imgd-ct.aeplcdn.com/1056x660/n/xsoupsa_1476828.jpg?q=80" style={{width:"200px",height:"150px"}}></img><br></br>
            <div style={{border:"solid grey 1px",width:"200px",height:"130px",background:"white",display:"flex",flexDirection:"column",
                alignItems:"center",justufyContent:"center",borderRadius:"10px"}}>
                <h2>Tesla</h2>
                <p>Palo Alto</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Car;
