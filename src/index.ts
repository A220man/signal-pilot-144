export function add(a: number, b: number): number { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
export class SignalPilot {
  private readonly buffer: number[] = [];
  constructor(private readonly amplitude: number, private readonly maxBuffer: number = 0) {}
  process(signal: number[]): number[] {
    const out = signal.map(v => this.amplitude * v);
    if (this.maxBuffer > 0) {
      for (const v of out) {
        this.buffer.push(v);
        if (this.buffer.length > this.maxBuffer) this.buffer.shift();
      }
    }
    return out;
  }
  get history(): number[] { return [...this.buffer]; }
}