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
})