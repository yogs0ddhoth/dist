import type { AnalysisResponse } from '../../types/api';
import type { Round1Output } from './boardToSheets';
export declare function parseRound1Workbook(file: File): Promise<Round1Output>;
export declare function parseRound2Workbook(file: File, round1Output: Round1Output): Promise<AnalysisResponse>;
//# sourceMappingURL=importSheets.d.ts.map