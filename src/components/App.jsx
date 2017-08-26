import React from 'react';
import { observer } from 'mobx-react';

import Player from "./Player";

@observer
class App extends React.Component {
  render() {
    const playerNodes = this.props.playerList.players.map(player => {
      return (
        <li key={player.id} className="player-li">
          <Player player={player} delPlayer={() => {this.onDeletePlayer(player.id)}} />
        </li>
      )
    });
    return (
      <div className="app">
        <ul>
          {playerNodes}
        </ul>
        <button onClick={this.onAddPlayer}>Add a Player</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
  componentDidMount() {
    this.props.playerList.addPlayer();
  }
  onAddPlayer = () =>  {
    this.props.playerList.addPlayer();
  }
  onDeletePlayer = (id) => {
    this.props.playerList.deletePlayer(id);
  }
  reset = () => {
    this.props.playerList.reset();
  }
};
App.propTypes = {
  playerList: React.PropTypes.object
}

export default App;