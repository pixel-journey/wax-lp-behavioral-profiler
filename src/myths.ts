export const LP_MYTHS = [
  {
    myth: "This scores LP fees or APY",
    reality:
      "It only counts caller-supplied add / remove / hold moves. No fee math.",
  },
  {
    myth: "This parses Alcor live history",
    reality:
      "Demo is offline. Unsent request shapes live in usecases — executed is false.",
  },
  {
    myth: "Churn label means the LP is malicious",
    reality:
      "Churn means removes > adds in the listed moves. Context and pool health matter separately.",
  },
] as const;
