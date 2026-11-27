# signal-pilot-144 — Ryan Vo

Current version: `1.3.0`.

> Work in progress. This checkpoint may be incomplete or fail tests. See PLAN.md and STATUS.md before use.

## Usage

```ts
import { add, subtract, SignalPilot } from './src';

add(2, 3); // 5
subtract(5, 2); // 3

const pilot = new SignalPilot(2); // amplitude 2
pilot.process([1, 2, 3]); // [2, 4, 6]

const buffered = new SignalPilot(2, 3); // amplitude 2, keep last 3 outputs
buffered.process([1, 2, 3, 4]); // [2, 4, 6, 8]
buffered.history; // [4, 6, 8]
```

## Development

- `npm install` — install dependencies
- `npm test` — run Jest tests
- `npm run build` — type-check and compile with `tsc`

Maintainer: Ryan Vo <ryandtvo@gmail.com>
