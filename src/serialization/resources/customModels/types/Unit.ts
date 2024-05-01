/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const Unit: core.serialization.Schema<serializers.customModels.Unit.Raw, Hume.customModels.Unit> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Unit {
    type Raw = Record<string, unknown>;
}