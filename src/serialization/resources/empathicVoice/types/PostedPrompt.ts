/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const PostedPrompt: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedPrompt.Raw,
    Hume.empathicVoice.PostedPrompt
> = core.serialization.object({
    name: core.serialization.string().optional(),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    text: core.serialization.string().optional(),
});

export declare namespace PostedPrompt {
    interface Raw {
        name?: string | null;
        version_description?: string | null;
        text?: string | null;
    }
}