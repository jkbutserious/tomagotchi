import { Tomagotchi } from './../src/tomagotchi.js'

describe('Tomagotchi', () => {
  jest.useFakeTimers();
  let myTomagotchi;

  beforeEach(() => {
    myTomagotchi = new Tomagotchi(10, 10, 10);
    myTomagotchi.lowerStats();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('Should correctly create a tomagotchi object for the user with parameters for hunger, sleep, and play', () => {
    expect(myTomagotchi.hunger).toBe(10);
    expect(myTomagotchi.sleep).toBe(10);
    expect(myTomagotchi.play).toBe(10);
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
});
