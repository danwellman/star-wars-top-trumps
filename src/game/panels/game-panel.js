import React from 'react';

import './game-panel.scss';
import { PlayerTurnPanel } from './player-turn-panel';
import { BotTurnPanel } from './bot-turn-panel';
import { TurnPanel } from './turn-panel';

export class GamePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: this.props.players[0],
      inProgress: false,
      roundWinner: null,
      selectedAttribute: null,
      playerValue: null,
      botValue: null,
    };
  }

  getAttributeValue(player, attr) {
    return parseInt(player.props.hand[0].props.attributes[attr]);
  }

  takeTurn(selectedAttribute) {
    const key = selectedAttribute.toLowerCase().replace(' ', '_');
    const playerValue = this.getAttributeValue(this.props.players[0], key);
    const botValue = this.getAttributeValue(this.props.players[1], key);

    this.setState({
      selectedAttribute,
      inProgress: true,
      playerValue: playerValue,
      botValue: botValue,
      roundWinner: (playerValue >= botValue)
        ? this.props.players[0]
        : this.props.players[1]
    });
  }

  nextRound() {
    if (this.state.roundWinner.props.name !== this.state.turn.props.name) {
      this.setState({
        turn: (this.state.turn.props.name === this.props.players[0])
          ? this.props.players[1]
          : this.props.players[0]
      });
    }
  }

  render() {
    return (
      <div className="game-panel">
        {this.props.players[0]}
        {
          (this.state.inProgress)
            ? <TurnPanel
                playerName={this.state.turn.props.name}
                selectedAttribute={this.state.selectedAttribute}
                playerValue={this.state.playerValue}
                botValue={this.state.botValue}
                roundWinner={this.state.roundWinner}
                nextRoundCb={() => this.nextRound()}
              />
            : (this.state.turn.props.name === 'Bot')
              ? <BotTurnPanel />
              : <PlayerTurnPanel
                  playerName={this.state.turn.props.name}
                  attributes={['Height', 'Mass', 'Age', 'Force sensitivity']}
                  takeTurnCb={(selectedAttribute) => this.takeTurn(selectedAttribute)}
                />
        }
        {this.props.players[1]}
      </div>
    );
  }
}

