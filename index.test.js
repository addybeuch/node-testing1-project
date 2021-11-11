const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "foo", bar: "bar", baz: "baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    expect(input).toEqual(expected);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const beanza = [
      { integer: 1 },
      { integer: 2 },
      { integer: 3 },
      { integer: 4 },
      { integer: 5 },
    ];
    const expected = utils.findLargestInteger(beanza);
    expect(expected).toEqual(5);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const returnedValue = counter.countDown();
    expect(returnedValue).toEqual(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const beenza = counter.countDown();
    expect(beenza).toEqual(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const beenza = counter.countDown();
    expect(beenza).toEqual(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const summer = seasons.next();
    expect(summer).toEqual("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const fall = seasons.next();
    expect(fall).toEqual("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    const winter = seasons.next();
    expect(winter).toEqual("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    const spring = seasons.next();
    expect(spring).toEqual("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const summer = seasons.next();
    expect(summer).toEqual("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let spring;
    for (let i = 0; i < 40; i++) {
      spring = seasons.next();
    }
    expect(spring).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    const input = 50;
    focus.drive(input);
    expect(focus.odometer).toEqual(input);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(300);
    expect(focus.tank).toEqual(10);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(600);
    focus.refuel(20);
    focus.drive(600);
    expect(focus.odometer).toEqual(1200);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    focus.refuel(25);
    expect(focus.tank).toEqual(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const benza = await utils.isEvenNumberAsync(2);
    expect(benza).toBeTruthy();
  });
  test("[20] resolves false if passed an odd number", async () => {
    const benza = await utils.isEvenNumberAsync(1);
    expect(benza).toBeFalsy();
  });
});
