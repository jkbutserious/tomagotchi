// Business Logic
export class Tomagotchi {
  constructor(hunger, sleep, play, health) {
    this.hunger = hunger;
    this.sleep = sleep;
    this.play = play;
    this.health = health;
    this.status = []
  };

  lowerStats() {
    setInterval(() => {
      this.hunger--;
      this.sleep--;
      this.play--;
      this.tomagotchiHealthCheck();
    }, 1000);
  }
  
  feedTomagotchi() {
    this.hunger += 1;
    this.tomagotchiHealthCheck();
  }
  
  napTomagotchi() {
    this.sleep += 1;
    this.tomagotchiHealthCheck();
  }

  playTomagotchi() {
    this.play += 1;
    this.tomagotchiHealthCheck();
  }

  tomagotchiHealthCheck() {
    this.status = [];
    let tomagotchiStats = [this.hunger, this.sleep, this.play];
    tomagotchiStats.forEach(element => {
      if (element > 10) {
        this.status.push(true);
      } else {
        this.status.push(false);      
      };
    });
  };
}