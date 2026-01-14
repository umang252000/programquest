// logic/lfaValidator.ts

export type LFAData = {
  problem?: string;
  outcomes?: string[];
  stakeholders?: string[];
  interventions?: string[];
  indicators?: string[];
};

/* ---------------- Validation Rules ---------------- */

export const rules = {
  problemRequired: (data: LFAData) =>
    !!data.problem && data.problem.trim().length > 0,

  outcomesRequired: (data: LFAData) =>
    !!data.outcomes && data.outcomes.length > 0,

  stakeholdersRequired: (data: LFAData) =>
    !!data.stakeholders && data.stakeholders.length > 0,

  interventionsRequired: (data: LFAData) =>
    !!data.interventions && data.interventions.length > 0,

  indicatorsRequired: (data: LFAData) =>
    !!data.indicators && data.indicators.length > 0,
};

/* ---------------- Main Validator ---------------- */

export function validateLFA(data: LFAData) {
  const results = {
    problem: rules.problemRequired(data),
    outcomes: rules.outcomesRequired(data),
    stakeholders: rules.stakeholdersRequired(data),
    interventions: rules.interventionsRequired(data),
    indicators: rules.indicatorsRequired(data),
  };

  const missing: string[] = Object.entries(results)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  /**
   * Dependency logic
   * Interventions cannot exist without outcomes
   */
  if (
    data.interventions &&
    data.interventions.length > 0 &&
    (!data.outcomes || data.outcomes.length === 0)
  ) {
    if (!missing.includes("outcomes")) {
      missing.push("outcomes");
    }
  }

  return {
    results,
    isComplete: missing.length === 0,
    missing,
  };
}