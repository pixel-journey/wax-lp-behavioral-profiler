/**
 * Count add, remove, and hold events the caller listed.
 * Not a fee score and not an Alcor history parse.
 */

export type Move = "add" | "remove" | "hold";

export type Profile = { adds: number; removes: number; holds: number; label: "empty" | "steady" | "churn" };

export function profile(moves: readonly Move[]): Profile {
  let adds = 0;
  let removes = 0;
  let holds = 0;
  for (const move of moves) {
    if (move === "add") adds += 1;
    else if (move === "remove") removes += 1;
    else if (move === "hold") holds += 1;
    else throw new Error("move must be add, remove, or hold");
  }
  const label = moves.length === 0 ? "empty" : removes > adds ? "churn" : "steady";
  return { adds, removes, holds, label };
}

export const SAMPLE_MOVES: Move[] = ["add", "hold", "remove", "remove"];
