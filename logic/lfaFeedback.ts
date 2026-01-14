type LFAData = {
  problem: string;
  outcomes: string[];
  stakeholders: string[];
  interventions: string[];
  indicators: string[];
};

type FeedbackItem = {
  type: "success" | "warning" | "error";
  message: string;
};

export function generateFeedback(data: LFAData): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  // Problem quality
  if (!data.problem || data.problem.length < 40) {
    feedback.push({
      type: "warning",
      message:
        "Problem statement is too short. Consider describing who is affected and why the problem exists.",
    });
  } else {
    feedback.push({
      type: "success",
      message: "Problem statement is clearly articulated.",
    });
  }

  // Outcomes vs Interventions alignment
  if (
    data.outcomes.length > 0 &&
    data.interventions.length > 0 &&
    data.interventions.length < data.outcomes.length
  ) {
    feedback.push({
      type: "warning",
      message:
        "There are fewer interventions than outcomes. Some outcomes may not be fully addressed.",
    });
  }

  // Indicators measurability check
  const vagueIndicators = data.indicators.filter(
    (i) =>
      !i.toLowerCase().includes("percentage") &&
      !i.toLowerCase().includes("score") &&
      !i.toLowerCase().includes("rate") &&
      !i.toLowerCase().includes("number")
  );

  if (vagueIndicators.length > 0) {
    feedback.push({
      type: "warning",
      message:
        "Some indicators may not be measurable. Consider adding numbers, scores, or rates.",
    });
  } else if (data.indicators.length > 0) {
    feedback.push({
      type: "success",
      message: "Indicators appear measurable and well-defined.",
    });
  }

  // Stakeholder coverage
  if (data.stakeholders.length < 2) {
    feedback.push({
      type: "warning",
      message:
        "Consider identifying more stakeholders to ensure program feasibility.",
    });
  }

  return feedback;
}