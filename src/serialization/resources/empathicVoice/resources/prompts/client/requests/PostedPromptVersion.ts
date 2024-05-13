/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedPromptVersion: core.serialization.Schema<
    serializers.empathicVoice.PostedPromptVersion.Raw,
    Hume.empathicVoice.PostedPromptVersion
> = core.serialization.object({
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    text: core.serialization.string(),
});

export declare namespace PostedPromptVersion {
    interface Raw {
        version_description?: string | null;
        text: string;
    }
}