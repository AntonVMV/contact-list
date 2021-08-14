import * as actionTypes from './actionTypes';

const initialState = [];

export default function contactListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_CONTACT:
      return [
        ...state,
        action.payload,
      ];

    case actionTypes.UPDATE_CONTACT:
      return state.map((item, index) => {
        if (index === parseInt(action.payload.id)) {
          return action.payload.value;
        }

        return item;
      });

    case actionTypes.DELETE_CONTACT:
      return state.filter(item => item !== action.payload);

    default:
      return state;
  }
}
