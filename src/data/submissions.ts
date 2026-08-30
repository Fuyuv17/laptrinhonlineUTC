import type { Submission, UserProfile } from "../lib/types";

export const currentUser: UserProfile = {
  handle: "hieu231230774",
  fullName: "Nguyễn Minh Hiếu",
  rating: 1874,
  maxRating: 1962,
  rank: "Candidate Master",
  solved: 138,
  submissions: 512,
  joinDate: "2024-03-02",
  school: "Đại học Giao thông Vận tải",
};

export const submissions: Submission[] = [
  { id: "s1", problemCode: "SQRT118", problemTitle: "LCA và truy vấn khoảng cách", user: "hieu231230774", language: "C++20", verdict: "AC", score: 100, runtimeMs: 214, memoryKb: 18432, submittedAt: "2026-08-12T13:42:00+07:00" },
  { id: "s2", problemCode: "SQRT129", problemTitle: "Xây dựng lại xâu", user: "hieu231230774", language: "C++20", verdict: "WA", score: 40, runtimeMs: 88, memoryKb: 9216, submittedAt: "2026-08-12T12:10:00+07:00" },
  { id: "s3", problemCode: "SQRT027", problemTitle: "Cây khung nhỏ nhất", user: "vhthanh", language: "Python 3", verdict: "TLE", score: 60, runtimeMs: 2000, memoryKb: 30720, submittedAt: "2026-08-12T11:58:00+07:00" },
  { id: "s4", problemCode: "SQRT014", problemTitle: "Dãy con tăng dài nhất", user: "khuedol", language: "C++20", verdict: "AC", score: 100, runtimeMs: 46, memoryKb: 6144, submittedAt: "2026-08-12T11:40:00+07:00" },
  { id: "s5", problemCode: "SQRT088", problemTitle: "Đường đi ngắn nhất K cạnh", user: "minh.tran", language: "Java 21", verdict: "RE", score: 0, runtimeMs: 120, memoryKb: 40960, submittedAt: "2026-08-12T11:22:00+07:00" },
  { id: "s6", problemCode: "SQRT001", problemTitle: "Tổng hai số", user: "an_nguyen", language: "Python 3", verdict: "AC", score: 100, runtimeMs: 32, memoryKb: 8192, submittedAt: "2026-08-12T10:59:00+07:00" },
  { id: "s7", problemCode: "SQRT071", problemTitle: "Xâu con chung dài nhất", user: "hieu231230774", language: "C++20", verdict: "AC", score: 100, runtimeMs: 178, memoryKb: 14336, submittedAt: "2026-08-12T10:31:00+07:00" },
  { id: "s8", problemCode: "SQRT033", problemTitle: "Truy vấn đoạn trên cây", user: "hoangpham", language: "C++17", verdict: "MLE", score: 20, runtimeMs: 900, memoryKb: 262144, submittedAt: "2026-08-12T10:05:00+07:00" },
  { id: "s9", problemCode: "SQRT052", problemTitle: "Số nguyên tố trong khoảng", user: "linh_dang", language: "C++20", verdict: "CE", score: 0, runtimeMs: 0, memoryKb: 0, submittedAt: "2026-08-12T09:48:00+07:00" },
  { id: "s10", problemCode: "SQRT099", problemTitle: "Tổng con trong mảng động", user: "hieu231230774", language: "C++20", verdict: "PENDING", score: 0, runtimeMs: 0, memoryKb: 0, submittedAt: "2026-08-12T09:44:00+07:00" },
];
