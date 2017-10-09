import {Action} from '@ngrx/store';

export const HATE_STAS = '[Core] Hate Stas';
export const STOP_HATING_STAS = '[Core] Stop Hating Stas';

export class HateStas implements Action {
  readonly type = HATE_STAS;
}

export class StopHatingStas implements Action {
  readonly type = STOP_HATING_STAS;
}

export type Actions = HateStas | StopHatingStas;
