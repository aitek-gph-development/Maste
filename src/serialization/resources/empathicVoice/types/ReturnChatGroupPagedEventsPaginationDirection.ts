/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const ReturnChatGroupPagedEventsPaginationDirection: core.serialization.Schema<
  serializers.empathicVoice.ReturnChatGroupPagedEventsPaginationDirection.Raw,
  Hume.empathicVoice.ReturnChatGroupPagedEventsPaginationDirection
> = core.serialization.enum_(['ASC', 'DESC']);

export declare namespace ReturnChatGroupPagedEventsPaginationDirection {
  type Raw = 'ASC' | 'DESC';
}
