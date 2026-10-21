import { describe, expect, it } from "vitest";
import { SAMPLE_MOVES, profile } from "./profile";

describe("lp moves", () => {
  it("labels churn when removes outnumber adds", () => {
    expect(profile(SAMPLE_MOVES)).toEqual({ adds: 1, removes: 2, holds: 1, label: "churn" });
    expect(profile(["add", "add", "remove"]).label).toBe("steady");
    expect(profile([]).label).toBe("empty");
  });
});
