import React from 'react';

import './turn-panel.scss';

export class TurnPanel extends React.Component {
  render() {
    return (
      <div className="turn-panel">
        <h1>Selected attribute: {this.props.selectedAttribute}</h1>
        <h2><span>{this.props.playerName}</span> vs Bot</h2>
        <div className="values">
          <span>{this.props.playerValue}</span><span>{this.props.botValue}</span>
        </div>
        <h2><span>{this.props.roundWinner.props.name}</span> wins the round!</h2>
        <button>Next round</button>
      </div>
    );
  }
}
