import { storeFreeze } from 'ngrx-store-freeze';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';

// -------------------------------
export interface State {
}

export const reducers: ActionReducerMap<State> = {
};
// -------------------------------

// -------------------------------
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

// dev time reducers
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
// -------------------------------

// other reducers
