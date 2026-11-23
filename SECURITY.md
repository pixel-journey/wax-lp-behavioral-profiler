# Security — LP move counts

## Closed in tests

| Issue | Behavior |
| --- | --- |
| More removes than adds | `churn` |
| Equal add/remove | `steady` |
| Empty list | `empty` |
| Unknown move | throws |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Live Alcor/Hyperion history | Not read |
| Fee / APY / risk score | Not derived from three counts |
| Messaging LPs | Soft teaching label only |

## Attack angles

1. Treating `churn` as a ban or compliance finding.  
2. Claiming a transfer on `swap.alcor` is automatically add/remove.  
3. Inventing fee or APR from the label.  
4. Fetching pool history inside unit tests.

## Honesty limits

Pure counts only. Prefer Alcor **v3** if a host later reads live data outside this package.

| Sibling | Distinction |
| --- | --- |
| [fee lifecycle](https://github.com/pixel-journey/wax-lp-fee-lifecycle-auditor) | compound/extract/idle after collect |
| [migration tracker](https://github.com/pixel-journey/wax-alcor-pool-migration-tracker) | moved-share bps |

[docs.alcor.exchange/api](https://docs.alcor.exchange/api)
