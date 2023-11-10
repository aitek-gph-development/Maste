/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ModelResponse: core.serialization.ObjectSchema<
    serializers.ModelResponse.Raw,
    Hume.ModelResponse
> = core.serialization.object({
    burst: core.serialization
        .lazyObject(async () => (await import("..")).BurstResponse)
        .optional(),
    face: core.serialization
        .lazyObject(async () => (await import("..")).FaceResponse)
        .optional(),
    facemesh: core.serialization
        .lazyObject(async () => (await import("..")).FacemeshResponse)
        .optional(),
    language: core.serialization
        .lazyObject(async () => (await import("..")).LanguageResponse)
        .optional(),
    prosody: core.serialization
        .lazyObject(async () => (await import("..")).ProsodyResponse)
        .optional(),
});

export declare namespace ModelResponse {
    interface Raw {
        burst?: serializers.BurstResponse.Raw | null;
        face?: serializers.FaceResponse.Raw | null;
        facemesh?: serializers.FacemeshResponse.Raw | null;
        language?: serializers.LanguageResponse.Raw | null;
        prosody?: serializers.ProsodyResponse.Raw | null;
    }
}
