import { Tomagotchi } from './../src/tomagotchi.js'

describe('Tomagotchi', () => {
  jest.useFakeTimers();
  let myTomagotchi;

  beforeEach(() => {
    myTomagotchi = new Tomagotchi(10, 10, 10, 10);
    myTomagotchi.lowerStats();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('Should correctly create a tomagotchi object for the user with parameters for hunger, sleep, and play', () => {
    expect(myTomagotchi.hunger).toBe(10);
    expect(myTomagotchi.sleep).toBe(10);
    expect(myTomagotchi.play).toBe(10);
    expect(myTomagotchi.health).toBe(10);
    expect(myTomagotchi.status).toEqual([]);
  });

  test('Should periodically lower tomagotchi hunger level', () => {
    jest.advanceTimersByTime(3001);
    expect(myTomagotchi.hunger).toBe(7);
  });

  test('Should periodically lower tomagotchi sleep level', () => {
    jest.advanceTimersByTime(3001);
    expect(myTomagotchi.sleep).toBe(7);
  });

  test('Should periodically lower tomagotchi play level', () => {
    jest.advanceTimersByTime(3001);
    expect(myTomagotchi.play).toBe(7);
  });

  test('Should feed Tomagotchi and increase hunger by 1', () => {
    myTomagotchi.feedTomagotchi();
    expect(myTomagotchi.hunger).toEqual(11);
  });

  test('Should forcibly nap the tomagotchi, resulting in 1 hour of precious relief', () => {
    myTomagotchi.napTomagotchi();
    expect(myTomagotchi.sleep).toEqual(11);
  });

  test(`Should "play" with tomagotchi by increasing it's play levels`, () => {
    myTomagotchi.playTomagotchi();
    expect(myTomagotchi.play).toEqual(11);
  });

  test('should check whether each property level is greater than 10 or 3 or less and then decrease the health property by the number of properties that are over 10/3 or less', () => {
    myTomagotchi.hunger = 12;
    myTomagotchi.play = 2;
    // myTomagotchi.tomagotchiHealthCheck();
    jest.advanceTimersByTime(1001);
    expect(myTomagotchi.status[0]).toEqual(2);
    expect(myTomagotchi.status[1]).toEqual(1);
    expect(myTomagotchi.status[2]).toEqual(0);
    expect(myTomagotchi.health).toBe(8);
  });

  test('Should increase tomagotchi health if all status modifiers are at 1/healthy', () => {
    myTomagotchi.health = 9;
    jest.advanceTimersByTime(1001);
    expect(myTomagotchi.health).toBe(10);
  })
});
