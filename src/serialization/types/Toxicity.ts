/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const Toxicity: core.serialization.Schema<
    serializers.Toxicity.Raw,
    Hume.Toxicity
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("..")).ToxicityItem)
);

export declare namespace Toxicity {
    type Raw = serializers.ToxicityItem.Raw[];
}
