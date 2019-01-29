import React from 'react';

const CharacterList = (props) => {
  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>
    {character.name}</option>
  })

  function handleChange(event) {
    props.onCharacterSelected(event.target.value);
  }
  return (
    <select id="character_selector"
    onChange={handleChange}
    defaultValue="default">
    <option disabled value="default">Choose a Character</option>
    {options}</select>
  )

}

export default CharacterList;
