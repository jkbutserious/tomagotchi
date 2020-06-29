// Business Logic
export class Tomagotchi {
  constructor(hunger, sleep, play) {
    this.hunger = hunger;
    this.sleep = sleep;
    this.play = play;
  };

  lowerHunger() {
    setInterval(() => {
      this.hunger++;
    }, 1000);
  }

}