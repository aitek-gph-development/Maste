/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Failed {
    /** When this job was created (Unix timestamp in milliseconds). */
    created_timestamp_ms: number;
    /** When this job started (Unix timestamp in milliseconds). */
    started_timestamp_ms: number;
    /** When this job ended (Unix timestamp in milliseconds). */
    ended_timestamp_ms: number;
    /** An error message. */
    message: string;
}
