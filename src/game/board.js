import React from 'react';
import { arrayShuffle } from '@adriantombu/array-shuffle';

import './board.scss';
import { ShowPanel } from './panels/show-panel';
import { Player } from './player';
import { Card } from './cards/card';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isStarted: false,
    };
  }

  startGame(name) {
    const cards = arrayShuffle(this.createCards(this.props));

    this.setState({
      isStarted: true,
      players: [
        this.createPlayer(cards.slice(0, 5), name),
        this.createPlayer(cards.slice(5)),
      ]
    });
  }

  createCards(props) {
    return props.data.map(dataItem => <Card attributes={dataItem} />);
  }

  createPlayer(cards, name = 'Bot') {
    return <Player name={name} hand={cards} shieldCard={(name === 'Bot') ? true : false} />;
  }

  render() {
    return (
      <div className="board">
        <ShowPanel
          isStarted={this.state.isStarted}
          startCb={(playerName) => this.startGame(playerName)}
          players={this.state.players}
        />
      </div>
    );
  }
}
