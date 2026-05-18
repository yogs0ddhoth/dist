import type { FeatureTheme } from '../../types/api';
import type { CriticalityRatings } from '../utils/boardToSheets';
interface CriticalityFormProps {
    featuresAndThemes: FeatureTheme[];
    participantIds: string[];
    onSubmit: (ratings: CriticalityRatings) => void;
}
export declare function CriticalityForm(props: CriticalityFormProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CriticalityForm.d.ts.map