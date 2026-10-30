# Policy — LP behavioral profiler

**Trust label:** `educational-reference`  
**Updated:** 2026-10-31

## In scope

- Pure `profile(moves)` → adds / removes / holds / label
- Label: `empty` | `steady` | `churn` (removes > adds)
- Unsent HTTP shapes in `usecases`

## Out of scope

- Live Alcor fee/APY product
- Silent network calls from the demo page
- Invented signed transactions

## Rules

- Unit tests never require network
- Demo stays offline by default
