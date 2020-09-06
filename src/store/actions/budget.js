import * as actionTypes from './action-types'





export const addItemInc = (data) => {
    return {
        type: actionTypes.ADD_INC,
        data: data
    }
}

export const addItemExp = (data) => {
    return {
        type: actionTypes.ADD_EXP,
        data: data

    }
}
export const removeExp = (id, value) => {
    return {
        type: actionTypes.REMOVE_EXP,
        id: id,
        value: value
    }
}
export const removeInc = (id, value) => {
    return {
        type: actionTypes.REMOVE_INC,
        id: id,
        value: value
    }
}

export const typeList = (event) => {
    return {
        type: actionTypes.TYPE,
        event: event
    }
}
export const description = (event) => {
    return {
        type: actionTypes.DESCRIPTION,
        event: event
    }
}
export const value = (event) => {
    return {
        type: actionTypes.VALUE,
        event: event
    }
}


export const clear = () => {
    return {
        type: actionTypes.CLEAR
    }
}
export const clearAll = () => {
    return {
        type: actionTypes.CLEAR_ALL
    }
}

export const local = () => {
    return {
        type: actionTypes.LOCAL
    }
}
export const localStart = () => {
    return {
        type: actionTypes.LOCAL_START
    }
}