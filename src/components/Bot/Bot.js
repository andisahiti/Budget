import React from 'react'
import classes from './Bot.css'
import List from '../List/List'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'
import nextId from "react-id-generator";

const Bot = React.memo((props) => {

    let minus = null;
    let minusBtn = null;
    if (props.minusProp === 'exp') {
        minus = classes.red__focus
        minusBtn = classes.red
    }

    let active = classes.add__btn + ' ' + minusBtn;


    const addListItem = () => {
        const newListItem = {
            id: nextId(),
            des: props.desProp,
            value: +props.valueProp
        }


        if (props.minusProp === 'exp') {
            props.addExp(newListItem)


        } else if (props.minusProp === 'inc') {
            props.addInc(newListItem)

        }
        props.clear();
    }


    return (
        <div className={classes.bottom}>
            <div className={classes.add}>
                <div className={classes.add__container}>
                    <select onChange={(event) => {
                        event.persist();
                        props.inputType(event)
                    }} className={classes.add__type + ' ' + minus}>
                        <option value='inc' >+</option>
                        <option value='exp'>-</option>
                    </select>
                    <span tooltip={props.desProp.length <= 3 ? 'Description too short' : null} flow="up">
                        <input
                            value={props.desProp}
                            onChange={(event) => {
                                event.persist();
                                props.inputDes(event)
                            }}
                            type="text"
                            className={classes.add__description + ' ' + minus}
                            placeholder="Add description"
                        />
                    </span>
                    <span tooltip={props.valueProp <= 0 ? 'Value must me > 0' : null} flow="up">
                        <input
                            value={props.valueProp}
                            type="number"
                            onChange={(event) => {
                                event.persist();
                                props.inputVal(event)
                            }}
                            className={classes.add__value + ' ' + minus} placeholder="Value" />
                    </span>

                    <button
                        disabled={props.desProp.length <= 3 || props.valueProp <= 0}
                        style={{
                            fontSize: 17,
                            border: '1px solid ',
                            boxSizing: 'border-box',
                            padding: 5,
                            borderRadius: 20
                        }}
                        onClick={addListItem}
                        className={props.desProp.length > 3 && props.valueProp > 0 ? active : classes.disabled}>
                        Add
                    </button>
                </div>
            </div>

            <div className={classes.container + ' ' + classes.clearfix}>
                <List></List>
            </div>
        </div>
    )
}
)
const mapStateToProps = state => {
    return {
        minusProp: state.data.minus,
        desProp: state.data.des,
        valueProp: state.data.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputType: (event) => dispatch(action.typeList(event)),
        inputDes: (event) => dispatch(action.description(event)),
        inputVal: (event) => dispatch(action.value(event)),
        addInc: (data) => dispatch(action.addItemInc(data)),
        addExp: (data) => dispatch(action.addItemExp(data)),
        clear: () => dispatch(action.clear())

    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Bot);