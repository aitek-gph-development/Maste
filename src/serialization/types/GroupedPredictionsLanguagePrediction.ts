/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const GroupedPredictionsLanguagePrediction: core.serialization.ObjectSchema<
    serializers.GroupedPredictionsLanguagePrediction.Raw,
    Hume.GroupedPredictionsLanguagePrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("..")).LanguagePrediction
        )
    ),
});

export declare namespace GroupedPredictionsLanguagePrediction {
    interface Raw {
        id: string;
        predictions: serializers.LanguagePrediction.Raw[];
    }
}
