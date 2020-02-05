import React from 'react';

import './start-panel.scss';

export class StartPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
    };
  }

  addPlayerName(e) {
    this.setState({
      playerName: e.target.value
    });
  }

  startGame(e) {
    e.preventDefault();
    this.props.startCb(this.state.playerName);
  }

  render() {
    return (
      <form className="start-form" onSubmit={(e) => this.startGame(e)}>
        <label htmlFor="playerName">Enter your name:</label>
        <input id="playerName" onInput={(e) => this.addPlayerName(e)} />
        <button>Start game!</button>
      </form>
    );
  }
}
