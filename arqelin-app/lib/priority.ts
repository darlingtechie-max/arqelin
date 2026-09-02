export const PRIORITIES = [
  {
    value: "Low",
    color: "#27AE60",
    emoji: "🟢",
    rank: 1,
  },
  {
    value: "Medium",
    color: "#F2994A",
    emoji: "🟠",
    rank: 2,
  },
  {
    value: "High",
    color: "#D9534F",
    emoji: "🔴",
    rank: 3,
  },
  {
    value: "Urgent",
    color: "#9B51E0",
    emoji: "🟣",
    rank: 4,
  },
] as const;

export type Priority =
  (typeof PRIORITIES)[number]["value"];

export function getPriority(priority: Priority) {
  return PRIORITIES.find(
    (item) => item.value === priority
  );
}

export function sortByPriorityDesc<
  T extends { priority: Priority }
>(items: T[]) {
  return [...items].sort((a, b) => {
    const aPriority = getPriority(a.priority);
    const bPriority = getPriority(b.priority);

    return (
      (bPriority?.rank ?? 0) -
      (aPriority?.rank ?? 0)
    );
  });
}