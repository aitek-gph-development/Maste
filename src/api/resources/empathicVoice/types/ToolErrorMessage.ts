/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is a function call error.
 */
export interface ToolErrorMessage {
    type: "tool_error";
    customSessionId?: string;
    /** ID of the tool call. */
    toolCallId: string;
    /** The content passed to the LLM in place of the tool response. */
    content: string;
    /** Error message from the tool call, not exposed to the LLM or user. */
    error: string;
    code?: string;
    level?: Hume.empathicVoice.ErrorLevel;
}