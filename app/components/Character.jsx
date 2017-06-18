/* @flow */
import React from 'react';
import './assets/styles/Character.scss';

import outfits from '../../resources/outfits.json';

class Character extends React.Component {
  static defaultProps = {
    life: 1,
    outfit: '1',
    position: 'down',
    style: {},
  };

  constructor(props: any) {
    super(props);

    this.state = {
      name: props.name,
      life: props.life,
      outfit: props.outfit,
      position: props.position,
    };
  }

  state: {
    name: string,
    life: number,
    outfit: string,
    position: string,
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const outfitImage = require(`./assets/images/outfits/${outfits[this.state.outfit].image}-${this.state.position}.png`);

    return (
      <div style={this.props.style} className="character">
        <div className="characterInfo">
          <span className="name">{this.state.name}</span>
          <span className="bar">
            <span className="percentage" style={{ width: `${this.state.life * 100}%` }} />
          </span>
        </div>
        <img src={outfitImage} alt="" />
      </div>
    );
  }
}

export default Character;
