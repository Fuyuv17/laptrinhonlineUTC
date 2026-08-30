import type { Problem } from "../lib/types";

export const problems: Problem[] = [
  { id: "1", code: "SQRT001", title: "Tổng hai số", difficulty: "Easy", points: 100, acRate: 92, tags: ["math", "implementation"], solvedByMe: true },
  { id: "2", code: "SQRT014", title: "Dãy con tăng dài nhất", difficulty: "Medium", points: 300, acRate: 61, tags: ["dp", "binary-search"], solvedByMe: true },
  { id: "3", code: "SQRT027", title: "Cây khung nhỏ nhất", difficulty: "Medium", points: 350, acRate: 54, tags: ["graph", "mst", "dsu"], attemptedByMe: true },
  { id: "4", code: "SQRT033", title: "Truy vấn đoạn trên cây", difficulty: "Hard", points: 500, acRate: 28, tags: ["tree", "segment-tree", "dfs"] },
  { id: "5", code: "SQRT041", title: "Trò chơi Nim mở rộng", difficulty: "Hard", points: 550, acRate: 24, tags: ["game-theory", "bitmask"] },
  { id: "6", code: "SQRT052", title: "Số nguyên tố trong khoảng", difficulty: "Easy", points: 150, acRate: 88, tags: ["math", "sieve"], solvedByMe: true },
  { id: "7", code: "SQRT063", title: "Ghép cặp cực đại", difficulty: "Hard", points: 600, acRate: 19, tags: ["flow", "bipartite-matching"] },
  { id: "8", code: "SQRT071", title: "Xâu con chung dài nhất", difficulty: "Medium", points: 320, acRate: 58, tags: ["dp", "string"], attemptedByMe: true },
  { id: "9", code: "SQRT088", title: "Đường đi ngắn nhất K cạnh", difficulty: "Medium", points: 300, acRate: 47, tags: ["graph", "shortest-path", "dp"] },
  { id: "10", code: "SQRT099", title: "Tổng con trong mảng động", difficulty: "Easy", points: 200, acRate: 79, tags: ["fenwick", "implementation"] },
  { id: "11", code: "SQRT104", title: "Chia kẹo Euler", difficulty: "Insane", points: 700, acRate: 8, tags: ["number-theory", "combinatorics"] },
  { id: "12", code: "SQRT118", title: "LCA và truy vấn khoảng cách", difficulty: "Medium", points: 350, acRate: 51, tags: ["tree", "lca", "binary-lifting"] },
  { id: "13", code: "SQRT129", title: "Xây dựng lại xâu", difficulty: "Hard", points: 520, acRate: 22, tags: ["string", "greedy"] },
  { id: "14", code: "SQRT137", title: "Số cách tô màu đồ thị", difficulty: "Insane", points: 750, acRate: 6, tags: ["dp", "bitmask", "graph"] },
  { id: "15", code: "SQRT145", title: "Truy vấn offline trên cây", difficulty: "Hard", points: 580, acRate: 17, tags: ["tree", "offline", "dsu"] },
];

export const tagList = Array.from(new Set(problems.flatMap((p) => p.tags))).sort();
