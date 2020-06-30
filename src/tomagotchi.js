// Business Logic
export class Tomagotchi {
  constructor(hunger, sleep, play, health) {
    this.hunger = hunger;
    this.sleep = sleep;
    this.play = play;
    this.health = health;
    this.status = [];
    this.isDead = false;
  };

  lowerStats() {
    setInterval(() => {
      this.isDeadOrNot;
      this.hunger--;
      this.sleep--;
      this.play--;
      this.tomagotchiHealthCheck();
      this.checkHealthStatus();
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

  // 0 = "deficient", 1 = "healthy", 2 = "in excess"
  
  tomagotchiHealthCheck() {
    this.status = [];
    let tomagotchiStats = [this.hunger, this.sleep, this.play];
    this.isDeadOrNot();
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

  checkHealthStatus() {
    this.status.forEach(element => {
      if (element === 2 || element === 0) {
        this.health -= 1;
      }
    });
    if (this.status[0] === 1 && this.status[1] === 1 && this.status[2] === 1) {
      this.health += 1;
    }
  }

  isDeadOrNot() {
    if (this.health === 0) {
      this.dead = false;
      this.play = 0;
      this.hunger = 0;
      this.sleep = 0;
    }
  }
}