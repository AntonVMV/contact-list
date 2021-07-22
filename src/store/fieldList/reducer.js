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
    {
        name: 'email',
        displayName: 'Электронная почта',
        display: false,
    },
    {
        name: 'adress',
        displayName: 'Адрес',
        display: false,
    }
]

export default function filedListReducer(state = initialState, action){
    return state
}