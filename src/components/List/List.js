import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'
import classes from './List.css'
import Income from '../Income/Income'
import Expenses from '../Expenses/Expenses'

const List = React.memo((props) => {


    let budget = props.incomeProp - props.expensesProp;



    const incomeList = props.incProp.map((element, index) => {
        return (
            <Income
                description={element.des}
                value={element.value.toFixed(2)}
                key={index}
                clicked={() => {
                    props.deleteInc(index, element.value)
                    props.clear()
                }}
            ></Income>

        )
    })

    const expensesList = props.expProp.map((element, index) => {
        return (
            <Expenses
                clicked={() => {
                    props.deleteExp(index, element.value)
                    props.clear()
                }}
                description={element.des}
                value={element.value.toFixed(2)}
                key={index}
                percentage={budget > 0 ? Math.round(element.value.toFixed(2) * 100 / props.incomeProp) : null}
            ></Expenses>

        )
    })


    return (

        <React.Fragment>
            <div className={classes.income}>
                <h2 className={classes.income__title}>Income</h2>
                <div className={classes.income__list}>
                    {incomeList}
                </div>
            </div>
            <div className={classes.expenses}>
                <h2 className={classes.expenses__title}>Expenses</h2>
                <div className={classes.expenses__list}>
                    {expensesList}
                </div>
            </div>
        </React.Fragment>

    )
})

const mapStateToProps = state => {
    return {
        incProp: state.data.allItems.inc,
        expProp: state.data.allItems.exp,
        incomeProp: state.data.totals.income,
        expensesProp: state.data.totals.expenses

    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteInc: (id, value) => dispatch(action.removeInc(id, value)),
        deleteExp: (id, value) => dispatch(action.removeExp(id, value)),
        clear: () => dispatch(action.clear())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);