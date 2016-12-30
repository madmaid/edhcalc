import { observable } from "mobx";

export default class Counter {
  @observable value = 0;

  constructor(name = "", initValue = 0){
    this.id = Math.random()

    this.name = name;
    this.initValue = initValue;

    this.value = initValue;
  }
  reset() {
    this.value = this.initValue;
  }
  increase(value = 1) {
    this.value += value;
  }
  decrease(value = 1) {
    const diff = this.value - value;
    diff < 0 ? this.value = 0 : this.value -= value;
    return diff;
  }
  changeName(name) {
    this.name = name;
  }
};

