/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Settings for this chat session.
 */
export interface SessionSettings {
    audio?: Hume.empathicVoice.AudioConfiguration;
    builtinTools?: Hume.empathicVoice.BuiltinToolConfig[];
    customSessionId?: string;
    languageModelApiKey?: string;
    systemPrompt?: string;
    tools?: Hume.empathicVoice.Tool[];
    /** The type of message sent through the socket; for a Session Settings message, this must be 'session_settings'. */
    type: "session_settings";
}
