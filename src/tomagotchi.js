// Business Logic
export class Tomagotchi {
  constructor(hunger, sleep, play, health) {
    this.hunger = hunger;
    this.sleep = sleep;
    this.play = play;
    this.health = health;
    this.status = [];
  };

  lowerStats() {
    setInterval(() => {
      this.hunger--;
      this.sleep--;
      this.play--;
      this.tomagotchiHealthCheck();
      this.checkTrueFalse();
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

  // 0 = "starving" etc., 1 = "healthy", 2 = "over done"
  
  tomagotchiHealthCheck() {
    this.status = [];
    let tomagotchiStats = [this.hunger, this.sleep, this.play];
    tomagotchiStats.forEach(element => {
      if (element > 10) {
        this.status.push(2);
      } else if (element <= 3) {
        this.status.push(0);      
      } else {
        this.status.push(1);
      }
    });
    
  };

  checkTrueFalse() {
    this.status.forEach(element => {
      if (element === 2 || element === 0) {
        this.health -= 1;
      }
    });
  }
}