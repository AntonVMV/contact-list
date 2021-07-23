const initialState = [
    {
        firstName: 'Jonh',
        secondName: 'Cena',
        phone: '+12415125',
        email: 'Электронная почта'
    },

]

export default function contactListReducer(state = initialState, action) {
    switch (action.type) {
      case "CREATE_CONTACT":
        console.log(action.payload)
        return [
            ...state,
            {...action.payload},
        ];

      default:
        return state;
    }
  }