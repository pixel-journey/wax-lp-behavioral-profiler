# Sources

| Source | Use |
| --- | --- |
| [docs.alcor.exchange/api](https://docs.alcor.exchange/api) | Live history is a **different** product (prefer v3) |
| [fee lifecycle](https://github.com/pixel-journey/wax-lp-fee-lifecycle-auditor) | Collect-window labels, not this count |
| [migration tracker](https://github.com/pixel-journey/wax-alcor-pool-migration-tracker) | Moved-share bps |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later acts |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

| Call | Result |
| --- | --- |
| `profile(SAMPLE_MOVES)` | `{ adds: 1, removes: 2, holds: 1, label: "churn" }` |
| `profile(["add", "remove"])` | `steady` (equal is not churn) |
| `profile([])` | `empty` |
| unknown move | throws |

Usecases stay unsent. No Alcor/Hyperion parse.

## Portability

Count → label ports. Pool accounts (`swap.alcor` etc.) and chain ids are local.

## Suggested topics

`antelope` `education` `pixel-journey` `defi` `wax`
