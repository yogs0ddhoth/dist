import type { ParsedBoard } from '../../types';
import type { ConceptScoresResult, FeatureTheme } from '../../types/api';
export interface Round1Output {
    featuresAndThemes: FeatureTheme[];
    conceptScores: ConceptScoresResult;
}
export type CriticalityLabel = 'Must Have' | 'Should Have' | 'Could Do' | "Won't Do";
/** { [participantId]: { [featureName]: CriticalityLabel } } */
export type CriticalityRatings = Record<string, Record<string, CriticalityLabel>>;
export declare function sanitizeSheetName(name: string): string;
export declare function buildRound1DataRows(data: ParsedBoard, projectName: string): unknown[][];
export declare function buildRound2DataRows(featuresAndThemes: FeatureTheme[], ratings: CriticalityRatings): unknown[][];
//# sourceMappingURL=boardToSheets.d.ts.map