/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ToxicityScore: core.serialization.ObjectSchema<serializers.ToxicityScore.Raw, Hume.ToxicityScore> =
    core.serialization.object({
        name: core.serialization.string(),
        score: core.serialization.string(),
    });

export declare namespace ToxicityScore {
    interface Raw {
        name: string;
        score: string;
    }
}