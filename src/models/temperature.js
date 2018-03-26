import {observable, computed}  from 'mobx';

export default new class Temperature {
  @observable char = "C";

  @observable temperatureCelcius = 20;

  @computed get temperatureKelvin() {
    return this.temperatureCelcius * (9/5) + 32;
  }

  @computed get temperatureFahrenheit() {
    return this.temperatureCelcius + 273.15;
  }

  @computed get temperature() {
    switch(this.char) {
      case "C": return this.temperatureCelcius;
      case "K": return this.temperatureKelvin;
      case "F": return this.temperatureFahrenheit;
    }
  }

  setChar = ({target}) => {
    console.log(target);
    this.char = target.value;
  }
}
