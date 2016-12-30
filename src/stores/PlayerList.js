import { observable, computed } from 'mobx';

import GeneralDamage from './GeneralDamage';
import Player from './Player';

class PlayerList {
  @observable players = [];
  constructor() {
    this.addedCount = 0;
  }

  addPlayer() {
    let np = new Player(this.addedCount);
    this.players.forEach(existing => {
      np.generalDamages.push(new GeneralDamage(existing.id));
    });

    this.players.push(np);
    this.players.forEach(existing => {
      existing.generalDamages.push(new GeneralDamage(np.id));
    });

    this.addedCount += 1;
  }

  deletePlayer(id) {
    // destruct around general damages
    this.players.forEach((p, i) => {
      const target = p.generalDamages.find(d => d.fromPlayer === id);
      this.players[i].generalDamages.remove(target);
    });

    this.players.remove(this.players.find(p => p.id === id));
  }
  reset() {
    this.players.forEach(p => p.reset());
  }
};
export default PlayerList;
