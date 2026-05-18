/**
 * Lithium converge-diverge prompts adapted for Copilot Excel-based workflow.
 * Sourced from ../Lithium/prompts/converge_diverge/ — snapshot at demo/one-off branch.
 * Updates to Lithium prompts do not propagate automatically.
 */
import type { ConceptScoresResult, FeatureTheme, RtcEbc } from '../../types/api';
export declare var ROUND1_INSTRUCTIONS_ROWS: unknown[][];
export declare function buildRound2InstructionRows(conceptScores: ConceptScoresResult, featuresAndThemes: FeatureTheme[]): unknown[][];
export declare var MASTER_PROMPT: string;
export declare function formatRtcEbcAsPrompt(r: RtcEbc): string;
//# sourceMappingURL=copilotPrompts.d.ts.map