import { observable } from 'mobx';
import Counter from './Counter'

class GeneralDamage extends Counter{
  constructor(playerId){
    super(name="from PlayerID:" + playerId.toString());
    this.fromPlayer = playerId;
  }
};

export default GeneralDamage;
