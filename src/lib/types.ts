export type Difficulty = "Easy" | "Medium" | "Hard" | "Insane";

export interface Problem {
  id: string;
  code: string;
  title: string;
  difficulty: Difficulty;
  points: number;
  acRate: number;
  tags: string[];
  solvedByMe?: boolean;
  attemptedByMe?: boolean;
}

export type ContestStatus = "live" | "upcoming" | "finished";

export interface Contest {
  id: string;
  slug: string;
  title: string;
  status: ContestStatus;
  startTime: string;
  durationMinutes: number;
  participants: number;
  rated: boolean;
}

export type SubmissionVerdict =
  | "AC"
  | "WA"
  | "TLE"
  | "MLE"
  | "RE"
  | "CE"
  | "PENDING";

export interface Submission {
  id: string;
  problemCode: string;
  problemTitle: string;
  user: string;
  language: string;
  verdict: SubmissionVerdict;
  score: number;
  runtimeMs: number;
  memoryKb: number;
  submittedAt: string;
}

export interface RankingEntry {
  rank: number;
  handle: string;
  rating: number;
  solved: number;
  penalty: string;
  perProblem: { code: string; status: "ac" | "wa" | "none"; attempts: number; time?: string }[];
}

export interface UserProfile {
  handle: string;
  fullName: string;
  rating: number;
  maxRating: number;
  rank: string;
  solved: number;
  submissions: number;
  joinDate: string;
  school: string;
}
