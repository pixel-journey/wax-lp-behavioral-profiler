"use client";

import { useMemo, useState } from "react";
import { LP_MYTHS } from "./myths";
import { SAMPLE_MOVES, type Move, profile } from "./profile";

const OPTIONS: Move[] = ["add", "remove", "hold"];

export function Demo() {
  const [moves, setMoves] = useState<Move[]>([...SAMPLE_MOVES]);
  const view = useMemo(() => profile(moves), [moves]);

  const push = (m: Move) => setMoves((prev) => [...prev, m]);
  const clear = () => setMoves([]);
  const reset = () => setMoves([...SAMPLE_MOVES]);

  return (
    <main className="wrap">
      <p className="kicker">Educational reference · Pixel Journey</p>
      <h1>Adds, removes, holds</h1>
      <p className="lede">
        The label is <strong>churn</strong> when removes outnumber adds. Holds do not
        count either way. This is not a fee score and not an Alcor parse.
      </p>

      <section
        style={{
          marginBottom: "1.5rem",
          padding: "1rem",
          border: "1px solid #a855f744",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "1rem", marginTop: 0 }}>Myths vs reality</h2>
        {LP_MYTHS.map((m) => (
          <div key={m.myth} style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>
            <p style={{ margin: 0 }}>
              <strong>Myth:</strong> {m.myth}
            </p>
            <p style={{ margin: "0.25rem 0 0" }}>
              <strong>Reality:</strong> {m.reality}
            </p>
          </div>
        ))}
      </section>

      <p style={{ fontFamily: "ui-monospace, monospace", fontSize: "0.9rem" }}>
        Moves: {moves.length ? moves.join(", ") : "(none)"}
      </p>
      <p>
        Adds <strong>{view.adds}</strong>, removes <strong>{view.removes}</strong>,
        holds <strong>{view.holds}</strong>. Label <strong>{view.label}</strong>.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
        {OPTIONS.map((m) => (
          <button key={m} type="button" onClick={() => push(m)}>
            + {m}
          </button>
        ))}
        <button type="button" onClick={clear}>
          Clear
        </button>
        <button type="button" onClick={reset}>
          Sample
        </button>
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.75 }}>
        See POLICY.md · unsent query shapes below in Cases.
      </p>
    </main>
  );
}
