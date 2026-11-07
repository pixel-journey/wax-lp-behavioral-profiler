# Count add / remove / hold moves into a steady or churn label

> **Trust:** `educational-reference`  
> **Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** Teach a pure count of caller-supplied liquidity moves that labels the list `empty`, `steady`, or `churn` when removes outnumber adds — without claiming a live Alcor profile.

**Real code:** `npm test`. **Does not** parse history, compute fees, or broadcast.

The course is [EDUCATION.md](EDUCATION.md) (beginner, intermediate, masterclass).

## What is true (executed)

| Rule | Result |
| --- | --- |
| `profile(SAMPLE_MOVES)` | `{ adds: 1, removes: 2, holds: 1, label: "churn" }` |
| `profile(["add", "add", "remove"])` | label `steady` |
| `profile([])` | label `empty` |
| unknown move | throws |
| usecases | requests stay unsent |

## What is in the repo

| Piece | Role |
| --- | --- |
| `src/profile.ts` | `profile`, `SAMPLE_MOVES` |
| `src/profile.test.ts` | the executed counts |
| `src/usecases.ts` | unsent Alcor and history sketches |
| `src/Demo.tsx` | interactive count preview |
| Docs | EDUCATION · POLICY · SECURITY · ARCHITECTURE · VERIFICATION-LOG |

## Run

```bash
npm install
npm test
npm run dev
```

## Best practice and the opposite

**Do** keep the classifier pure so tests never need a node.  
**Do** treat the label as a teaching comparison, not a judgment of an account.  
**Do** re-derive moves from real history only in a host that you control and audit.

**Do not** call Alcor or Hyperion from the unit tests.  
**Do not** invent a fee, APY, or risk score from these three counts.  
**Do not** treat a transfer on `swap.alcor` as automatically an add or a remove.

## Related

- `wax-lp-fee-lifecycle-auditor`
- `wax-alcor-pool-migration-tracker`

MIT — Pixel Journey
