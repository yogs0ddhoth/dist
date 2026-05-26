import type { ParsedBoard, ScoringFeatureEntry } from '../../types';
import type { ConceptScoresResult, FeatureTheme } from '../../types/api';
export interface Round1Output {
    featuresAndThemes: FeatureTheme[];
    conceptScores: ConceptScoresResult;
}
export declare function sanitizeSheetName(name: string): string;
export declare function buildRound1DataRows(data: ParsedBoard, projectName: string): unknown[][];
export declare function buildRound2DataRows(featuresAndThemes: FeatureTheme[], scoringFeatures: ScoringFeatureEntry[]): unknown[][];
//# sourceMappingURL=boardToSheets.d.ts.map