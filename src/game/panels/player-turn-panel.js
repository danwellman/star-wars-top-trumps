import React from 'react';

import './player-turn-panel.scss';

export class PlayerTurnPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAttribute: 'height'
    };
  }

  handleChange(e) {
    this.setState({
      selectedAttribute: e.target.value
    });
  }

  takeTurn() {
    this.props.takeTurnCb(this.state.selectedAttribute);
  }

  render() {
    return (
      <div className="player-turn-panel">
        <h3>Take your turn {this.props.playerName}</h3>
        <label htmlFor="attribute">Attribute to play:</label>
        <select id="attribute" onChange={(e) => this.handleChange(e)}>
          {this.props.attributes.map((attribute, index) => <option key={index} value={attribute}>{attribute}</option>)}
        </select>
        <button onClick={() => this.takeTurn()}>Play</button>
      </div>
    );
  }
}