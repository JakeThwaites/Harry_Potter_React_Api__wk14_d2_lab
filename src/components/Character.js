import React from 'react';

const Character = (props) => {
  if (!props.character)
  return null;
  return(
    <>
    <h3>{props.character.name}</h3>
    <img className="image-character" src={props.character.image}/>
    <p>House: {props.character.house} </p>
    <p>D.o.B: {props.character.dateOfBirth} </p>
    <p>Actor {props.character.actor}</p>

    </>
  )
}
 export default Character;
