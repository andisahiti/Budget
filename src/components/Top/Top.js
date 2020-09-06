import React from 'react'
import classes from './Top.css'
import { connect } from 'react-redux';

const Top = React.memo(props => {


    let date, year, month, months;

    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let percentage = null;

    let budget = props.incomeProp - props.expensesProp;
    if (budget > 0) {
        percentage = Math.round(props.expensesProp * 100 / props.incomeProp);
    }

    let income = props.incomeProp.toFixed(2)
    let expenses = props.expensesProp.toFixed(2)

    return (
        <div className={classes.top}>
            <div className={classes.budget}>
                <div className={classes.budget__title}>
                    Available Budget in <span className={classes.budget__title__month}       >{months[month] + ' ' + year}</span>:
        </div>

                <div className={classes.budget__value}>{budget.toFixed(2)}</div>

                <div className={classes.budget__income + ' ' + classes.clearfix}>
                    <div className={classes.budget__income__text}>Income</div>
                    <div className={classes.right}>
                        <div className={classes.budget__income__value}>+
                         {income}</div>
                        <div className={classes.budget__income__percentage}>&nbsp;</div>
                    </div>
                </div>

                <div className={classes.budget__expenses + ' ' + classes.clearfix}>
                    <div className={classes.budget__expenses__text}>Expenses</div>
                    <div className={classes.right + ' ' + classes.clearfix}>
                        <div className={classes.budget__expenses__value}>- {expenses}</div>
                        <div className={classes.budget__expenses__percentage}>{percentage}%</div>
                    </div>
                </div>
            </div>
        </div>

    )
})

const mapStateToProps = state => {
    return {
        incomeProp: state.data.totals.income,
        expensesProp: state.data.totals.expenses

    }
}


export default connect(mapStateToProps)(Top);