/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { Role } from "./Role";

export const ChatMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.ChatMessage.Raw,
    Hume.empathicVoice.ChatMessage
> = core.serialization.object({
    content: core.serialization.string().optional(),
    role: Role,
});

export declare namespace ChatMessage {
    interface Raw {
        content?: string | null;
        role: Role.Raw;
    }
}