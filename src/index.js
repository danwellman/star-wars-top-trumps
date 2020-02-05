import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { Board } from './game/board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(
        responseJson => {
          this.setState({
            isLoaded: true,
            data: responseJson.results
          });

          this.enrichData();
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      );
  }

  enrichData() {
    const forceSensitivityMappings = {
      'Luke': 10,
      'Darth': 9,
      'Obi-Wan': 7,
      'Leia': 5,
      'Biggs': 1
    };

    this.state.data.forEach((character, index) => {
      const forceSensitivity = forceSensitivityMappings[character.name.split(' ')[0]];
      character.img = `/img/${index + 1}.jpg`;
      character.age = (parseInt(character.birth_year))
        ? `${parseInt(character.birth_year)}`
        : 'unknown';
      character.force_sensitivity = (forceSensitivity)
        ? forceSensitivity
        : 0;
    });
  }

  render() {
    return (
      <div className="game">
        <h1>Star Wars Top Trumps</h1>
        <Board data={this.state.data} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
