const initialState = [
    {
        firstName: 'Jonh',
        secondName: 'Cena',
        phone: '+12415125',
        email: 'Электронная почта'
    },
    {
        firstName: 'Arthur',
        secondName: 'Morgan',
        phone: '+66456547',
        email: 'am@gmail.com'
    },
    {
        firstName: 'Elon',
        secondName: 'Musk',
        phone: '+845457458',
        email: 'em@gmail.com'
    },

]

export default function contactListReducer(state = initialState, action){
    return state;
}