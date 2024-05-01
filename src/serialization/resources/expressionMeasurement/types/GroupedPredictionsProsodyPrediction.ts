/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { ProsodyPrediction } from "./ProsodyPrediction";

export const GroupedPredictionsProsodyPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.GroupedPredictionsProsodyPrediction.Raw,
    Hume.expressionMeasurement.GroupedPredictionsProsodyPrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(ProsodyPrediction),
});

export declare namespace GroupedPredictionsProsodyPrediction {
    interface Raw {
        id: string;
        predictions: ProsodyPrediction.Raw[];
    }
}