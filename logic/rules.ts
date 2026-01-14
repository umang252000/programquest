export interface LFAData {
  problem?: string;
  outcomes?: string[];
  stakeholders?: string[];
  interventions?: string[];
  indicators?: string[];
}

export const rules = {
  problemRequired(data: LFAData) {
    return !!data.problem && data.problem.length > 20;
  },

  outcomesRequired(data: LFAData) {
    return data.outcomes && data.outcomes.length > 0;
  },

  stakeholdersRequired(data: LFAData) {
    return data.stakeholders && data.stakeholders.length > 0;
  },

  interventionsRequired(data: LFAData) {
    return data.interventions && data.interventions.length > 0;
  },

  indicatorsRequired(data: LFAData) {
    return data.indicators && data.indicators.length > 0;
  },
};