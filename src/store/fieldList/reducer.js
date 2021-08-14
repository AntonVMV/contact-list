import * as actionTypes from './actionTypes';

const initialState = [];

export default function filedListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_FIELD:
      return [
        ...state,
        action.payload,
      ];

    case actionTypes.UPDATE_FIELD:
      return state.map((item, index) => {
        if (index === parseInt(action.payload.id)) {
          return action.payload.value;
        }

        return item;
      });

    case actionTypes.DELETE_FIELD:
      return state.filter(item => item !== action.payload);

    default:
      return state;
  }
}
