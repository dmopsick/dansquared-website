export default function calculateSingleEventProbability(favorableOutcomes, totalOutcomes, numTrials) {
  return 1 - (1 - favorableOutcomes / totalOutcomes) ** numTrials;
}
