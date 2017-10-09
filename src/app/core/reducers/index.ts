import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromFeelings from './feelings';

export interface State {
  feelings: fromFeelings.State;
}

export const reducers: ActionReducerMap<State> = {
  feelings: fromFeelings.reducer
};

// feelings feature
export const getFeelingsState = createFeatureSelector<fromFeelings.State>('feelings');

// attribute selectors
export const getHateStas = createSelector(
  getFeelingsState,
  fromFeelings.getHateStas
);
