import { standings } from "../data/contests";
import { currentUser, submissions } from "../data/submissions";
import type { UserProfile } from "./types";

export function getUserProfile(handle: string): UserProfile | null {
  if (handle === currentUser.handle) return currentUser;

  const entry = standings.find((s) => s.handle === handle);
  if (entry) {
    return {
      handle: entry.handle,
      fullName: "—",
      rating: entry.rating,
      maxRating: entry.rating,
      rank: "—",
      solved: entry.solved,
      submissions: submissions.filter((s) => s.user === handle).length,
      joinDate: "—",
      school: "—",
    };
  }

  return null;
}
