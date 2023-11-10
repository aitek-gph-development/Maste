/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const SentimentItem: core.serialization.ObjectSchema<
    serializers.SentimentItem.Raw,
    Hume.SentimentItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    score: core.serialization.number().optional(),
});

export declare namespace SentimentItem {
    interface Raw {
        name?: string | null;
        score?: number | null;
    }
}
