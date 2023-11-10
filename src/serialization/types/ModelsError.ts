/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ModelsError: core.serialization.ObjectSchema<
    serializers.ModelsError.Raw,
    Hume.ModelsError
> = core.serialization.object({
    error: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
});

export declare namespace ModelsError {
    interface Raw {
        error?: string | null;
        code?: string | null;
    }
}
