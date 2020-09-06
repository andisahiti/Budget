import * as actionType from '../actions/action-types'

const initialState = {
    data: {
        allItems: {
            inc: [],
            exp: [],
        },
        totals: {
            income: 0,
            expenses: 0,
        },
        minus: 'inc',
        des: '',
        value: 0

    }
}


const reducer = (state = initialState, action) => {


    switch (action.type) {
        case actionType.TYPE:
            localStorage.setItem('data', JSON.stringify(state))
            return {
                ...state,
                data: {
                    ...state.data,
                    minus: action.event.target.value
                }
            }
        case actionType.ADD_INC:

            const newArrInc = [...state.data.allItems.inc];
            newArrInc.push(action.data)
            let incomeState = state.data.totals.income;
            incomeState += action.data.value
            return {
                ...state,
                data: {
                    ...state.data,
                    allItems: {
                        ...state.data.allItems,
                        inc: newArrInc
                    },
                    totals: {
                        ...state.data.totals,
                        income: incomeState
                    }
                }
            }
        case actionType.ADD_EXP:

            const newArrExp = [...state.data.allItems.exp];
            newArrExp.push(action.data)
            let expensesState = state.data.totals.expenses;
            expensesState += action.data.value
            return {
                ...state,
                data: {
                    ...state.data,
                    allItems: {
                        ...state.data.allItems,
                        exp: newArrExp
                    },
                    totals: {
                        ...state.data.totals,
                        expenses: expensesState
                    }
                }
            }

        case actionType.VALUE:

            return {
                ...state,
                data: {
                    ...state.data,
                    value: action.event.target.value
                }
            }
        case actionType.DESCRIPTION:
            return {
                ...state,
                data: {
                    ...state.data,
                    des: action.event.target.value
                }
            }
        case actionType.CLEAR:
            localStorage.setItem('data', JSON.stringify(state))
            return {
                ...state,
                data: {
                    ...state.data,
                    des: ' ',
                    value: 0
                }
            }
        case actionType.CLEAR_ALL:
            return {
                ...state,
                data: {
                    ...state.data,
                    des: ' ',
                    value: 0,
                    minus: 'inc'
                }
            }
        case actionType.LOCAL:
            const local = JSON.parse(localStorage.getItem('data'));
            if (local) {

                return {
                    ...local
                }
            } else {
                return {
                    ...state
                }
            }

        case actionType.REMOVE_INC:
            localStorage.setItem('data', JSON.stringify(state))
            const newArrRemoveInc = [...state.data.allItems.inc]
            newArrRemoveInc.splice(action.id, 1)
            let incomeStateR = state.data.totals.income;
            incomeStateR -= action.value
            return {
                ...state,
                data: {
                    ...state.data,
                    allItems: {
                        ...state.data.allItems,
                        inc: newArrRemoveInc
                    },
                    totals: {
                        ...state.data.totals,
                        income: incomeStateR
                    }

                }
            }
        case actionType.REMOVE_EXP:
            localStorage.setItem('data', JSON.stringify(state))
            const newArrRemoveExp = [...state.data.allItems.exp]
            newArrRemoveExp.splice(action.id, 1)
            let expensesStateR = state.data.totals.expenses;
            expensesStateR -= action.value

            return {
                ...state,
                data: {
                    ...state.data,
                    allItems: {
                        ...state.data.allItems,
                        exp: newArrRemoveExp
                    },
                    totals: {
                        ...state.data.totals,
                        expenses: expensesStateR
                    }

                }
            }




        default:
            return state;
    }
}


export default reducer;