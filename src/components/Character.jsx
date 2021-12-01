import React, {useState} from "react";

const Character = ({character}) => {
  const [show, setShow] = useState(false)
  
  return (
  <div>
    <h2>{character.name}</h2>
    <button onClick={() => setShow(!show)} >{show ? "Show less" : "Show more"}</button> 
    {show && <h4>{character.details}</h4> }
  </div>
  )
};

export default Character;