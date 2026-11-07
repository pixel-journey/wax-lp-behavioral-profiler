# Education — count the moves you already listed

> **Rung:** `npm test` passes. The lab counts `add` / `remove` / `hold` events the caller supplies. It does not parse Alcor history or compute fees.  
> **The test is the rule.**

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Call `profile(["add", "hold", "remove", "remove"])` and get label `churn` |
| Intermediate | Explain why equal adds and removes is `steady`, and why the sample is not a live feed |
| Masterclass | Say why a count of caller-supplied labels is not a behavior score, and what is missing |

---

## Beginner — one scene

```ts
profile(["add", "hold", "remove", "remove"])
// { adds: 1, removes: 2, holds: 1, label: "churn" }

profile([])
// { adds: 0, removes: 0, holds: 0, label: "empty" }

profile(["add", "add", "remove"])
// label: "steady"
```

| Moves | Label |
| --- | --- |
| empty list | `empty` |
| removes > adds | `churn` |
| removes ≤ adds (and non-empty) | `steady` |
| unknown string | throws |

Holds are counted but do not affect the label.

### Words

| Word | Meaning here |
| --- | --- |
| Move | One of `"add"`, `"remove"`, `"hold"` that the caller already decided |
| Churn | Removes strictly greater than adds |
| Steady | Non-empty and removes ≤ adds |
| Sample | The fixed `SAMPLE_MOVES` array used by the demo |

### Predict, then run

```bash
npm test
```

1. `profile(SAMPLE_MOVES).label` is `"churn"`.
2. `profile(["add", "add", "remove"]).label` is `"steady"`.
3. `profile([]).label` is `"empty"`.

---

## Intermediate — the label is only a comparison of two counts

The function walks the array once, increments three counters, then applies the three-way rule. No timestamps, no amounts, no pool identifiers are read.

The usecases pair the sample profile with an unsent Alcor markets GET and an unsent history query for `swap.alcor` transfers. Neither response is fetched or classified. A transfer is not automatically an add or a remove.

### Attack → test

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Parse live Alcor history into moves | Network in a unit test | caller must supply the array | profile.test.ts |
| Treat equal adds/removes as churn | Wrong threshold | only `removes > adds` is churn | steady case |
| Invent a fee or APY score | Overclaim | label is only empty / steady / churn | no fee fields |
| Call the markets endpoint from the test | Flaky | request stays `executed: false` | usecases.test.ts |

---

## Masterclass — a count is not a profile of a person

Liquidity providers can add and remove many times for reasons this function never sees (rebalancing, fee collection, migration, testing). The label is a pure comparison of the numbers you handed it.

What is still not here:

- Any Alcor or Hyperion parse.
- Amounts, timestamps, or pool IDs.
- A claim that `churn` means the account is malicious or unprofitable.
- Persistence or a leaderboard.

### Exercise

1. What label does `profile(["remove", "remove", "add"])` return? (`churn`. Tested via the same rule.)
2. Why does a hold not change the label? (Only adds and removes are compared.)
3. Is the sample Alcor markets response fetched? (No. The request is unsent.)

---

## What this course will not teach

- A live LP analytics dashboard
- How to turn a transfer into an add or remove
- A risk score or fee efficiency grade
