import { HISTORY_ORIGIN, historyActions } from "./api";
import { SAMPLE_MOVES, profile } from "./profile";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const view = profile(SAMPLE_MOVES);

export const USE_CASES: UseCase[] = [
  {
    title: "The market list is not a behavior label",
    detail: `Fixture moves label ${view.label} (${view.adds} adds, ${view.removes} removes, ${view.holds} holds). GET /api/markets is not parsed.`,
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
  {
    title: "Transfers on the swap account are not adds and removes",
    detail: "A remove is an event you pass in. This history query is not classified. No liquidity action is built.",
    request: historyActions(HISTORY_ORIGIN, "swap.alcor", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (view.label !== "churn") throw new Error(view.label);
}
