import { add, subtract, SignalPilot } from '../index';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
  });
});

describe('SignalPilot', () => {
  it('processes signals with amplitude', () => {
    const pilot = new SignalPilot(2);
    expect(pilot.process([1,2,3])).toEqual([2,4,6]);
  });
});
