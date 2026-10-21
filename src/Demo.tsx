"use client";

import { SAMPLE_MOVES, profile } from "./profile";

export function Demo() {
  const view = profile(SAMPLE_MOVES);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Adds, removes, holds</h1>
      <p className="lede">The label is churn when removes outnumber adds. Holds do not count either way. This is not a fee score and not an Alcor parse.</p>
      <p>
        {SAMPLE_MOVES.join(", ")}. Adds {view.adds}, removes {view.removes}, holds {view.holds}. Label {view.label}.
      </p>
    </main>
  );
}
