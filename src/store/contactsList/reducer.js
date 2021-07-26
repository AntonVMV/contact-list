const initialState = [
    {
        firstName: 'Jonh',
        secondName: 'Cena',
        phone: '+12415125',
    },

]

export default function contactListReducer(state = initialState, action) {
    switch (action.type) {
      case "CREATE_CONTACT":
        return [
            ...state,
            {...action.payload},
        ];

      case "DELETE_CONTACT":
        return [
            ...state.filter(item => item !== action.payload)
        ];
    

      default:
        return state;
    }
  }