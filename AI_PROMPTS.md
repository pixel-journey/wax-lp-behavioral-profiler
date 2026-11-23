# AI handoff — LP behavioral profiler

## Non-negotiables

1. Pure count of caller-supplied moves → label `empty`, `steady`, or `churn`.
2. Locked sample: `profile(SAMPLE_MOVES)` → `{ adds: 1, removes: 2, holds: 1, label: "churn" }`.
3. Equal adds and removes → **steady** (not churn).
4. Empty list → **empty**. Unknown move → throws.
5. **No** Alcor/Hyperion parse. Usecases stay unsent.
6. Label is teaching comparison, not a judgment of an account.
7. Do not invent fee, APY, or risk from three counts.

## Prompt seeds

- "profile([\"add\", \"remove\"]) — label?"
- "Why is equal add/remove steady not churn?"
- "Refuse treating a swap.alcor transfer as automatic add/remove."
- "Contrast with fee-lifecycle collect labels (different product)."

## Do not

- Call Alcor from unit tests.
- Message LPs based on the label alone.
- Merge with migration-tracker moved-share bps.
