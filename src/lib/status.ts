import type { BadgeVariant } from "../components/ui/Badge";
import type { ContestStatus, Difficulty, SubmissionVerdict } from "./types";

export function difficultyVariant(d: Difficulty): BadgeVariant {
  switch (d) {
    case "Easy":
      return "success";
    case "Medium":
      return "warning";
    case "Hard":
      return "danger";
    case "Insane":
      return "accent";
  }
}

export function verdictVariant(v: SubmissionVerdict): BadgeVariant {
  switch (v) {
    case "AC":
      return "success";
    case "PENDING":
      return "info";
    case "CE":
      return "neutral";
    default:
      return "danger";
  }
}

export function verdictLabel(v: SubmissionVerdict): string {
  switch (v) {
    case "AC":
      return "Chấp nhận";
    case "WA":
      return "Sai kết quả";
    case "TLE":
      return "Quá thời gian";
    case "MLE":
      return "Quá bộ nhớ";
    case "RE":
      return "Lỗi runtime";
    case "CE":
      return "Lỗi biên dịch";
    case "PENDING":
      return "Đang chấm";
  }
}

export function contestStatusVariant(s: ContestStatus): BadgeVariant {
  switch (s) {
    case "live":
      return "accent";
    case "upcoming":
      return "info";
    case "finished":
      return "neutral";
  }
}

export function contestStatusLabel(s: ContestStatus): string {
  switch (s) {
    case "live":
      return "Đang diễn ra";
    case "upcoming":
      return "Sắp diễn ra";
    case "finished":
      return "Đã kết thúc";
  }
}

export function ratingTierColor(rating: number): BadgeVariant {
  if (rating >= 2700) return "success";
  if (rating >= 2300) return "info";
  if (rating >= 1900) return "warning";
  if (rating >= 1400) return "danger";
  return "neutral";
}
