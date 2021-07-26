const initialState = [
    {
        name: 'firstName',
        displayName: 'Имя',
        display: true,
    },
    {
        name: 'secondName',
        displayName: 'Фамилия',
        display: true,
    },
    {
        name: 'phone',
        displayName: 'Телефон',
        display: true,
    },
]

export default function filedListReducer(state = initialState, action){
    switch (action.type) {
        case "CREATE_FIELD":
          return [
              ...state,
              {...action.payload},
          ];
        
          
        case "DELETE_FIELD":
          return [
            ...state.filter(item => item !== action.payload)
        ];

        default:
          return state;
      }
}