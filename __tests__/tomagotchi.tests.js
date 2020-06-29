import { Tomagotchi } from './../src/tomagotchi.js'

describe('Tomagotchi', () => {
  let myTomagotchi;

  beforeEach(() => {
    myTomagotchi = new Tomagotchi(10, 10, 10);
  });

  test('Should correclty create a tomagotchi object for the user with parameters for hunger, sleep, and play', () => {
    expect(myTomagotchi.hunger).toBe(10);
    expect(myTomagotchi.sleep).toBe(10);
    expect(myTomagotchi.play).toBe(10);
  });
})