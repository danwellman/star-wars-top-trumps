import React from 'react';

import './card-shield.scss';

export class CardShield extends React.Component {
  render() {
    return (this.props.showShield)
      ? <div className="active-card card-shield"><div className="card"><span>?</span></div></div>
      : <div className="active-card">{this.props.activeCard}</div>;
  }
}
