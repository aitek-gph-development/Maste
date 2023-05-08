/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const FacsScore: core.serialization.ObjectSchema<serializers.FacsScore.Raw, Hume.FacsScore> =
    core.serialization.object({
        name: core.serialization.string(),
        score: core.serialization.string(),
    });

export declare namespace FacsScore {
    interface Raw {
        name: string;
        score: string;
    }
}