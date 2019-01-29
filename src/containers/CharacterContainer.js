import React, {Component, Fragment} from 'react';
import CharacterList from '../components/CharacterList.js';
import Character from '../components/Character.js';

class CharacterContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      characters: [],
      currentCharacter: null
    };

    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter});
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      const characterObjects = JSON.parse(jsonString);
      this.setState({characters: characterObjects});

    })

    request.send();
  }

  render(){
    return (
      <Fragment>
        <h2>Character Container</h2>
        <CharacterList characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected}/>
        <Character character={this.state.currentCharacter}/>
      </Fragment>
    )
  }
}


export default CharacterContainer;
