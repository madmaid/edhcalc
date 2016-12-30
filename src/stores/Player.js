import { observable, computed } from 'mobx';
import GeneralDamage from './GeneralDamage';
import Counter from './Counter';

class Player {
  @observable counters = [];
  @observable generalDamages = [];

  constructor(id) {
    this.id = id;
    this.life = new Counter("Life", 40);
    this.poison = new Counter("Poison");
  }

  @computed get isDead() {
    return (
      this.life.value < 0 ||
      this.generalDamages.some(d => d.value > 21) ||
      this.poison > 10
    );
  }
  addCounter() {
    this.counters.push(new Counter());
  }
  deleteCounter(id) {
    const target = this.counters.find(c => c.id === id);
    this.counters.remove(target)
  }
  increaseGeneralDamage(fromPlayer, value) {
    this.generalDamages.find(d => d.fromPlayer === fromPlayer).increase(value)
    this.life.decrease(value)
  }
  decreaseGeneralDamage(fromPlayer, value) {
    const diff = this.generalDamages.find(d => d.fromPlayer === fromPlayer).decrease(value);
    if (diff >= 0) {
      this.life.increase(value);
    }
  }
  reset() {
    this.life.reset();
    this.poison.reset();
    this.generalDamages.forEach(d => {d.value = 0});
  }
}
export default Player;
