/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { FacePrediction } from "./FacePrediction";

export const GroupedPredictionsFacePrediction: core.serialization.ObjectSchema<
    serializers.customModels.GroupedPredictionsFacePrediction.Raw,
    Hume.customModels.GroupedPredictionsFacePrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(FacePrediction),
});

export declare namespace GroupedPredictionsFacePrediction {
    interface Raw {
        id: string;
        predictions: FacePrediction.Raw[];
    }
}