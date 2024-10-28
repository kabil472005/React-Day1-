import React from "react";

var Colour = () => {
  return(
    <>
          <h1 style={{color:"green"}}>Inline Style in JSX Example.</h1>
      <div style={{background:"lightblue",padding: "10px",border:"1px solid blue",borderRadius:"5px"}}>
          <p style={{color:"darkblue",fontSize: "16px"}}>This is a paragraph with inline styles applied.</p>
      </div>
    </>
  )
}

export default Colour;
