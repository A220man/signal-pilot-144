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

  it('retains a bounded history of processed signals', () => {
    const pilot = new SignalPilot(2, 3);
    expect(pilot.process([1,2,3,4])).toEqual([2,4,6,8]);
    expect(pilot.history).toEqual([4,6,8]);
    pilot.process([5]);
    expect(pilot.history).toEqual([6,8,10]);

  it("resets history buffer", () => {
    const pilot = new SignalPilot(2, 3);
    pilot.process([1,2,3,4]);
    expect(pilot.history).toEqual([4,6,8]);
    pilot.reset();
    expect(pilot.history).toEqual([]);
    pilot.process([5]);
    expect(pilot.history).toEqual([10]);
  });
  });
});