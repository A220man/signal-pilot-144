import { add, SignalPilot } from '../index';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('SignalPilot', () => {
  it('processes signals with amplitude', () => {
    const pilot = new SignalPilot(2);
    expect(pilot.process([1,2,3])).toEqual([2,4,6]);
  });
});