# Product development plan

Each round completes one feature or repair. Future items are planned, not implemented claims.

## Current round

feat-signal-history

## Roadmap

### feat-add-signal-pilot — Add add function and SignalPilot class with tests

Status: done

Acceptance:
- Exports add function and SignalPilot class
- Tests verify add(2,3)=5 and SignalPilot processes signals correctly

Implementation: `src/index.ts`

Tests: `src/__tests__/index.test.ts`

### feat-signal-history — SignalPilot bounded history buffer

Status: done

Acceptance:
- SignalPilot accepts optional maxBuffer and retains the most recent processed values
- process() output is unchanged; history exposes a bounded copy of processed values

Implementation: `src/index.ts`

Tests: `src/__tests__/index.test.ts`

