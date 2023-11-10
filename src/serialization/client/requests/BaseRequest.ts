/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Hume from "../../../api";
import * as core from "../../../core";

export const BaseRequest: core.serialization.Schema<
    serializers.BaseRequest.Raw,
    Hume.BaseRequest
> = core.serialization.object({
    models: core.serialization
        .lazyObject(async () => (await import("../..")).Models)
        .optional(),
    transcription: core.serialization
        .lazyObject(async () => (await import("../..")).Transcription)
        .optional(),
    urls: core.serialization.list(core.serialization.string()).optional(),
    callbackUrl: core.serialization.property(
        "callback_url",
        core.serialization.string().optional()
    ),
    notify: core.serialization.boolean().optional(),
});

export declare namespace BaseRequest {
    interface Raw {
        models?: serializers.Models.Raw | null;
        transcription?: serializers.Transcription.Raw | null;
        urls?: string[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
    }
}
