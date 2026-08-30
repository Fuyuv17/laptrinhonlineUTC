import { problems } from "./problems";

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface ProblemDetail {
  statement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  examples: ProblemExample[];
  timeLimitMs: number;
  memoryLimitMb: number;
}

const details: Record<string, ProblemDetail> = {
  SQRT001: {
    statement:
      "Cho hai số nguyên a và b. Hãy tính tổng của chúng.",
    inputFormat: "Một dòng duy nhất chứa hai số nguyên a và b, cách nhau bởi dấu cách.",
    outputFormat: "In ra một số nguyên duy nhất là a + b.",
    constraints: "-10^9 ≤ a, b ≤ 10^9",
    examples: [
      { input: "3 5", output: "8" },
      { input: "-2 7", output: "5" },
    ],
    timeLimitMs: 1000,
    memoryLimitMb: 256,
  },
  SQRT014: {
    statement:
      "Cho một dãy số nguyên gồm n phần tử. Hãy tìm độ dài của dãy con tăng dài nhất (không nhất thiết liên tục) của dãy đã cho.",
    inputFormat:
      "Dòng đầu tiên chứa số nguyên n. Dòng thứ hai chứa n số nguyên a[1], a[2], ..., a[n].",
    outputFormat: "In ra độ dài của dãy con tăng dài nhất.",
    constraints: "1 ≤ n ≤ 2×10^5, -10^9 ≤ a[i] ≤ 10^9",
    examples: [
      { input: "6\n5 2 8 6 3 6", output: "3", explanation: "Dãy con tăng dài nhất là 2 3 6." },
    ],
    timeLimitMs: 1000,
    memoryLimitMb: 256,
  },
  SQRT027: {
    statement:
      "Cho một đồ thị vô hướng có trọng số gồm n đỉnh và m cạnh. Hãy tìm trọng số của cây khung nhỏ nhất (Minimum Spanning Tree) của đồ thị. Nếu đồ thị không liên thông, in ra -1.",
    inputFormat:
      "Dòng đầu tiên chứa hai số nguyên n và m. Mỗi dòng trong m dòng tiếp theo chứa ba số nguyên u, v, w mô tả một cạnh nối đỉnh u và đỉnh v với trọng số w.",
    outputFormat: "In ra tổng trọng số nhỏ nhất để nối tất cả các đỉnh, hoặc -1 nếu không thể.",
    constraints: "1 ≤ n ≤ 10^5, 0 ≤ m ≤ 2×10^5, 1 ≤ w ≤ 10^9",
    examples: [
      { input: "4 4\n1 2 1\n2 3 2\n3 4 3\n4 1 4", output: "6" },
    ],
    timeLimitMs: 2000,
    memoryLimitMb: 256,
  },
};

const genericExamples: ProblemExample[] = [{ input: "…", output: "…" }];

export function getProblemDetail(code: string): ProblemDetail {
  const known = details[code];
  if (known) return known;

  const problem = problems.find((p) => p.code === code);
  return {
    statement: `Đề bài của "${problem?.title ?? code}" đang được biên soạn. Đây là nội dung minh hoạ cho bản demo giao diện.`,
    inputFormat: "Định dạng dữ liệu vào sẽ được mô tả tại đây.",
    outputFormat: "Định dạng dữ liệu ra sẽ được mô tả tại đây.",
    constraints: "Giới hạn dữ liệu sẽ được mô tả tại đây.",
    examples: genericExamples,
    timeLimitMs: 1000,
    memoryLimitMb: 256,
  };
}
