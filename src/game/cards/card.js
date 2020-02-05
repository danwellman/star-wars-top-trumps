import React from 'react';

import './card.scss';

export class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img alt={this.props.attributes.name} src={this.props.attributes.img} />
        <h1>{this.props.attributes.name}</h1>
        <div className="attributes">
          <dl>
            <dt>Height:</dt><dd>{this.props.attributes.height}cm</dd>
            <dt>Mass:</dt><dd>{this.props.attributes.mass}kg</dd>
            <dt>Age:</dt><dd>{this.props.attributes.age} years old</dd>
            <dt>Force sensitivity:</dt><dd>{this.props.attributes.force_sensitivity}</dd>
          </dl>
        </div>
      </div>
    );
  }
}
