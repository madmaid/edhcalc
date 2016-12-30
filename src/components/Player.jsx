import React from 'react';
import { observer } from 'mobx-react';

import Counter from './Counter';
import FlexibleCounter from './FlexibleCounter';

@observer
export default class Player extends React.Component {
  render() {
    const player = this.props.player;
    const counters = player.counters.map( cntr => {
      return (
        <li key={cntr.id}>
          <FlexibleCounter counter={cntr} />
          <button onClick={ () => {player.deleteCounter(cntr.id)} }>Delete This Counter</button>
        </li>
      )
    });
    const generalDamages = player.generalDamages.map( d => {
      return (
        <li key={d.id}>
          <div className="counter-name">
            From Player {d.fromPlayer}
          </div>
          <Counter
            counter={d}
            increase={(value=1) => {player.increaseGeneralDamage(d.fromPlayer, value)}}
            decrease={(value=1) => {player.decreaseGeneralDamage(d.fromPlayer, value)}}
          />
        </li>
      )
    });

    return (
      <div className="player">
        <div className="player-name">
          Player {player.id}
        </div>

        <div className="life">
          <div className="counter-name">
          Life
          </div>
          <Counter counter={player.life} />
        </div>

        <div className="poison">
          <div className="counter-name">
            Poison
          </div>
          <Counter counter={player.poison} />
        </div>

        <ul className="general-damage-list">
          General Damages
          {generalDamages}
        </ul>

        <ul className="counters-list">
          {counters}
        </ul>
        <button className="btn-add" type="button"
          onClick={() => {player.addCounter()}}>Add Counter
        </button>

        <button className="btn-del" type="button"
          onClick={() => {this.props.delPlayer(player.id)}}>Delete This Player
        </button>

      </div>
    )
  }
}
