/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedEventMessageSpec } from "./PostedEventMessageSpec";

export const PostedEventMessageSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedEventMessageSpecs.Raw,
    Hume.empathicVoice.PostedEventMessageSpecs
> = core.serialization.object({
    onNewChat: core.serialization.property("on_new_chat", PostedEventMessageSpec.optional()),
});

export declare namespace PostedEventMessageSpecs {
    interface Raw {
        on_new_chat?: PostedEventMessageSpec.Raw | null;
    }
}