// Business Logic
export class Tomagotchi {
  constructor(hunger, sleep, play) {
    this.hunger = hunger;
    this.sleep = sleep;
    this.play = play;
  };

  lowerStats() {
    setInterval(() => {
      this.hunger--;
      this.sleep--;
      this.play--;
    }, 1000);
  }
  
  feedTomagotchi() {
    this.hunger += 1;
  }
  
  napTomagotchi() {
    this.sleep += 1;
  }

  playTomagotchi() {
    this.play += 1;
  }
}