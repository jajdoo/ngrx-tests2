export interface State {
  hateStas: boolean;
}

const initialState: State = {
  hateStas: true
};

// selector functions
export const getHateStas = (state: State) => state.hateStas;
