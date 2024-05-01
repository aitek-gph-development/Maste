/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Hume from "../../../../../../api";
import * as core from "../../../../../../core";
import { StreamDataModelsFace } from "./StreamDataModelsFace";
import { StreamDataModelsLanguage } from "./StreamDataModelsLanguage";

export const StreamDataModels: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.StreamDataModels.Raw,
    Hume.expressionMeasurement.StreamDataModels
> = core.serialization.object({
    burst: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    face: StreamDataModelsFace.optional(),
    facemesh: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    language: StreamDataModelsLanguage.optional(),
    prosody: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace StreamDataModels {
    interface Raw {
        burst?: Record<string, unknown> | null;
        face?: StreamDataModelsFace.Raw | null;
        facemesh?: Record<string, unknown> | null;
        language?: StreamDataModelsLanguage.Raw | null;
        prosody?: Record<string, unknown> | null;
    }
}