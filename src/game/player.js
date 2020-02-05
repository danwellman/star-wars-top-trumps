import React from 'react';

import './player.scss';
import { HandCard } from './cards/hand-card';
import { CardShield } from './cards/card-shield';

export class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: this.props.hand[0],
      hand: this.props.hand.slice(1),
      shieldCard: this.props.shieldCard,
    };
  }

  render() {
    return (
      <div className="player">
        <h1>{this.props.name}</h1>

        <CardShield showShield={this.state.shieldCard} activeCard={this.state.activeCard}></CardShield>

        <h2>Hand</h2>
        <div className="hand">
          {this.state.hand.map((card, index) => <React.Fragment key={index}>{<HandCard />}</React.Fragment>)}
        </div>
      </div>
    );
  }
}
